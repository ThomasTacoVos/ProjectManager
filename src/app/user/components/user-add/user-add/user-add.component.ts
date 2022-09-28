import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Output() onClose = new EventEmitter<void>();
  loginForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    test: []

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f() { 
    return this.loginForm.controls
  }

  saveForm(){

  }

  closeDetails(){
    this.onClose.emit();
  }

}
