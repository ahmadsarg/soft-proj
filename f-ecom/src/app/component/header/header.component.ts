import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number=0;
  constructor(private cartService:CartService,) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{  //when I subscribe try to store how many items are present in the cart
      this.totalItem = res.length;     //now display this on my header
    })
  }

}
