import {writeFileSync} from 'fs';
import {basename} from 'path';
import {parseArgs} from './parseArgs';
import parse from './parse';
import {
  printSingleTypeValidator,
  printTypeCollectionValidator,
} from './printValidator';
import prettierFile from './prettierFile';
import loadTsConfig from './loadTsConfig';
import normalizeSchema from './normalizeSchema';
import {Definition} from 'typescript-json-schema';
import stringify from 'json-stable-stringify';
import {isEmpty} from 'lodash';
import {exit} from 'process';
export {
  parse,
  parseArgs,
  printSingleTypeValidator,
  printTypeCollectionValidator,
};

export default function run(args?: string[]) {
  const {files, options} = parseArgs(args);
  const tsConfig = loadTsConfig();
  const parsed = parse(
    files.map(f => f.fileName),
    tsConfig,
    options.schema,
  );

  if (options.separateSchemaFile && !tsConfig.resolveJsonModule) {
    console.error(
      `You requested to store schema in json file, but tsconfg does not resovle json modules. `,
    );
    console.error(`Please set resolveJsonModule to true in your tsconfig`);
    exit(1);
  }

  files.forEach(({fileName, typeName}) => {
    const baseFileName = fileName.replace(/\.tsx?$/, '');
    const outputFileName = isEmpty(options.output)
      ? `${baseFileName}.validator.ts`
      : options.output;
    options.filename = isEmpty(options.filename)
      ? baseFileName
      : options.filename;
    let validator: string;
    let normalSchema: Definition;
    if (typeName) {
      const schema = parsed.getType(typeName);
      normalSchema = normalizeSchema(schema);
      validator = printSingleTypeValidator(
        typeName,
        options.useNamedExport,
        normalSchema,
        `./${basename(fileName, /\.ts$/.test(fileName) ? '.ts' : '.tsx')}`,
        tsConfig,
        options,
      );
    } else {
      const {symbols, schema} = parsed.getAllTypes();
      normalSchema = normalizeSchema(schema);
      validator = printTypeCollectionValidator(
        symbols,
        options.useNamedExport,
        normalSchema,
        `./${basename(fileName, /\.ts$/.test(fileName) ? '.ts' : '.tsx')}`,
        tsConfig,
        options,
      );
    }
    writeFileSync(outputFileName, validator);
    prettierFile(outputFileName);
    if (options.separateSchemaFile) {
      const fn = `${options.filename}.json`;
      writeFileSync(fn, stringify(normalSchema));
      prettierFile(fn);
    }
  });
}