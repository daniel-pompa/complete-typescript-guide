import { logStyled } from '../../utils/log-styled';
import { MeasureTime, LogInputs, LogOutputs, ValidateNonNegative } from './decorators';

export const TITLE: string = 'Decorator Examples';

export const decoratorExamples = (): void => {
  logStyled('Math Operations with Decorators');
  class MathOperations {
    @MeasureTime
    @LogInputs
    @LogOutputs
    @ValidateNonNegative
    add(a: number, b: number): number {
      return a + b;
    }

    @MeasureTime
    @LogInputs
    @LogOutputs
    @ValidateNonNegative
    subtract(a: number, b: number): number {
      return a - b;
    }

    @MeasureTime
    @LogInputs
    @LogOutputs
    @ValidateNonNegative
    multiply(a: number, b: number): number {
      return a * b;
    }

    @MeasureTime
    @LogInputs
    @LogOutputs
    @ValidateNonNegative
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    }

    @MeasureTime
    @LogInputs
    @LogOutputs
    @ValidateNonNegative
    power(base: number, exponent: number): number {
      return Math.pow(base, exponent);
    }

    @MeasureTime
    @LogInputs
    @LogOutputs
    @ValidateNonNegative
    squareRoot(value: number): number {
      if (value < 0) {
        throw new Error('Cannot compute the square root of a negative number');
      }
      return Math.sqrt(value);
    }
  }

  // Create an instance and test the methods
  const mathOps = new MathOperations();

  try {
    logStyled('Example: Addition Operation');
    console.log('Addition:', mathOps.add(5, 3)); // Addition: 8

    logStyled('Example: Subtraction Operation');
    console.log('Subtraction:', mathOps.subtract(10, 4)); // Subtraction: 6

    logStyled('Example: Multiplication Operation');
    console.log('Multiplication:', mathOps.multiply(5, 3)); // Multiplication: 15

    logStyled('Example: Division Operation');
    console.log('Division:', mathOps.divide(20, 4)); // Division: 5

    logStyled('Example: Power Operation');
    console.log('Power:', mathOps.power(2, 3)); // Power: 8

    logStyled('Example: Square Root Operation');
    console.log('Square Root:', mathOps.squareRoot(16)); // Square Root: 4
  } catch (error) {
    console.error(error);
  }
};
