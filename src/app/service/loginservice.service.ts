import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(
    private http:HttpClient
  ) { }
  apiUrl:string = 'https://charityapp-user-service.herokuapp.com';
  adminLogin(formData:any):any
  {
    return this.http.post(this.apiUrl+'/admin/login',formData);
  }
  
}
