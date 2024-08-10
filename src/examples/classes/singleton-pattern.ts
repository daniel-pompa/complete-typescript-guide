export const TITLE: string = 'Singleton Pattern Example';
export const singletonPatternExample = (): void => {
  console.log('%cSingleton Pattern', 'color: #1e3a8a; font-weight: bold;');

  // Singleton class definition
  class Person {
    private static instance: Person; // The single instance of the Person class

    private constructor(public firstName: string, public lastName: string) {}

    // Get the single instance of the Person class
    public static getInstance(): Person {
      if (!Person.instance) {
        Person.instance = new Person('Daniel', 'Pompa Pareja');
      }
      return Person.instance;
    }

    // Method to change the first name and last name
    public changeName(newFirstName: string, newLastName: string): void {
      this.firstName = newFirstName;
      this.lastName = newLastName;
    }

    // Method to display full name
    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  // Usage of the Singleton pattern
  const person1 = Person.getInstance();
  const person2 = Person.getInstance();
  const person3 = Person.getInstance();

  // Changing the first name and last name
  person1.changeName('Gael', 'Pompa Ciambrino');

  // Output
  console.log('Person 1:', person1.getFullName()); // Output: Gael Pompa Ciambrino
  console.log('Person 2:', person2.getFullName()); // Output: Gael Pompa Ciambrino
  console.log('Person 3:', person3.getFullName()); // Output: Gael Pompa Ciambrino

  // Verify that all instances are the same
  console.log('Are all instances equal?', person1 === person2 && person2 === person3); // Output: true
};
