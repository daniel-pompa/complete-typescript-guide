import { customersData } from '../../data/customers-data';
import { logStyled } from '../../utils/log-styled';
import { Customer } from './models';

export const TITLE: string = 'Interface Examples';

export const displayCustomers = (): void => {
  // Convert each object into an instance of Customer
  const customers = customersData.map(
    customer =>
      new Customer(
        customer.id,
        customer.firstName,
        customer.lastName,
        customer.age,
        customer.premium,
        customer.phone,
        customer.email
      )
  );

  // Displaying each customer's information
  customers.forEach(customer => {
    logStyled(`Customer: ${customer.firstName} ${customer.lastName}`);
    console.log(customer.customerInfo?.()); // Optional chaining (?.) operator to access the info() method if it exists
  });
};
