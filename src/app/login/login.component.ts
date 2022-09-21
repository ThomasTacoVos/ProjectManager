import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]

  })
  loggedIn = false

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    
  }
  // get f() { return this.loginForm.controls}
  onSubmit() {
    console.warn(this.loginForm.value);
     if (this.authService.onSubmit({ username: this.loginForm.value.username!, password: this.loginForm.value.password! }) ){
        console.warn('hello')
     }
  }
} 
