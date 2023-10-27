import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: '../pages/orders.component.html',
  // template: '',
  styleUrls: ['../styles/orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders:any;
  constructor(
    public cs:CartService
  ){}

  getOreders(){
    this.orders = this.cs.getOrders()
      .subscribe((res)=>{
        this.orders = res;
        console.log(res);
      })
  }
  getOredersCopy(){
    this.orders = this.cs.getOrders();
  }

  ngOnInit(): void {
    this.getOreders();
    // this.getOredersCopy();
  }
}
