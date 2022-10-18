import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList:any;
  constructor(private api:ApiService,private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=> {
      this.productList = res;

      this.productList.forEach((a:any)=>{  /* we add quantity and total attributtes that are in the table because they are not included in the api*/
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addToCart(item: any) {
    /*
        call the add to cart function in cart service
    */
    this.cartService.AddToCart(item);
  }
}
