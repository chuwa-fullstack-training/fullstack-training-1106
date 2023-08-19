interface IUser {
  name: string;
  age: number;
}

interface IAdmin extends IUser {
  role: string;
}

let admin2: IAdmin = {
  name: 'Aaron',
  role: 'admin',
  age: 99
};

// declaration merging
interface IUser {
  printName?: () => void;
}

// Alias vs Interface
// add new fields to an existing interface

interface User {
  name: string;
  age: number;
}

interface User {
  address: string;
}

// extend an existing interface
interface ICustomer extends User {
  customerId: string;
}

type ACustomer = User & {
  customerId: string;
};

export {};
