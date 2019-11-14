import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = [];

  getCart(){
    return this.cart;
  }

  addToCart(product){
    this.cart.push(product);
  }
}
