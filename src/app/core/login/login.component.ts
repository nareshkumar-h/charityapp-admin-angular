import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;

  constructor(
    private login:LoginserviceService, private router: Router
  ) { }

  ngOnInit() {
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
      alert('Login success');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
      alert(err.error.message);
    });
   
  }
 


}
