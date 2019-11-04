import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(
    private http:HttpClient
  ) { }

<<<<<<< HEAD
  //apiUrl='https://charity-requestor.herokuapp.com/';
  apiUrl='https://charityapp-api-gateway.herokuapp.com/requestapp/';
=======
  apiUrl='https://charity-requestor.herokuapp.com/';
  //apiUrl='https://peaceful-scrubland-89780.herokuapp.com/requestapp/';
>>>>>>> 28c4fb92cc4b9cd08d24a19e611d595b7b16aea5

  addFundRequest(formData:any):any
  {
    
    return this.http.post(this.apiUrl+'fundrequest',formData);
  }
  
}
