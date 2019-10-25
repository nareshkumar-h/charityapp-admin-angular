import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;

  constructor(
    private login:LoginserviceService
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
      alert('success');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
    });
  }
 


}
