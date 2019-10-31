import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
//apiUrl:string = "https://userapp-v1.herokuapp.com";
  apiUrl:string = "https://peaceful-scrubland-89780.herokuapp.com/userapp";
  constructor(
    private http:HttpClient
  ) { }
    forgotPassword(email:string):any
    {
      return this.http.get(this.apiUrl+'/admin/forgotpassword?email='+email);
    }
}
