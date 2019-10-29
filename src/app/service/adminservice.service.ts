import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(
    private http:HttpClient
  ) { }

  apiUrl='https://userapp-v1.herokuapp.com';

  addFundRequest(formData:any):any
  {
    
    return this.http.post(this.apiUrl+'fundrequest',formData);
  }
  
}
