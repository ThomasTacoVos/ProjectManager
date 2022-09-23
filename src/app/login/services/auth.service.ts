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

  onSubmit({ firstname, password }: { firstname: string; password: string; }){
    for (let user of UsersDB){
      // console.warn(user.firstname)
      if (firstname == user.firstname && password == user.password){
        this.currentUser = user
        return true
      }
    }
    return false;
  }

  getCurrentUser(){
    return this.currentUser?.firstname;
  }
}

