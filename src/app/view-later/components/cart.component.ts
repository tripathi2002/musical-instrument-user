import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/mobile-store/interfaces/product';
import { Cart } from '../interfaces/cart';
import { CartService } from '../services/cart.service';
import { Dialog } from '@angular/cdk/dialog';
import { OrderConfirmComponent } from './order-confirm.component';

@Component({
  selector: 'app-cart',
  templateUrl: '../pages/cart.component.html',
  styleUrls: ['../styles/cart.component.scss',]
})
export class CartComponent implements OnInit {
  cartDetails:any;
  // products;
  // product;
  // cart:any;
  title = "Cart Page"
  constructor(private cs: CartService,
    public dialog:Dialog
    ){}

  onRemove(id:any){
      console.log("not the backend api persent");
  }

  onEmpty(){
    this.cs.emptyCart()
      .subscribe((res)=>{
        this.cartDetails = []
      },(err)=>{
        console.log(err);
      });
  }

  onBuy(){
    const dialogRef=this.dialog.open(OrderConfirmComponent, {
      data: this.cartDetails
    });
  }

  getCart(){
    this.cs.getCart()
      .subscribe((res)=>{
        this.cartDetails = res;
      })
  }

  getCartCopy(){
    this.cartDetails = this.cs.getCartCopy();
    console.log(this.cartDetails)
  }
  
  ngOnInit(): void {
    this.getCartCopy();
    this.getCart();
  }
}
