import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {

  constructor(
    private http:HttpClient
    ) { }
  // apiUrl='http://localhost:9002/';
  apiUrl = "https://charity-category.herokuapp.com/";
   
   addcategory(formData:any):any
   {
    console.log(formData);
    return this.http.post(this.apiUrl+'Categories',formData);
  }
  listcategory():any
{
 return this.http.get(this.apiUrl+'categories/listCategory');
}
}
