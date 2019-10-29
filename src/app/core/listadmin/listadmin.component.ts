import { Component, OnInit } from '@angular/core';
import { ListadminService } from 'src/app/service/listadmin.service';
@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent implements OnInit {

  constructor(
    private list:ListadminService
  ) { }

  users:[];

  ngOnInit() {
    this.listAdminDetails();
  }
  listAdminDetails()
  {
    this.list.listAdmin().subscribe( (res) =>{
      console.log(JSON.stringify(res));
      this.users = res;
    }, (err)=>{
      console.log(err.error.message);
    });
  }
}
