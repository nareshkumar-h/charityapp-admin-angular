import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/service/adminservice.service';
import { Router } from '@angular/router';
import { AddCategoryService } from 'src/app/add-category.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-addfundrequest',
  templateUrl: './addfundrequest.component.html',
  styleUrls: ['./addfundrequest.component.css']
})
export class AddfundrequestComponent implements OnInit {

  categoryId:any;
  fundNeeded:any;
  requestedBy:any;
  title:any;
  description:any;

  requestStatus:boolean = false;

  constructor(
    private admin:AdminserviceService,private router: Router, private categoryService:AddCategoryService,
    private _snackBar:MatSnackBar
   
  ) { }

  ngOnInit() {
    this.loadCategories();
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    
    });
  }
  addrequest()
  {
   let user:any= JSON.parse(localStorage.getItem('LOGGED_IN_USER'));
    let formData :any= {
      'categoryId':this.categoryId,
      'fundNeeded':this.fundNeeded,
      'requestedBy':user.id,
      'title':this.title,
      'description':this.description
    };
    console.log(formData);
    this.admin.addFundRequest(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.router.navigate(['viewfund']);
      let message:string = 'Fund Added successfully';
      let action:string  = 'close';
      this.openSnackBar(message,action);
      this.requestStatus = true;
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
     // alert(err.error.message);
      let message:string = err.error.message;
      let action:string  = 'close';
      this.openSnackBar(message,action);
    });
  }

  categories = [];


  loadCategories(){
    this.categoryService.listcategory().subscribe( (res)=>{
      this.categories = res;
    })
  }

}
