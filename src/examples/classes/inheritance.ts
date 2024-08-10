export const TITLE: string = 'Class Inheritance Example';
export const classInheritanceExample = (): void => {
  console.log('%cClass Inheritance', 'color: #1e3a8a; font-weight: bold;');

  // Superclass
  class Person {
    constructor(
      private _firstName: string,
      private _lastName: string,
      private _age: number,
      private _phone?: string,
      private _email?: string
    ) {
      this.validateAge(_age);
    }

    private validateAge(age: number): void {
      if (age < 0 || age >= 110) {
        throw new Error('Invalid age');
      }
    }

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
      this.validateAge(value);
      this._age = value;
    }

    get phone(): string {
      return this._phone ?? 'Not available';
    }

    set phone(value: string) {
      this._phone = value;
    }

    get email(): string {
      return this._email ?? 'Not available';
    }

    set email(value: string) {
      this._email = value;
    }

    protected get fullName(): string {
      return `${this._firstName} ${this._lastName}`;
    }

    info(): string {
      return [
        `- Name: ${this._firstName}`,
        `- Last Name: ${this._lastName}`,
        `- Age: ${this._age}`,
        `- Phone: ${this.phone}`,
        `- Email: ${this.email}`,
      ].join('\n');
    }
  }

  // Subclass
  class Developer extends Person {
    constructor(
      firstName: string,
      lastName: string,
      age: number,
      phone: string,
      email: string,
      private _technologies: string[]
    ) {
      super(firstName, lastName, age, phone, email);
    }

    get technologies(): string[] {
      return this._technologies;
    }

    set technologies(value: string[]) {
      this._technologies = value;
    }

    get fullNameFromPerson(): string {
      return super.fullName;
    }

    info(): string {
      // Extending the superclass's info method with developer-specific details
      return `${super.info()}\n- Technologies: ${this._technologies.join(' - ')}`;
    }
  }

  // Usage
  const gael = new Person('Gael', 'Pompa', 2);
  const daniel = new Developer(
    'Daniel',
    'Pompa',
    49,
    '648 16 78 93',
    'daniel.pompa@example.com',
    ['TypeScript', 'MongoDB', 'Express.js', 'React', 'Node.js']
  );

  // Output
  console.log(gael.info());
  console.log(daniel.info());
  console.log("Daniel's full name from Person:", daniel.fullNameFromPerson);
};
