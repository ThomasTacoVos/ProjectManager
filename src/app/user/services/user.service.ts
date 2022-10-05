import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialUserList, initialUserModel, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject<User>(initialUserModel);
  get user$(): Observable<User> { return this._user$.asObservable(); }


  private _userList$ = new BehaviorSubject<Array<User>>(initialUserList);
  get userList$(): Observable<User[]> {return this._userList$.asObservable(); }


  updateUserList(data: Array<User>){
    this._userList$.next(data);
  }

  addUser(newUser: User){
    const updatedList = [... this._userList$.value, newUser]
    this._userList$.next(updatedList);
  }

  constructor() { }

}
