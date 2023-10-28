import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Dialog } from '@angular/cdk/dialog';
import { OrdersDetailComponent } from './orders-detail.component';
@Component({
  selector: 'app-orders-list',
  templateUrl: '../pages/orders-list.component.html',
  styleUrls: ['../styles/orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  // listFormate = ['id', 'method', 'status', 'amount', 'orderStatus', 'orderedOn'];
  listFormate = ['id', 'status', 'orderStatus', 'orderedOn'];
  
  orders = [];
  constructor(
    private os:OrderService,
    private dialog: Dialog
  ){

  }

  viewDetails(id){
    this.dialog.open(OrdersDetailComponent,{ data: { id} })
  }

  getAllOrder(){
    let norder;
    this.os.getAllOrder()
      .subscribe((res)=>{
        console.log(res);
        norder = res;
        norder.forEach(el => {
          console.log(el)
          let obj = {
            id : el._id,
            // method: el.paymentIntent.method,
            status: el.paymentIntent.status,
            amount: `₹ ${el.paymentIntent.amount}`,
            orderStatus: el.orderStatus,
            orderedOn: new Date(el.createdAt).toLocaleDateString('en-US'),
          }
          this.orders.push(obj);
          console.log(obj)
        })
      },(err)=>{
        console.log(err);
      });
  }

  getOrdersCopy(){
    let data = this.os.getAllOrderCopy();
    let products = [];
    data.forEach((el)=>{
      let obj = {
        id : el._id,
        method: el.paymentIntent.method,
        status: el.paymentIntent.status,
        amount: `₹ ${el.paymentIntent.amount}`,
        orderStatus: el.orderStatus,
        orderedOn: new Date(el.createdAt).toLocaleDateString('en-US'),
      }
      this.orders.push(obj);
    })
    // console.log(this.orders);
  }

  ngOnInit(): void {
    // this.getOrdersCopy();
    this.getAllOrder();
  }
}
