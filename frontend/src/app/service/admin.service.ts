import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PizzaDetails } from '../interfaces/Pizza';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string="http://localhost:3000/pizzaMania";
  httpHeaders=new HttpHeaders().append('content-type','application/json');
  // headers=new HttpHeaders().append('authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inh4QGdtLmNtIiwiaWF0IjoxNjYyMDY3NzY3fQ.yfKuzzWUP7KinmFdMrQ2GkN19vsM1xB2ej-NFrYh6ws');

  constructor(private httpClient:HttpClient) { }
  
  fetchPizza(){
    return this.httpClient.get(this.url+"/fetchPizza");
  }
  addPizza(createBody: PizzaDetails){
    return this.httpClient.post(this.url+"/addPizza",createBody,{headers:this.httpHeaders});
  }

  getCurrentPizza(pizzaName: any){
    return this.httpClient.get(`${this.url}/getCurrentPizza/${pizzaName}`)
  }

  editPizza(pizzaName: string | null,createBody: PizzaDetails){
    return this.httpClient.put(`${this.url}/editPizza/${pizzaName}`,createBody,{headers:this.httpHeaders});
  }

  deletePizza(pizzaName: string){
    return this.httpClient.delete(`${this.url}/deletePizza/${pizzaName}`);
  }
}
