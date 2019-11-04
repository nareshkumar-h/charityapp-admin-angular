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
  //apiUrl = "https://charity-category.herokuapp.com/";
  apiUrl = "https://peaceful-scrubland-89780.herokuapp.com/categoryapp/";
   
   addcategory(formData:any):any
   {
    console.log(formData);
    return this.http.post(this.apiUrl+'categories',formData);
  }
  listcategory():any
{
 return this.http.get(this.apiUrl+'categories');
}

update(id,formData){
  return this.http.put(this.apiUrl+'categories/'+id, formData);
}
deleteCategory(id){
  return this.http.delete(this.apiUrl+'categories/'+id);
}
}
