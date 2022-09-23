export class User {
    id: number;
    firstname: string;
    lastname: string;
    password: string;

    constructor(id: number, firstname: string, lastname: string,  password: string){
        this.id= id;
        this.firstname = firstname;
        this.lastname = lastname
        this.password = password;
    }
}