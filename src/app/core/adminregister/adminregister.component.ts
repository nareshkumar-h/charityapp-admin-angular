import { Component, OnInit } from '@angular/core';
import {AdminregisterService} from 'src/app/service/adminregister.service';
import { Router } from '@angular/router';


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
    private register:AdminregisterService, private router: Router
  ) { }

  ngOnInit() {
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
      alert('success');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
    });
   
  }

}
