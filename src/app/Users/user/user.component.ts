
import { Component, OnInit } from '@angular/core';
import { UsersDB } from 'src/app/db/test-users';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = UsersDB
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }


}
