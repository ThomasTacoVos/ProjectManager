
import { Component, OnInit } from '@angular/core';
import { UsersDB } from 'src/app/db/test-users';
import { UserService } from 'src/app/user/services/user.service';
import { Item } from '../../models/item';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = UsersDB;
  selectedUser?: User;
  items: Item[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  deselectUser(): void {
    this.selectedUser = null!;
  }

  addItem(newItem:Item): void {
    this.items.push(newItem);
  }

  // saveDetails(updatedName:string): void {
  //   if (this.selectedUser != undefined){
  //     this.selectedUser.firstname = updatedName;
  //   }

  // }

}
