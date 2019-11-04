import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadminService {
  //apiUrl:string = "https://userapp-v1.herokuapp.com";
  apiUrl:string = 'https://charityapp-api-gateway.herokuapp.com/userapp';
  constructor(
    private http:HttpClient
  ) { }

  listAdmin():any
  {
    return this.http.get(this.apiUrl+"/admin/list");
  }
}
