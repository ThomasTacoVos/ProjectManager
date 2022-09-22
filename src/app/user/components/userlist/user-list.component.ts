
import { Component, OnInit } from '@angular/core';
import { UsersDB } from 'src/app/db/test-users';
import { UserService } from 'src/app/user/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = UsersDB
  selectedUser?: User;
  onSelect(user: User): void {
  this.selectedUser = user;
}
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  
  }


}
