import { IChild, ICustomer, IHero, IPerson } from '../../interfaces';
import { formatProperties } from '../../utils';

/**
 * Represents a person with various attributes
 * @implements {IPerson}
 */
export class Person implements IPerson {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _age: number,
    private _phone?: string,
    private _email?: string
  ) {
    if (_age <= 0 || _age > 110) {
      throw new Error('Age is not valid');
    }
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    if (age <= 0 || age > 110) {
      throw new Error('Age is not valid');
    }
    this._age = age;
  }

  get phone(): string | undefined {
    return this._phone;
  }

  set phone(phone: string) {
    this._phone = phone;
  }

  get email(): string | undefined {
    return this._email;
  }

  set email(email: string | undefined) {
    this._email = email;
  }

  /**
   * Returns a formatted string containing the person's information.
   * @returns {string} The formatted information of the person.
   */
  info(): string {
    return formatProperties({
      'First name': this.firstName,
      'Last name': this.lastName,
      Age: `${this.age} years old`,
      Phone: this.phone,
      Email: this.email,
    });
  }
}

/**
 * Represents a child.
 * @extends {Person}
 * @implements {IChild}
 */
export class Child extends Person implements IChild {
  private _nursery?: string;
  private _friends?: string[];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    friends?: string[],
    nursery?: string
  ) {
    super(firstName, lastName, age);
    this._friends = friends;
    this._nursery = nursery;
  }

  get nursery(): string | undefined {
    return this._nursery;
  }

  set nursery(nursery: string | undefined) {
    this._nursery = nursery;
  }

  get friends(): string[] | undefined {
    return this._friends;
  }

  set friends(friends: string[] | undefined) {
    this._friends = friends;
  }

  info(): string {
    const baseInfo = super.info();
    const childInfo = formatProperties({
      Nursery: this.nursery,
      Friends: this.friends?.join(', '),
    });
    return `${baseInfo}\n${childInfo}`;
  }
}

/**
 * Represents a customer.
 * @extends {Person}
 * @implements {ICustomer}
 */
export class Customer extends Person implements ICustomer {
  constructor(
    private _id: string,
    _firstName: string,
    _lastName: string,
    _age: number,
    private _premium: boolean = false,
    _phone?: string,
    _email?: string
  ) {
    super(_firstName, _lastName, _age, _phone, _email);
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get premium(): boolean {
    return this._premium;
  }

  set premium(premium: boolean) {
    this._premium = premium;
  }

  customerInfo?(): string {
    const baseInfo = super.info();
    const customerInfo = formatProperties({
      ID: this.id,
      Premium: this.premium ? 'Yes' : 'No',
    });
    return `${baseInfo}\n${customerInfo}`;
  }
}

/**
 * Represents a hero with various attributes
 * @implements {IHero}
 */
export class Hero implements IHero {
  constructor(
    public name: string,
    public homeland: string,
    public hometown: string,
    public weapons: string[],
    public armor: string | string[],
    public description: string,
    public death: string,
    public titles: string[],
    public father?: string,
    public mother?: string
  ) {}

  info?(): string {
    return `
      Name: ${this.name}
      Homeland: ${this.homeland}
      Hometown: ${this.hometown}
      Weapons: ${this.weapons.join(', ')}
      Armor: ${Array.isArray(this.armor) ? this.armor.join(', ') : this.armor}
      Description: ${this.description}
      Death: ${this.death}
      Titles: ${this.titles.join(', ')}
      Father: ${this.father ?? 'Unknown'}
      Mother: ${this.mother ?? 'Unknown'}
    `.replace(/^\s+/gm, ''); // Remove tabs at the beginning of each line
  }
}
