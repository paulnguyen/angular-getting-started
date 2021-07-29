import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() {
    console.log("construtor:");
    console.log(this.items);
  }

  addToCart(product: Product) {
    this.items.push(product);
    console.log("add to cart: ");
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
