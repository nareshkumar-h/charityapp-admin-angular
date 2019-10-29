import { Component, OnInit } from '@angular/core';
import { AddCategoryService } from '../add-category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  createdBy:any;
  categoryName:any;
  constructor(private donor:AddCategoryService) 
  { }
  ngOnInit() {
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
  alert('success');
}, (err) =>{
  console.log('error=>'+JSON.stringify(err));
  alert(err.name);
});
}
}