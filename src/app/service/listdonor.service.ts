import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListdonorService {

  constructor(
    private http:HttpClient
  ) { }

  //apiUrl:string = "https://userapp-v1.herokuapp.com";
  apiUrl:string = "https://charityapp-api-gateway.herokuapp.com/userapp";

  listDonor():any
  {
    return this.http.get(this.apiUrl+"/user/list");
  }
}
