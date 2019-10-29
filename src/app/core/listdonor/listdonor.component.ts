import { Component, OnInit } from '@angular/core';
import { ListdonorService } from 'src/app/service/listdonor.service';
@Component({
  selector: 'app-listdonor',
  templateUrl: './listdonor.component.html',
  styleUrls: ['./listdonor.component.css']
})
export class ListdonorComponent implements OnInit {

  constructor(
    private list:ListdonorService
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

}
