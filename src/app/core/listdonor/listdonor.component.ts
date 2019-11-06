import { Component, OnInit } from '@angular/core';
import { ListdonorService } from 'src/app/service/listdonor.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-listdonor',
  templateUrl: './listdonor.component.html',
  styleUrls: ['./listdonor.component.css']
})
export class ListdonorComponent implements OnInit {

  constructor(
    private list:ListdonorService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.listDonorDetails();
  }

  users:[];

  listDonorDetails()
  {
    return this.list.listDonor().subscribe( (res)=>{
      console.log(res);
      this.users = res;
    }, (err)=>{
      console.log(err.error.message);
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
      alert("Activted success");
      this.listDonorDetails();
    }, (err) => {
      alert("Activted failure");
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
