import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminregisterService {

  constructor(
    private http:HttpClient
  ) { }
  apiUrl='https://userapp-v1.herokuapp.com';
  adminRegister(formData:any):any
  {
    return this.http.post(this.apiUrl+'/admin/register',formData);
  }
}
