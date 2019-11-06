import { Component, OnInit } from '@angular/core';
import { AddCategoryService } from '../add-category.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  createdBy:any;
  categoryName:any;
  constructor(private donor:AddCategoryService,private router: Router,private _snackBar:MatSnackBar) 
  { }
  ngOnInit() {
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    
    });
  }

  addcategory()
  {
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let formData :any= {
 'createdBy':user.id,
 'categoryName':this.categoryName
};
this.donor.addcategory(formData).subscribe( (res) => {
  console.log(JSON.stringify(res));
  this.router.navigate(['list-category']);
  //alert('Category added successfully');
  let message:string = 'Category added successfully';
  let action:string  = 'close';
  this.openSnackBar(message,action);
}, (err) =>{
  console.log('error=>'+JSON.stringify(err));
  //alert(err.name);
  let message:string = "category exists";
  let action:string  = 'close';
  this.openSnackBar(message,action);
});
}
}