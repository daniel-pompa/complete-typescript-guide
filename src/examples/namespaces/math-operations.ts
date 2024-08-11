export const TITLE: string = 'Namespaces Example';

// Namespace declaration
namespace MathOperations {
  export const add = (a: number, b: number): number => a + b;
  export const subtract = (a: number, b: number): number => a - b;
  export const multiply = (a: number, b: number): number => a * b;
  export const divide = (a: number, b: number): number => {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  };

  // Advanced namespace declaration
  export namespace Advanced {
    export const power = (base: number, exponent: number): number =>
      Math.pow(base, exponent);
    export const sqrt = (value: number): number => Math.sqrt(value);

    // Factorial function
    export const factorial = (n: number): number => {
      if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
      }
      return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
    };
  }
}

export const mathOperationsNamespaceExample = (): void => {
  console.log('%cMath operations example', 'color: #1e3a8a; font-weight: bold;');

  // Define types for operations
  type Operation = {
    func: (...args: number[]) => number;
    args: [number, number] | [number];
    message: string;
  };

  // Array of operations and messages
  const operations: Operation[] = [
    { func: MathOperations.add, args: [10, 5], message: '10 + 5 = ' },
    { func: MathOperations.subtract, args: [10, 5], message: '10 - 5 = ' },
    { func: MathOperations.multiply, args: [10, 5], message: '10 * 5 = ' },
    { func: MathOperations.divide, args: [10, 5], message: '10 / 5 = ' },
    { func: MathOperations.Advanced.power, args: [2, 3], message: '2^3 = ' },
    { func: MathOperations.Advanced.sqrt, args: [16], message: '√16 = ' },
    { func: MathOperations.Advanced.factorial, args: [5], message: '5! = ' },
  ];

  // Execute and log operations
  operations.forEach(({ func, args, message }) => {
    try {
      const result = func(...args);
      console.log(`${message}${result}`);
    } catch (e) {
      console.error(e);
    }
  });
};
