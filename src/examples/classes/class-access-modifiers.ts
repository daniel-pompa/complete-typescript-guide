export const TITLE: string = 'Class Access Modifiers Example';
export const accessModifiersExample = (): void => {
  console.log('%cClass Access Modifiers', 'color: #1e3a8a; font-weight: bold;');

  // Function to generate a fake bank account number
  const generateFakeAccountNumber = (): string => {
    const countryCode = 'ES'; // Country code (Spain in this case)
    const checkDigits = Math.floor(Math.random() * 99)
      .toString()
      .padStart(2, '0'); // Check digits
    const bankCode = '2100'; // Bank code (example)
    const branchCode = '0418'; // Branch code (example)
    const accountNumber = Math.floor(Math.random() * 1000000000)
      .toString()
      .padStart(10, '0'); // 10-digit account number

    return `${countryCode}${checkDigits} ${bankCode} ${branchCode} ${accountNumber}`;
  };

  class BankAccount {
    private _balance: number = 0;
    private _accountNumber: string;

    constructor() {
      this._accountNumber = generateFakeAccountNumber();
    }

    get accountNumber(): string {
      return this._accountNumber;
    }

    get balance(): number {
      return this._balance;
    }

    deposit(amount: number): void {
      if (amount > 0) {
        this._balance += amount;
      }
    }

    withdraw(amount: number): void {
      if (amount > 0 && amount <= this._balance) {
        this._balance -= amount;
      } else {
        console.log('Insufficient funds');
      }
    }
  }

  // Example usage
  const myAccount = new BankAccount();
  myAccount.deposit(1000);
  myAccount.withdraw(200);

  console.log(`Account Number: ${myAccount.accountNumber}`);
  console.log(`Balance: ${myAccount.balance}`);
};
