import { Component, OnInit } from '@angular/core';
import { ListdonorService } from 'src/app/service/listdonor.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-listdonor',
  templateUrl: './listdonor.component.html',
  styleUrls: ['./listdonor.component.css']
})
export class ListdonorComponent implements OnInit {

  constructor(
    private list:ListdonorService,private _snackBar:MatSnackBar
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

}
