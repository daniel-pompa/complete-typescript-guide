// https://www.typescriptlang.org/docs/handbook/namespaces.html

export const TITLE: string = 'Namespaces Example';

// Namespace Declaration for Validation
namespace Validation {
  // Interface for StringValidator
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  // Regular expressions used in validation
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  // Validator to check if a string contains only letters
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  // Validator to check if a string is a valid ZIP code (5 digits)
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }

  // Simple validator to check if text length is greater than or equal to 3
  export const textValidator = (text: string): boolean => {
    return text.length >= 3;
  };
}

export const validationNamespaceExample = (): void => {
  // Example data to validate
  let strings = ['Gael', '28850', '10'];

  // Validators to use
  let validators: { [s: string]: Validation.StringValidator } = {};

  validators['ZIP code'] = new Validation.ZipCodeValidator();
  validators['Letters only'] = new Validation.LettersOnlyValidator();

  // Validate each string with each validator
  for (let s of strings) {
    for (let name in validators) {
      console.log(
        `${s} - ${
          validators[name].isAcceptable(s) ? 'matches' : 'does not match'
        } ${name}`
      );
    }
  }

  // Test the simple text length validator
  console.log(
    "Validation.textValidator('Hello World!'):",
    Validation.textValidator('Hello World!')
  );

  // Alternative Implementation (with improved readability and modern syntax)
  console.log('%cAlternative implementation', 'color: #1e3a8a; font-weight: bold;');

  // Using a Map instead of an object for better type safety and iteration
  const alternativeValidators = new Map<string, Validation.StringValidator>([
    ['ZIP code', new Validation.ZipCodeValidator()],
    ['Letters only', new Validation.LettersOnlyValidator()],
  ]);

  strings.forEach(str => {
    alternativeValidators.forEach((validator, name) => {
      console.log(
        `${str} - ${validator.isAcceptable(str) ? 'matches' : 'does not match'} ${name}`
      );
    });
  });

  console.log(
    "Validation.textValidator('TypeScript'):",
    Validation.textValidator('TypeScript')
  );
};
