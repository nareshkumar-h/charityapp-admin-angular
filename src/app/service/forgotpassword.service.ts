import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
  apiUrl:string = "https://userapp-v1.herokuapp.com";
  constructor(
    private http:HttpClient
  ) { }
    forgotPassword(email:string):any
    {
      return this.http.get(this.apiUrl+'/user/forgotpassword?email='+email);
    }
}
