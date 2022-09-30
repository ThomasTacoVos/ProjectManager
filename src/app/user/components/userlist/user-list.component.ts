import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';
import { Item } from '../../models/item';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users = this.userService.userList$;
  // users = UsersDB;
  selectedUser?: User;
  adding = false;
  items: Item[] = [];

  constructor(
    private userService: UserService
    ) { 
      
    }

  ngOnInit(): void {
  
  }

  onSelect(user: User): void {
    this.adding = false;
    this.selectedUser = user;
  }

  closeSaves(){
    this.adding = false;
  }

  deselectUser(): void {
    this.selectedUser = null!;
  }

  addUser(){
    // this.deselectUser();
    // this.adding = true;
    const newUser = new User(-1, '', '', '');
    this.onSelect(newUser);
  }

  addItem(newItem:Item): void {
    this.items.push(newItem);
  }

  saveUser(user: User){
    // console.log(this.users);
    // let index = this.users.findIndex(x => x.id === this.selectedUser?.id);


    // console.log(this.users)
    // const userList = [...this.users];
    // let index = userList.findIndex(x => x.id === this.selectedUser?.id);
    // console.log(index)
    // console.log(user)
    // console.log(this.selectedUser)
    // this.users.subscribe(user)
    // // this.users.push(user)
    // if (index < 0) {
    //   user.id = 999 ; // TODO search max id, and set +1
    //   userList.push(user);
    // } else {
    //   userList[index] = user;
    // }
    // this.users = userList;
  }
  // saveDetails(updatedName:string): void {
  //   if (this.selectedUser != undefined){
  //     this.selectedUser.firstname = updatedName;
  //   }
  // }

}
