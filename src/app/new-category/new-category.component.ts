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
  addContribute()
  {
    let formData :any= {
 'createdBy':this.createdBy,
 'categoryName':this.categoryName
};
this.donor.addcategory(formData).subscribe( (res) => {
  console.log(JSON.stringify(res));
  alert('success');
}, (err) =>{
  console.log('error=>'+JSON.stringify(err));
});
}
}