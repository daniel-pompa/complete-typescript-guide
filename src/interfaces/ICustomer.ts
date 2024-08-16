export interface ICustomer {
  id: string;
  premium?: boolean;
  customerInfo?(): string;
}
