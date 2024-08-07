export const TITLE: string = 'Object Examples';

export const objectExamples = (): void => {
  // Example of a simple object
  console.log('%cSimple object example:', 'color: #1e3a8a; font-weight: bold;');
  const simpleObject = { name: 'John Doe', age: 30, city: 'New York' };
  console.log(simpleObject);

  // Example of a complex object
  console.log('%cComplex object example:', 'color: #1e3a8a; font-weight: bold;');
  const complexObject: {
    firstName: string;
    lastName: string;
    age: number;
    profession: string;
    technologies: string[];
    address: object;
    getFirstName?: () => string;
    getLastName?: () => string;
    getAge?: () => number;
    getProfession?: () => string;
    getTechnologies?: () => string[];
    getAddress?: () => object;
  } = {
    firstName: 'Razvan',
    lastName: 'Ilies',
    age: 38,
    profession: 'MEVN Stack Developer',
    technologies: ['TypeScript', 'MongoDB', 'Express.js', 'Vue.js', 'Node.js'],
    address: {
      city: 'Bucharest',
      country: 'Romania',
      street: 'Stefan cel Mare 2',
      zipCode: 12345,
    },

    //* Methods
    getFirstName(): string {
      return this.firstName;
    },
    getLastName(): string {
      return this.lastName;
    },
    getAge(): number {
      return this.age;
    },
    getProfession(): string {
      return this.profession;
    },
    getTechnologies(): string[] {
      return this.technologies;
    },
    getAddress(): object {
      return this.address;
    },
  };

  // Filter out methods and format output
  const filteredEntries = Object.entries(complexObject)
    .filter(([_, value]) => typeof value !== 'function')
    .map(([key, value]) => {
      // Handle nested objects
      if (typeof value === 'object' && value !== null) {
        return `${key}: ${JSON.stringify(value, null, 2)}`;
      }
      return `${key}: ${value}`;
    });

  // Output the filtered and formatted entries
  filteredEntries.forEach(entry => console.log(entry));
};
