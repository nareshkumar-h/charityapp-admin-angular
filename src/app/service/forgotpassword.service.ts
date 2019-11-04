import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
<<<<<<< HEAD
  //apiUrl:string = "https://userapp-v1.herokuapp.com";
  apiUrl:string ="https://charityapp-api-gateway.herokuapp.com/userapp";
=======
  apiUrl:string = "https://userapp-v1.herokuapp.com";
  //apiUrl:string = "https://peaceful-scrubland-89780.herokuapp.com/userapp";
>>>>>>> 28c4fb92cc4b9cd08d24a19e611d595b7b16aea5
  constructor(
    private http:HttpClient
  ) { }
    forgotPassword(email:string):any
    {
      return this.http.get(this.apiUrl+'/admin/forgotpassword?email='+email);
    }
}
