import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService



  ) { }

  ngOnInit(): void {
  }
  getName(){
    return this.authService.currentUser?.firstname
  }
}
