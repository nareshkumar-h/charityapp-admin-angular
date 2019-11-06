import { Component, OnInit } from '@angular/core';
import {AdminregisterService} from 'src/app/service/adminregister.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  name:any;
  email:any;
  password:any;

  constructor(
    private register:AdminregisterService, private router: Router,
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit() {
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  adminregister()
  {
    let formData :any= {
      'name':this.name,
      'email':this.email,
      'password':this.password
      
    };
    this.register.adminRegister(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
      // localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res));
    //console.log(user);
    this.router.navigate(['adminlogin']);
     //alert('Registration success,Please login to continue');
      let message:string = 'Registration success,Please login to continue';
      let action:string  = 'close';
      this.openSnackBar(message,action);
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
     // alert(err.error.message);
      let message:string = err.error.message;
      let action:string  = 'close';
      this.openSnackBar(message,action);
    });
   
  }

}
