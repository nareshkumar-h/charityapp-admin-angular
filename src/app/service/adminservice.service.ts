import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(
    private http:HttpClient
  ) { }

  apiUrl:string = 'http://localhost:9003/';

  addFundRequest(formData:any):any
  {
    
    return this.http.post(this.apiUrl+'fundrequest',formData);
  }
  
}
