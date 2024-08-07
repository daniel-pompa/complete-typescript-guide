export const TITLE: string = 'Data Types Examples';

// Function that displays all Types of data
export const dataTypeExamples = (): void => {
  // Type any
  let anything: any = 'Could be anything';
  console.log('any:', anything);
  anything = 99;
  console.log('any:', anything);
  anything = [1, 2, 3];
  console.log('any:', anything);
  anything = {
    firstName: 'Gael',
    lastName: 'Pompa Ciambrino',
    age: 2,
    parents: ['Daniel Pompa Pareja', 'Emma Ciambrino Baz'],
  };
  console.log('any:', anything);

  // Type void
  const demonstrateVoid = (text: string): void => {
    console.log(`Hello! ${text}`);
  };
  demonstrateVoid('This function does not return any value');

  // Types null y undefined
  const nullValue: null = null;
  const undefinedValue: undefined = undefined;
  console.log('null:', nullValue);
  console.log('undefined:', undefinedValue);

  // Type numbers
  const aNumber: number = 42;
  const anotherNumber: number = 3.14;
  console.log('aNumber:', aNumber);
  console.log('anotherNumber:', anotherNumber);

  // Type strings
  const aString: string = 'Hello, TypeScript!';
  const anotherString: string = 'Another string';
  console.log('aString:', aString);
  console.log('anotherString:', anotherString);

  // Type arrays
  const stringArray: string[] = [
    'TypeScript',
    'MongoDB',
    'Express.js',
    'Node.js',
    'React',
  ];
  const numberArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log('stringArray:', stringArray);
  console.log('numberArray:', numberArray);

  // Type booleans
  const isTrue: boolean = true;
  const isFalse: boolean = false;
  console.log('isTrue:', isTrue);
  console.log('isFalse:', isFalse);

  // Type enums
  enum ProgrammingLanguages {
    JavaScript = 'JavaScript',
    TypeScript = 'TypeScript',
    Python = 'Python',
    Java = 'Java',
  }

  const programmingLanguage: ProgrammingLanguages = ProgrammingLanguages.TypeScript;
  console.log('programmingLanguage:', programmingLanguage);

  // Type never
  const demonstrateNever = (): never => {
    throw new Error('This is an error');
  };

  try {
    demonstrateNever();
  } catch (error) {
    console.error('never:', error);
  }

  // Type tuples
  const tuple: [string, number, boolean] = ['Gael', 2, true];
  console.log('tuple:', tuple);
};
