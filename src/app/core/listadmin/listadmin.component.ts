import { Component, OnInit } from '@angular/core';
import { ListadminService } from 'src/app/service/listadmin.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent implements OnInit {

  constructor(
    private list:ListadminService,private _snackBar:MatSnackBar
  ) { }

  users:[];

  ngOnInit() {
    this.listAdminDetails();
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    
    });
  }
  listAdminDetails()
  {
    this.list.listAdmin().subscribe( (res) =>{
      console.log(JSON.stringify(res));
      this.users = res;
    }, (err)=>{
      console.log(err.error.message);
      let message:string = err.error.message;
      let action:string  = 'close';
      this.openSnackBar(message,action);
    });
  }
}
