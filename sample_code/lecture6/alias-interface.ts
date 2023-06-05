type User = {
    name: string;
    age: number;
}

type Admin = User & {
    role: string;
}

let admin1: Admin = {
    name: 'Aaron',
    role: 'admin',
    age: 99
}

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
}

// declaration merging
interface IUser {
    printName?: () => void;
}

// type User = {
//     printName?: () => void;
// }