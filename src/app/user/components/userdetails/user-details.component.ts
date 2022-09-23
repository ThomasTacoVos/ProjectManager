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
  // @Output() onSave = new EventEmitter<User>()
  loginForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    test: []

  })
  submitted = false

  constructor(    
    private fb: FormBuilder
    
    ) { }

  ngOnInit(): void {
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

  // saveDetails(newName: string){
  //   // const updatedUser = new User(newName)
  //   this.onSave.emit(newName)
  // }

  saveForm(){
    if (this.selectedUser != undefined){
      this.selectedUser.firstname = this.loginForm.value.firstname!
      this.selectedUser.lastname = this.loginForm.value.lastname!
    }
  }

  updateUser(){
    if (this.selectedUser != undefined){
      this.f['firstname'].setValue(this.selectedUser.firstname);
    }

  }
}
