export const TITLE: string = 'Basic Class Example';
export const basicClassExample = (): void => {
  console.log('%cBasic Class', 'color: #1e3a8a; font-weight: bold;');

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
      if (age <= 0 || age >= 110) {
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

    private formatLine(label: string, value: string): string {
      return `- ${label}: ${value}`;
    }

    info(): string {
      const firstNameLine = this.formatLine('First Name', this._firstName);
      const lastNameLine = this.formatLine('Last Name', this._lastName);
      const ageLine = this.formatLine('Age', `${this._age} years`);
      const phoneLine = this.formatLine('Phone', this.phone);
      const emailLine = this.formatLine('Email', this.email);

      return [firstNameLine, lastNameLine, ageLine, phoneLine, emailLine].join('\n');
    }
  }

  const person = new Person(
    'Daniel',
    'Pompa',
    49,
    '648 15 35 96',
    'daniel.pompa@example.com'
  );
  const gael = new Person('Gael', 'Pompa', 2);

  console.log(person.info());
  console.log(gael.info());
};
