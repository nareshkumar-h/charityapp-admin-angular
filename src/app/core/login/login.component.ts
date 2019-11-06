import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;

  constructor(
    private login:LoginserviceService, private router: Router,
    private _snackBar : MatSnackBar
  ) { }

  ngOnInit() {
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  adminlogin()
  {
    let formData :any= {
      'email':this.email,
      'password':this.password
      
    };
    
    this.login.adminLogin(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
       localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res));
    //console.log(user);
    this.router.navigate(['list-category']);
      // alert('Login success');
      let message:string = 'Login success';
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
