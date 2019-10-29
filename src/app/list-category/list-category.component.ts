import { Component, OnInit } from '@angular/core';
import { AddCategoryService } from '../add-category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  constructor(private donor:AddCategoryService) { }
  data:any;

  ngOnInit() {
    this.listcategory();
  }
  listcategory() {
    this.donor.listcategory().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.data=res;
     // alert('success');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
    });
  }

}