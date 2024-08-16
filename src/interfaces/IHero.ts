export interface IHero {
  name: string;
  father?: string;
  mother?: string;
  homeland: string;
  hometown: string;
  weapons: string[];
  armor: string | string[];
  description: string;
  death: string;
  titles: string[];
  info?(): string;
}
