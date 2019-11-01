import { Component, OnInit } from '@angular/core';
import { FundserviceService } from 'src/app/service/fundservice.service';

@Component({
  selector: 'app-listfundrequest',
  templateUrl: './listfundrequest.component.html',
  styleUrls: ['./listfundrequest.component.css']
})
export class ListfundrequestComponent implements OnInit {

  fundList:any;
  adminstatus:boolean=true;

  constructor(
    private fund:FundserviceService,
  ) { }

  ngOnInit() {
    this.viewFundRequest();
  }
  viewFundRequest(){
    this.fund.viewFundRequest().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.fundList = res;
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }

}
