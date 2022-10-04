import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../../models/item';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() selectedUser?: User;
  @Output() newItemEvent = new EventEmitter<Item>();
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<User>();
  // @Output() onSave = new EventEmitter<User>()
  loginForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],

  })

  constructor(    
    private fb: FormBuilder
    
    ) { }

  ngOnInit(): void {
      this.f['firstname'].setValue(this.selectedUser?.firstname!); 
      this.f['lastname'].setValue(this.selectedUser?.lastname!);
      this.f['password'].setValue(this.selectedUser?.password!);
  }
  get f() { 
    return this.loginForm.controls
  }

  addNewItem(value:string){
    if (value.length > 0){
      const newItem = new Item(value, "blue");
      if (value.length > 3 ){
        newItem.bgColor = "red";
      }
      this.newItemEvent.emit(newItem);
    }
  }
  
  closeDetails(){
    this.onClose.emit();
  }

  saveForm(){
    let model = new User(
      this.selectedUser?.id ?? 0, 
      this.loginForm.controls.firstname.value ?? '',
      this.loginForm.controls.lastname.value ?? '',
      this.loginForm.controls.password.value ?? ''
      );
      console.log(model.firstname)
    this.onSave.emit(model)
    this.closeDetails()
  }
}
