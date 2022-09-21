import { Injectable } from '@angular/core';
import { User } from './user';
import { UsersDB } from './db/test-users';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  onSubmit({ username, password }: { username: string; password: string; }){
    for (let user of UsersDB){
      // console.warn(user.username)
      if (username == user.username && password == user.password){
        return true
      }
    }
    return false;
  }
}

