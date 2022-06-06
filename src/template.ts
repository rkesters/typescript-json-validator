import * as Ajv from 'ajv';
import stringify from 'json-stable-stringify';
import * as TJS from 'typescript-json-schema';
import { basename, relative, dirname, resolve } from 'path';
import { isEmpty, isNil, remove } from 'lodash';
import { isDefinition } from './utils';

export const TSLINT_DISABLE = `/* tslint:disable */`;
export const GENERATED_COMMENT = `// generated by typescript-json-validator`;

export const IMPORT_INSPECT = `import {inspect} from 'util';`;

export const IMPORT_AJV = (_tsConfig: any): string => {
	return `import Ajv , * as AJV from 'ajv';\nimport addFormats from 'ajv-formats';import {formatNames} from 'ajv-formats/dist/formats';`;
	// return tsConfig.allowSyntheticDefaultImports ||
	//     (tsConfig.esModuleInterop && /^es/.test(tsConfig.module)) ||
	//     tsConfig.module === 'system'
	//     ? `import Ajv from 'ajv';`
	//     : `import Ajv = require('ajv');`;
};

export const DECLARE_KOA_CONTEXT = `export interface KoaContext {
  readonly request?: unknown; // {body?: unknown}
  readonly params?: unknown;
  readonly query?: unknown;
  throw(status: 400, message: string): unknown;
}`;
export const importType = (name: string, output: string, source: string, symbolsByFile: Record<string, string[]>, { isNamedExport }: { isNamedExport: boolean }) => {
	return isNamedExport
		? importNamedTypes([name], output, source, symbolsByFile, {
				isNamedExport,
		  })
		: importDefaultType(name, getRelativeName(source, output));
};

function ensurePosix(relativePath: string): string {
	const posixPath =  relativePath.replaceAll('\\', '/');

  return posixPath
}

function getRelativeName(src: string, tgt: string): string {
  const source = resolve(src);
  const target = resolve(tgt);
	const baseFilename = basename(source, /\.ts$/.test(source) ? '.ts' : '.tsx');
	const relativePath = relative(dirname(resolve(target)), dirname(resolve(source)));
	const relativeName = isEmpty(relativePath) ? `./${baseFilename}` : `${relativePath}/${baseFilename}`;
	console.log(`!!!!! ${source} ---> ${target} == ${relativeName}`)
  return ensurePosix(relativeName);
}

export const importNamedTypes = (
	names: string[],
	output: string,
	src: string,
	symbolsByFile: Record<string, string[]>,
	{ isNamedExport }: { isNamedExport: boolean },
	defaultName?: string,
) => {
	if (names.length > 1 || isNamedExport) {
		return Object.keys(symbolsByFile)
			.map((source) => {
				const relativePath = getRelativeName(source, output);
				const fileSyms = symbolsByFile[source];
				const includesDefault = fileSyms.includes('default');
				remove(fileSyms, (l) => l === 'default');
				if (includesDefault && isNil(defaultName)) {
					throw new Error(`TypeName must be given, when importing default`);
				}
				if (isEmpty(fileSyms) && includesDefault) {
					return `import * as ${defaultName} from '${relativePath}';`;
				}
				if (isEmpty(fileSyms)) {
					return '';
				}
				return `import {${symbolsByFile[source].join(', ')}} ${includesDefault ? `, * as ${defaultName}` : ''} from '${relativePath}';`;
			})
			.join('\n');
	}
	return importDefaultType(names[0], getRelativeName(src, output));
};
export const importDefaultType = (name: string, relativePath: string) => {
	return `import ${name} from '${relativePath}';`;
};

export const declareAJV = (options: Ajv.Options, formatMode: 'full' | 'fast'): string => {
	const declareTag = (variable: string, opts: string) => `export const ${variable} = new Ajv(${opts});
  addFormats(${variable}, {mode: "${formatMode}", formats: formatNames, keywords: true});
  ${variable}.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));`;

	let out;
	if (options.removeAdditional) {
		out = declareTag(
			'cleanerAjv',
			stringify({
				coerceTypes: false,
				allErrors: true,
				...options,
				useDefaults: true,
			}),
		);
	}
	const exactOptions: Ajv.Options = { ...options, removeAdditional: false };

	return `${out}
  ${declareTag(
		'ajv',
		stringify({
			coerceTypes: false,
			allErrors: true,
			...exactOptions,
		}),
  )}
  `;
};

export const exportNamed = (names: string[]) => `export {${names.join(', ')}};`;

export const declareSchema = (name: string, schema: TJS.Definition, seperateSchemaFile: boolean = false, filename: string = '') => {
	if (seperateSchemaFile) {
		return `import * as ${name} from '${filename.replace(/^.*\//, './')}';`;
	}
	return `export const ${name} = ${stringify(schema, { space: 2 })};`;
};

export const addSchema = (name: string, options: Ajv.Options) =>
	options.removeAdditional ? `cleanerAjv.addSchema(${name}, '${name}'); ajv.addSchema(${name}, '${name}')` : `ajv.addSchema(${name}, '${name}')`;

export const DECLARE_VALIDATE_TYPE = `export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<AJV.ValidateFunction, 'errors'>`;
export const validateType = (typeName: string) => `ValidateFunction<${typeName}>`;

export const compileSchema = (schemaName: string, typeName: string, variable: string) => `${variable}.compile(${schemaName}) as ${validateType(typeName)}`;

export const validateFn = (typeName: string, schemaName: string, options: Ajv.Options) => {
	const gen = (name: string, variable: string, isdefault: boolean, isPermissive: boolean) =>
		`export const is${typeName}${isPermissive ? 'Permissive' : ''} = ${compileSchema(schemaName, typeName, variable)};
export ${isdefault ? 'default' : ''} function ${name}(value: unknown): ${typeName} {
  if (is${typeName}${isPermissive ? 'Permissive' : ''}(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(is${typeName}.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: '${typeName}'}) +
      '\\n\\n' +
      inspect(value),
    );
  }
};
`;

	return `${options.removeAdditional ? gen('cleanAndValidate', 'cleanerAjv', false, true) : ''} ${gen('validate', 'ajv', true, false)}`;
};

function typeOf(typeName: string, property: string, schema: TJS.Definition) {
	if (schema.definitions && schema.definitions[typeName]) {
		const typeSchema: TJS.DefinitionOrBoolean = schema.definitions[typeName];
		if (isDefinition(typeSchema) && typeSchema.properties && Object.keys(typeSchema.properties).includes(property)) {
			return `${typeName}['${property}']`;
		}
	}
	return 'unknown';
}

export const validateKoaRequestOverload = (typeName: string, schema: TJS.Definition) =>
	`export function validateKoaRequest(typeName: '${typeName}'): (ctx: KoaContext) => {
  params: ${typeOf(typeName, 'params', schema)},
  query: ${typeOf(typeName, 'query', schema)},
  body: ${typeOf(typeName, 'body', schema)},
};`;

export const VALIDATE_KOA_REQUEST_FALLBACK = `export function validateKoaRequest(typeName: string): (ctx: KoaContext) => {
  params: unknown,
  query: unknown,
  body: unknown,
};`;

export const VALIDATE_KOA_REQUEST_IMPLEMENTATION = `export function validateKoaRequest(typeName: string): (ctx: KoaContext) => {
  params: any,
  query: any,
  body: any,
} {
  const params = ajv.getSchema(\`Schema#/definitions/\${typeName}/properties/params\`);
  const query = ajv.getSchema(\`Schema#/definitions/\${typeName}/properties/query\`);
  const body = ajv.getSchema(\`Schema#/definitions/\${typeName}/properties/body\`);
  const validateProperty = (
    prop: string,
    validator: any,
    ctx: KoaContext,
  ): any => {
    const data = prop === 'body' ? ctx.request && (ctx.request as any).body : (ctx as any)[prop];
    if (validator) {
      const valid = validator(data);

      if (!valid) {
        ctx.throw(
          400,
          'Invalid request: ' + ajv.errorsText(validator.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: prop}) + '\\n\\n' + inspect({params: ctx.params, query: ctx.query, body: ctx.request && (ctx.request as any).body}),
        );
      }
    }
    return data;
  };
  return (ctx) => {
    return {
      params: validateProperty('params', params, ctx),
      query: validateProperty('query', query, ctx),
      body: validateProperty('body', body, ctx),
    }
  };
}`;

export const validateOverload = (typeName: string, returnType: string = typeName, quotes: boolean = true) =>
	`export function validate(typeName: ${quotes ? `'${typeName}'` : typeName}): (value: unknown) => ${returnType};`;
export const cleanAndValidateOverload = (typeName: string, returnType: string = typeName, quotes: boolean = true) =>
	`export function cleanAndValidate(typeName: ${quotes ? `'${typeName}'` : typeName}): (value: unknown) => ${returnType};`;
export const VALIDATE_IMPLEMENTATION = `export function validate(typeName: string): (value: unknown) => any {
  const validator: any = ajv.getSchema(\`Schema#/definitions/\${typeName}\`);
  return (value: unknown): any => {
    if (!validator) {
      throw new Error(\`No validator defined for Schema#/definitions/\${typeName}\`)
    }

    const valid = validator(value);

    if (!valid) {
      throw new Error(
        'Invalid ' + typeName + ': ' + ajv.errorsText(validator.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: typeName}),
      );
    }

    return value as any;
  };
}`;

export const VALIDATE_IMPLEMENTATION_CLEANER = `export function cleanAndValidate(typeName: string): (value: unknown) => any {
  const validator: any = cleanerAjv.getSchema(\`Schema#/definitions/\${typeName}\`);
  return (value: unknown): any => {
    if (!validator) {
      throw new Error(\`No validator defined for Schema#/definitions/\${typeName}\`)
    }

    const valid = validator(value);

    if (!valid) {
      throw new Error(
        'Invalid ' + typeName + ': ' + ajv.errorsText(validator.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: typeName}),
      );
    }

    return value as any;
  };
}`;
