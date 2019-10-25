import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/service/adminservice.service';

@Component({
  selector: 'app-addfundrequest',
  templateUrl: './addfundrequest.component.html',
  styleUrls: ['./addfundrequest.component.css']
})
export class AddfundrequestComponent implements OnInit {

  categoryId:any;
  fundNeeded:any;
  requestedBy:any;

  constructor(
    private admin:AdminserviceService
  ) { }

  ngOnInit() {
  }
  addrequest()
  {
    let formData :any= {
      'categoryId':this.categoryId,
      'fundNeeded':this.fundNeeded,
      'requestedBy':this.requestedBy
    };
    this.admin.addFundRequest(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
      alert('success');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
    });
  }

}
