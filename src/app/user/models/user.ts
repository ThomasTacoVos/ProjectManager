export class User {
    id: number;
    firstname: string;
    lastname: string;
    password: string;

    constructor(id: number, firstname: string, lastname: string,  password: string){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname
        this.password = password;
    }
}

export const initialUserModel: User = {
    id: 1,
    firstname: 'Thomas',
    lastname: 'Vos',
    password: '1234b'
};

export const initialUserList: User[] = [
  { id: 1, firstname: 'Thomas', lastname: 'Vos', password: "1234e" },
  { id: 2, firstname: 'Ingrid', lastname: 'Hoogenboom',password: "1234e"},
  { id: 3, firstname: 'Sander', lastname: 'de Man',password: "1234e" },
  { id: 4, firstname: 'Matthijs', lastname: 'Bos',password: "1234e" },
  { id: 5, firstname: 'Gerben', lastname: 'Holland',password: "1234e"},
];