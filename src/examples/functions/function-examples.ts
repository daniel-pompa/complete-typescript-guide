export const TITLE: string = 'Function Examples';

// Function examples demonstrating various TypeScript features
export const functionExamples = (): void => {
  // Example 1: Basic Function
  console.log('%cBasic function example', 'color: #1e3a8a; font-weight: bold;');

  const displayHeroInfo = (): void => {
    const hero: string = 'Achilles';
    const info: string =
      'Son of the warrior Peleus and the sea nymph Thetis. Achilles, the greatest warrior in The Iliad, leads the Myrmidons, soldiers from his homeland, Phthia (Greece)';

    const getName = (): string => hero;
    const getInfo = (): string => info;

    const heroName = getName();
    const heroInfo = getInfo();

    console.log({ heroName });
    console.log(heroInfo);
  };

  displayHeroInfo();

  // Example 2: Function Type
  console.log('%cFunction type example', 'color: #1e3a8a; font-weight: bold;');

  // Define types for different kinds of functions
  type NumericFunction = (a: number, b: number) => number;
  type GreetingFunction = (name: string) => string;
  type SimpleFunction = () => string;

  // Implement functions based on the defined types
  const addNumbers: NumericFunction = (a: number, b: number): number => a + b;
  const greet: GreetingFunction = (name: string): string => `Hello ${name}`;
  const myBelovedSon: SimpleFunction = (): string =>
    'My beloved son, Gael, brings joy to our lives every day.';

  // Variable that can hold any of the defined function types
  let myFunction: NumericFunction | GreetingFunction | SimpleFunction;

  // Assigning and invoking a NumericFunction
  myFunction = addNumbers;
  console.log(
    '%cCurrent function type: NumericFunction',
    'color: #991b1b; font-weight: bold;'
  );
  console.log('Result of adding 1 and 1:', (myFunction as NumericFunction)(1, 1));

  // Assigning and invoking a GreetingFunction
  myFunction = greet;
  console.log(
    '%cCurrent function type: GreetingFunction',
    'color: #991b1b; font-weight: bold;'
  );
  console.log('Greeting message:', (myFunction as GreetingFunction)('Gael'));

  // Assigning and invoking a SimpleFunction
  myFunction = myBelovedSon;
  console.log(
    '%cCurrent function type: SimpleFunction',
    'color: #991b1b; font-weight: bold;'
  );
  console.log('Beloved son message:', (myFunction as SimpleFunction)());

  // Example 3: Required Arguments
  console.log('%cRequired arguments example', 'color: #1e3a8a; font-weight: bold;');

  const maxOfThreeNumbers = (a: number, b: number, c: number): number =>
    Math.max(a, b, c);

  const max = maxOfThreeNumbers(49, 42, 2);
  console.log('Maximum of 49, 42, and 2:', max);

  const calculateArea = {
    square: (side: number): number => side * side,
    rectangle: (length: number, width: number): number => length * width,
    circle: (radius: number): number => Math.PI * radius * radius,
    triangle: (base: number, height: number): number => (base * height) / 2,
  };

  const areaSquare = calculateArea.square(5);
  console.log('Area of square with side 5:', areaSquare);

  const areaRectangle = calculateArea.rectangle(8, 4);
  console.log('Area of rectangle with length 8 and width 4:', areaRectangle);

  const areaCircle = calculateArea.circle(3);
  console.log('Area of circle with radius 3:', areaCircle);

  const areaTriangle = calculateArea.triangle(4, 5);
  console.log('Area of triangle with base 4 and height 5:', areaTriangle);

  function random(a: number, b: number): number {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  const generateLotteryCombination = (
    min: number,
    max: number,
    amount: number
  ): number[] => {
    const combination = new Set<number>();

    while (combination.size < amount) {
      const randomNumber = random(min, max);
      combination.add(randomNumber);
    }

    return Array.from(combination).sort((a, b) => a - b);
  };

  const generateComplementaryNumber = (
    min: number,
    max: number,
    amount: number
  ): number[] => {
    const numbers: Set<number> = new Set();

    while (numbers.size < amount) {
      numbers.add(random(min, max));
    }

    return Array.from(numbers).sort((a, b) => a - b);
  };

  const primitiveCombination: number[] = generateLotteryCombination(1, 49, 6);
  const complementaryNumber: number[] = generateComplementaryNumber(0, 9, 1);
  const euromillionsCombination: number[] = generateLotteryCombination(1, 50, 5);
  const euromillionsStars: number[] = generateComplementaryNumber(1, 12, 2);
  const bonolotoCombination: number[] = generateLotteryCombination(1, 49, 6);

  console.log('%cLottery', 'color: #1e3a8a; font-weight: bold');
  console.log('Lottery combination:', primitiveCombination);
  console.log('Complementary number:', complementaryNumber);

  console.log('%cEuroMillions', 'color: #1e3a8a; font-weight: bold');
  console.log('EuroMillions combination:', euromillionsCombination);
  console.log('EuroMillions stars:', euromillionsStars);

  console.log('%cBonoloto', 'color: #1e3a8a; font-weight: bold');
  console.log('Bonoloto combination:', bonolotoCombination);

  // Example 4: Optional Arguments
  console.log('%cOptional arguments example', 'color: #1e3a8a; font-weight: bold;');

  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || ''}`.trim();
  };

  const name = fullName('Gael');
  console.log('Full name with only first name:', name);

  // Example 5: Default Arguments
  console.log('%cDefault arguments example', 'color: #1e3a8a; font-weight: bold;');

  const fullNameWithDefaults = (
    firstName: string,
    lastName: string = '',
    upperCase: boolean = false
  ): string => {
    const name = `${firstName} ${lastName}`.trim();
    return upperCase ? name.toUpperCase() : name;
  };

  const nameWithDefaults = fullNameWithDefaults('Gael', 'Pompa', true);
  console.log('Full name with default arguments (uppercase):', nameWithDefaults);

  // Example 6: Rest Arguments
  console.log('%cRest arguments example', 'color: #1e3a8a; font-weight: bold;');

  const fullNameWithRest = (firstName: string, ...rest: string[]): string => {
    return `${firstName} ${rest.join(' ')}`;
  };

  const nameWithRest = fullNameWithRest('Gael', 'Pompa', 'Ciambrino');
  console.log('Full name with rest arguments:', nameWithRest);
};
