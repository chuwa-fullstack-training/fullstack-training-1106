interface IUser {
  name: string;
  age: number;
}

interface IAdmin extends IUser {
  role: string;
}

let admin2: IAdmin = {
  name: "Aaron",
  role: "admin",
  age: 99,
};

// declaration merging
interface IUser {
  printName?: () => void;
}

let k: IUser = {
  name: "hello",
  age: 20,
  printName: () => {
    console.log("hello");
  },
};
// Alias vs Interface
// add new fields to an existing interface

interface User {
  name: string;
  age: number;
}

let c: ACustomer = {
  name: "cay",
  age: 20,
  address: "lakeside",
  customerId: "001",
};

let d: ICustomer = {
  name: "dean",
  age: 50,
  address: "monroe",
  customerId: "002",
};

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
