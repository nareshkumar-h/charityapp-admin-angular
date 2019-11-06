import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }
    apiUrl:string  = "https://userapp-v1.herokuapp.com";
  updatedUserActiveStatus(id:any,formData:any)
  {
    return this.http.patch(this.apiUrl+"/user/"+id+"/updateActiveStatus",formData);
  }
}
