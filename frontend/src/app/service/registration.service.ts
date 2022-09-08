import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, Signup } from '../interfaces/registration';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  url:string="http://localhost:3000/registration";
  httpHeaders=new HttpHeaders().append('content-type','application/json');
  
  constructor(private httpClient:HttpClient) { }

  createUserSignupDetails(createBody: Signup):Observable<any>{
    return this.httpClient.post(this.url+"/userSignup",createBody,{headers:this.httpHeaders});
  }

  authenticateUser(createBody: Login):Observable<any>{
    return this.httpClient.post(this.url+"/userLogin",createBody,{headers:this.httpHeaders});
  }

  createAdminSignupDetails(createBody: Signup):Observable<any>{
    return this.httpClient.post(this.url+"/adminSignup",createBody,{headers:this.httpHeaders});
  }

  authenticateAdmin(createBody: Login):Observable<any>{
    return this.httpClient.post(this.url+"/adminLogin",createBody,{headers:this.httpHeaders});
  }

  getAllUser(){
    return this.httpClient.get(this.url+"/getAllUser"); 
  }
  getAllAdmin(){
    return this.httpClient.get(this.url+"/getAllAdmin"); 
  }

}

