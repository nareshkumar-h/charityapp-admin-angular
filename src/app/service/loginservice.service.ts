import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(
    private http:HttpClient
  ) { }
  //apiUrl:string = 'https://charityapp-user-service.herokuapp.com';
  
  //apiUrl='https://userapp-v1.herokuapp.com';
  apiUrl:string = "https://peaceful-scrubland-89780.herokuapp.com/userapp";
  adminLogin(formData:any):any
  {
    return this.http.post(this.apiUrl+'/admin/login',formData);
  }

  
}
