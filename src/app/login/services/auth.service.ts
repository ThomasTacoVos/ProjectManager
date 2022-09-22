import { Injectable } from '@angular/core';
import { User } from '../../user/models/user';
import { UsersDB } from '../../db/test-users';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
  currentUser?: User

  constructor() { 
    // this.currentUserSubject = new BehaviorSubject<User>(UsersDB.values[])
    // this.currentUser = this.currentUserSubject.asObservable();

  }

  onSubmit({ username, password }: { username: string; password: string; }){
    for (let user of UsersDB){
      // console.warn(user.username)
      if (username == user.username && password == user.password){
        this.currentUser = user
        return true
      }
    }
    return false;
  }
  getCurrentUser(){
    return this.currentUser?.username;
  }

}
