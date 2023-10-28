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
  cartProducts;
  cartTotal = 0;
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
        // this.cartDetails = [];
        this.cartProducts = [];
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
        console.log("cart res",res);
      })
  }

  getAllCart(){
    this.cs.getAllCart()
      .subscribe((res)=>{
        this.cartProducts = res;
        console.log(res);
        this.calculateCartTotal();
      })
  }

  getCartCopy(){
    this.cartDetails = this.cs.getCartCopy();
    console.log(this.cartDetails)
  }
  
  calculateCartTotal(){
    this.cartProducts.forEach(element => {
      this.cartTotal += element.cartTotal; 
    });
    if(this.cartTotal>500){
      this.cartTotal +=200
    }
  }
  ngOnInit(): void {
    // this.getCartCopy();
    // this.getCart();
    this.getAllCart();
  }
}
