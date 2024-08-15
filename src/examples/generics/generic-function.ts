import { logStyled } from '../../utils/log-styled';

export const TITLE: string = 'Generic Function Examples';

export const genericFunctionExamples = (): void => {
  logStyled('Generic functions examples');

  /**
   * Generic function that takes an argument of type T and returns the same type.
   * @template T
   * @param arg - The argument to be returned.
   * @returns The argument passed in.
   */
  const genericFunction = <T>(arg: T): T => arg;

  // Examples demonstrating the use of the generic function with various types
  console.log('String:', genericFunction<string>('Hello world!'));

  console.log(
    'Date as a string:',
    genericFunction<string>(new Date('2022-03-20').toLocaleDateString())
  );

  console.log('Number:', genericFunction<number>(99));

  console.log(
    'Array of numbers:',
    genericFunction<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  );

  console.log('Array of strings:', genericFunction<string[]>(['M', 'E', 'R', 'N']));

  console.log('Boolean:', genericFunction<boolean>(true));

  // Additional examples to demonstrate the versatility of the generic function
  const product = {
    name: 'PC Basic',
    price: 700,
  };
  console.log('Object:', genericFunction(product));

  type Product = {
    name: string;
    price: number;
    available?: boolean;
    specs?: {
      cpu: string;
      ram: string;
      storage: string;
    };
  };

  const pcWorkstation: Product = {
    name: 'PC Workstation',
    price: 2800,
    available: true,
    specs: {
      cpu: 'Intel i9',
      ram: '64GB',
      storage: '1TB SSD',
    },
  };
  console.log('Complex object:', genericFunction(pcWorkstation));

  const products: Product[] = [
    pcWorkstation,
    { name: 'Mouse', price: 50, available: true },
    { name: 'Keyboard', price: 100, available: true },
  ];
  console.log('Array of objects:', genericFunction<Product[]>(products));

  logStyled('Union types example');
  type Result = string | number | boolean;
  console.log('Union type (string):', genericFunction<Result>('Generic Function'));
  console.log('Union type (number):', genericFunction<Result>(98));
  console.log('Union type (boolean):', genericFunction<Result>(false));
};
