import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user/models/user';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]

  })
  loggedIn = false
  submitted = false
  loading = false
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    ) { 


    }

  ngOnInit(): void {
    
  }
  get f() { return this.loginForm.controls}
  onSubmit() {
    this.submitted = true
    // console.warn('dit zijn errors' + this.f.username.errors?.[required)
    console.warn(this.loginForm.value);
    if (this.loginForm.invalid) {
      console.log("form invalid")
      return;
    }
    this.loading = true
     if (this.authService.onSubmit({ username: this.loginForm.value.username!, password: this.loginForm.value.password! }) ){
        console.warn('hello')      
        this.router.navigate(['']);
     }
  }
} 
