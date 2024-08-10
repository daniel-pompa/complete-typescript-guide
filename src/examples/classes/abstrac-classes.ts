export const TITLE: string = 'Abstract Classes Example';
export const abstractClassesExample = (): void => {
  console.log('%cAbstract Classes', 'color: #1e3a8a; font-weight: bold;');

  // Abstract class definition for Person
  abstract class Person {
    constructor(
      protected _firstName: string,
      protected _lastName: string,
      protected _age: number
    ) {}

    // Abstract method to be implemented by subclasses
    abstract info(): void;

    get firstName(): string {
      return this._firstName;
    }

    set firstName(value: string) {
      this._firstName = value;
    }

    get lastName(): string {
      return this._lastName;
    }

    set lastName(value: string) {
      this._lastName = value;
    }

    get age(): number {
      return this._age;
    }

    set age(value: number) {
      this._age = value;
    }
  }

  // Developer class inheriting from Person
  class Developer extends Person {
    private readonly _technologies: string[];

    constructor(firstName: string, lastName: string, age: number) {
      super(firstName, lastName, age);
      this._technologies = ['MongoDB', 'Express', 'React', 'Node.js'];
    }

    // Method specific to Developer class
    get technologies(): string[] {
      return this._technologies;
    }

    // Implementation of info method for Developer
    info(): void {
      console.log(`Developer: ${this.firstName}, ${this.age} years old`);
      console.log('Technologies:', this.technologies.join(' - '));
    }
  }

  // Customer class inheriting from Person
  class Customer extends Person {
    private readonly _contactEmail: string;

    constructor(firstName: string, lastName: string, age: number, contactEmail: string) {
      super(firstName, lastName, age);
      this._contactEmail = contactEmail;
    }

    // Method specific to Customer class
    get contactEmail(): string {
      return this._contactEmail;
    }

    // Implementation of info method for Customer
    info(): void {
      console.log(`Customer: ${this.firstName}, ${this.age} years old`);
      console.log('Contact:', this.contactEmail);
    }
  }

  // Function to print full name of a Person object
  const printFullName = (person: Person): void => {
    console.log(`Full name: ${person.firstName} ${person.lastName}`);
  };

  // Usage
  const developer = new Developer('Daniel', 'Pompa Pareja', 49);
  const customer = new Customer(
    'Emma',
    'Ciambrino Baz',
    42,
    'emma.ciambrino@example.com'
  );

  developer.info();
  customer.info();

  printFullName(developer);
  printFullName(customer);
};
