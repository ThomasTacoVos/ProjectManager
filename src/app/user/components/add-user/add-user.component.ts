import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() onClose = new EventEmitter<void>();

  loginForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    passwordconfirm: ['', Validators.required],
  })
  submitted = false
  newUser?: User
  constructor(    
    private fb: FormBuilder,
    private userService: UserService
    ) { }

  ngOnInit(): void {
  }
  closeDetails(): void {
    this.onClose.emit();
  }

  saveForm(): void {
    if (this.loginForm.value.password ===  this.loginForm.value.passwordconfirm){
      this.newUser = new User(6, this.loginForm.value.firstname!, this.loginForm.value.lastname!, this.loginForm.value.password! )
      this.userService.addUser(this.newUser!)
      }
    }
  }

