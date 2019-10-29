import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adminstatus:boolean=false;

  
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }

  getUser(){
    return this.getUser();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['adminlogin']);
  }
 
}
