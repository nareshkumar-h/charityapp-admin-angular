import { Component, OnInit } from '@angular/core';
import { ForgotpasswordService } from 'src/app/service/forgotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  isSendMail:boolean = false;
  email:string;
  constructor(
    private forgotPasswordService:ForgotpasswordService
  ) { }

  ngOnInit() {
  }

  sendMail()
  {
    
    this.forgotPasswordService.forgotPassword(this.email).subscribe( (res) => {
      console.log("Mail send successfulley!");
      this.isSendMail = true;
    }, (err) =>{
      console.log("Mail not send");
    });
  }
}
