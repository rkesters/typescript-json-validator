import run from '../';
import fs from 'fs';

describe('Basic run tests', () => {
  beforeAll(() => {
    run(['src/Example.ts', 'ExampleType']);
  });

  afterAll(() => {
    fs.unlinkSync(`src/Example.validator.ts`);
  });
  test('run', async () => {
    const {default: validate} = await import('../Example.validator');
    const test1 = {value: 'ddd', answer: 1};
    validate(test1);
  });

  test('valid', async () => {
    const {default: validate} = await import('../Example.validator');
    expect(
      validate({
        value: 'Hello World',
      }),
    ).toMatchInlineSnapshot(`
Object {
  "answer": 42,
  "value": "Hello World",
}
`);
    expect(
      validate({
        value: 'Hello World',
        email: 'forbes@lindesay.co.uk',
      }),
    ).toMatchInlineSnapshot(`
Object {
  "answer": 42,
  "email": "forbes@lindesay.co.uk",
  "value": "Hello World",
}
`);
  });

  test('invalid', async () => {
    const {default: validate} = await import('../Example.validator');
    expect(() => validate({})).toThrowErrorMatchingInlineSnapshot(`
"ExampleType should have required property 'value'

{ answer: 42 }"
`);
    expect(() =>
      validate({
        email: 'forbeslindesay.co.uk',
      }),
    ).toThrowErrorMatchingInlineSnapshot(`
"ExampleType should have required property 'value'

{ email: 'forbeslindesay.co.uk', answer: 42 }"
`);
  });
});

describe('Basic run tests with separated schema', () => {
  const moduleName = 'Exampleseparate.validator';
  beforeAll(() => {
    run([
      '--separateSchemaFile',
      '--output',
      `src/${moduleName}.ts`,
      'src/Example.ts',
      'ExampleType',
    ]);
  });

  afterAll(() => {
    fs.unlinkSync(`src/${moduleName}.ts`);
    fs.unlinkSync(`src/${moduleName}.json`);
  });
  test('run', async () => {
    const {default: validate} = await import(`../${moduleName}`);
    const test1 = {value: 'ddd', answer: 1};
    validate(test1);
  });

  test('valid', async () => {
    const {default: validate} = await import(`../${moduleName}`);
    expect(
      validate({
        value: 'Hello World',
      }),
    ).toMatchInlineSnapshot(`
Object {
  "answer": 42,
  "value": "Hello World",
}
`);
    expect(
      validate({
        value: 'Hello World',
        email: 'forbes@lindesay.co.uk',
      }),
    ).toMatchInlineSnapshot(`
Object {
  "answer": 42,
  "email": "forbes@lindesay.co.uk",
  "value": "Hello World",
}
`);
  });

  test('invalid', async () => {
    const {default: validate} = await import('../Example.validator');
    expect(() => validate({})).toThrowErrorMatchingInlineSnapshot(`
"ExampleType should have required property 'value'

{ answer: 42 }"
`);
    expect(() =>
      validate({
        email: 'forbeslindesay.co.uk',
      }),
    ).toThrowErrorMatchingInlineSnapshot(`
"ExampleType should have required property 'value'

{ email: 'forbeslindesay.co.uk', answer: 42 }"
`);
  });
});

describe('Basic run tests collection', () => {
  const moduleName = 'ExampleCollection.validator';
  beforeAll(() => {
    run(['--collection', '--output', `src/${moduleName}.ts`, 'src/Example.ts']);
  });

  afterAll(() => {
    fs.unlinkSync(`src/${moduleName}.ts`);
  });
  test('run', async () => {
    const {validate} = await import(`../${moduleName}`);
    const test1 = {value: 'ddd', answer: 1};
    validate('ExampleType')(test1);
  });

  test('valid', async () => {
    const {validate} = await import(`../${moduleName}`);
    expect(
      validate('ExampleType')({
        value: 'Hello World',
      }),
    ).toMatchInlineSnapshot(`
Object {
  "answer": 42,
  "value": "Hello World",
}
`);
    expect(
      validate('ExampleType')({
        value: 'Hello World',
        email: 'forbes@lindesay.co.uk',
      }),
    ).toMatchInlineSnapshot(`
Object {
  "answer": 42,
  "email": "forbes@lindesay.co.uk",
  "value": "Hello World",
}
`);
  });

  test('invalid', async () => {
    const {validate} = await import(`../${moduleName}`);
    expect(() =>
      validate('ExampleType')({}),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid ExampleType: ExampleType should have required property 'value'"`,
    );
    expect(() =>
      validate('ExampleType')({
        email: 'forbeslindesay.co.uk',
      }),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid ExampleType: ExampleType should have required property 'value'"`,
    );
  });
});

describe('Basic run tests collection with separated schema', () => {
  const moduleName = 'ExampleCollectionseparated.validator';
  beforeAll(() => {
    run([
      '--separateSchemaFile',
      '--collection',
      '--output',
      `src/${moduleName}.ts`,
      'src/Example.ts',
    ]);
  });

  afterAll(() => {
    fs.unlinkSync(`src/${moduleName}.ts`);
    fs.unlinkSync(`src/${moduleName}.json`);
  });
  test('run', async () => {
    const {validate} = await import(`../${moduleName}`);
    const test1 = {value: 'ddd', answer: 1};
    validate('ExampleType')(test1);
  });

  test('valid', async () => {
    const {validate} = await import(`../${moduleName}`);
    expect(
      validate('ExampleType')({
        value: 'Hello World',
      }),
    ).toMatchInlineSnapshot(`
Object {
  "answer": 42,
  "value": "Hello World",
}
`);
    expect(
      validate('ExampleType')({
        value: 'Hello World',
        email: 'forbes@lindesay.co.uk',
      }),
    ).toMatchInlineSnapshot(`
Object {
  "answer": 42,
  "email": "forbes@lindesay.co.uk",
  "value": "Hello World",
}
`);
  });

  test('invalid', async () => {
    const {validate} = await import(`../${moduleName}`);
    expect(() =>
      validate('ExampleType')({}),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid ExampleType: ExampleType should have required property 'value'"`,
    );
    expect(() =>
      validate('ExampleType')({
        email: 'forbeslindesay.co.uk',
      }),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid ExampleType: ExampleType should have required property 'value'"`,
    );
  });
});
