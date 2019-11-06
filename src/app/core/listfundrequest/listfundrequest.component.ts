import { Component, OnInit } from '@angular/core';
import { FundserviceService } from 'src/app/service/fundservice.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-listfundrequest',
  templateUrl: './listfundrequest.component.html',
  styleUrls: ['./listfundrequest.component.css']
})
export class ListfundrequestComponent implements OnInit {

  fundList:any;
  adminstatus:boolean=true;

  constructor(
    private fund:FundserviceService,private _snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.viewFundRequest();
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  viewFundRequest(){
    this.fund.viewFundRequest().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.fundList = res;
    }, (err) => {
      console.log(JSON.stringify(err));
      let message:string = err.error.message;
      let action:string  = 'close';
      this.openSnackBar(message,action);
    });
  }

}
