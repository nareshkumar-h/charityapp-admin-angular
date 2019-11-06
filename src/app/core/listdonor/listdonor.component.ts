import { Component, OnInit } from '@angular/core';
import { ListdonorService } from 'src/app/service/listdonor.service';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-listdonor',
  templateUrl: './listdonor.component.html',
  styleUrls: ['./listdonor.component.css']
})
export class ListdonorComponent implements OnInit {

  constructor(
    private list:ListdonorService,private _snackBar:MatSnackBar,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.listDonorDetails();
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    
    });
  }

  users:[];

  listDonorDetails()
  {
    return this.list.listDonor().subscribe( (res)=>{
      console.log(res);
      this.users = res;
    }, (err)=>{
      console.log(err.error.message);
      let message:string = err.error.message;
      let action:string  = 'close';
      this.openSnackBar(message,action);
    });
  }

  activate(id:any)
  {
    let userStatus:boolean = true;
    let formData:any = {
      active:userStatus
    };
    this.userService.updatedUserActiveStatus(id,formData).subscribe( (res) => {
      // console.log(res);
      //alert("Activted success");
      let message:string = "Activation success";
      let action:string  = 'close';
      this.openSnackBar(message,action);
      this.listDonorDetails();
    }, (err) => {
     // alert("Activted failure");
      let message:string = "Activation failure";
      let action:string  = 'close';
      this.openSnackBar(message,action);
      // console.log(err.error.message);
    });
    // console.log(id+":"+userStatus);
  }
  deActivate(id:any)
  {
    let userStatus:boolean = false;
    let formData:any = {
      active:userStatus
    };
    this.userService.updatedUserActiveStatus(id,formData).subscribe( (res) => {
      // console.log(res);
      alert("Deactivted success");
      this.listDonorDetails();
    }, (err) => {
      // console.log(err.error.message);
      alert("Deactivted failure");
    });
    console.log(id+":"+userStatus);
  }

}
