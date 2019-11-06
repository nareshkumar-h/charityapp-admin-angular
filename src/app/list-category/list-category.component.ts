import { Component, OnInit } from '@angular/core';
import { AddCategoryService } from '../add-category.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  constructor(private donor:AddCategoryService,private _snackBar:MatSnackBar) { }
  data:any;

  ngOnInit() {
    this.listcategory();
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    
    });
  }
  listcategory() {
    this.donor.listcategory().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.data=res;
     // alert('success');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
      let message:string = err.error.message;
      let action:string  = 'close';
      this.openSnackBar(message,action);
    });
  
  }

  updateStatus(id, status) {
    let formData = { 
      "id" : id,
      "active" : status
    }

    this.donor.update(id,formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
      
      alert('success');
      this.listcategory();
    }, (err) =>{
      alert(err.error.message);
      console.log('error=>'+JSON.stringify(err));
    });


  }
  deleteCategory(id){
   
    this.donor.deleteCategory(id).subscribe( (res) => {
      console.log(JSON.stringify(res));
      
      alert('success');
      this.listcategory();
    }, (err) =>{
      alert(err.error.message);
      console.log('error=>'+JSON.stringify(err));
    });


  }

}
