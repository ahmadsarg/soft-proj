import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any=[]
  public productList= new BehaviorSubject<any>([]); //this can emit and alo be subscribed
  constructor() { }

  getProducts(){
    return this.productList.asObservable();  //  who ever call this will get the dta inside it
  }
  setProducts(product:any){
    this.cartItemList.push(product);              //push the product inside cart list
    this.productList.next(product)  ;        //emit value inside when press next the dta wll be passed where it is sunscribed
  }

  AddToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal =0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList)
  }
  RemoveAll(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }
}
