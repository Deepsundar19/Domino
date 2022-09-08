import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cart } from '../interfaces/Cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  url:string="http://localhost:3000/orderPizza";
  httpHeaders=new HttpHeaders().append('content-type','application/json');

  constructor(private httpClient:HttpClient) { }

  addPizzaToCart(createBody: Cart){
    return this.httpClient.post(`${this.url}/addPizzaToCart`,createBody,{headers:this.httpHeaders});
  }
  getPizza(){
    return this.httpClient.get(`${this.url}/getPizza`);
  }
  deleteCartPizza(pizzaName:string){
    return this.httpClient.delete(`${this.url}/deleteCartPizza/${pizzaName}`);
  }
}
