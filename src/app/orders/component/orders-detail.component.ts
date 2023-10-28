import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-orders-detail',
  templateUrl:'../pages/orders-detail.component.html',
  styleUrls: ['../styles/orders-detail.component.scss']
})
export class OrdersDetailComponent implements OnInit {
  title = "Order Details"
  order:any;
  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private os:OrderService,
    public dialogRef:DialogRef
  ){
    // console.log(data)
  }

  onClose(){
    this.dialogRef.close();
  }

  // getOrder(){
  //   this.os.getOrder(this.data.id)
  //     .subscribe((res)=>{
  //       console.log(res);
  //     })
  // }

  getOrder(){
    let items;
    let products = [];
    let user;
    let product

    this.os.getOrder(this.data.id)
      .subscribe((res)=>{
        // console.log(res);
        items = res;
        items.products.forEach(el=>{
          // console.log("product id: ", el.product)
          this.os.getProduct(el.product)
            .subscribe((response)=>{
              product = response['product'];
              products.push(product);
            })
        })
        // console.log(items)
        this.os.getUser(items.orderby)
          .subscribe(response =>{
            user = response;
            this.order = {
              _id: items._id,
              products,
              paymentIntent: items.paymentIntent,
              orderStatus: items.orderStatus,
              orderBy: user,
              createdBy:items.createdAt
            }
    
          })
        
        console.log("Orders",this.order);
      })
  }

  getOrderCopy(){
    console.log(this.data)
    let order = this.os.getOrderCopy(this.data)
    // console.log(order);
    let products = []
    order.products.forEach(element => {
      let product = this.os.getProductCopy(element._id).product;
      products.push(product);
    });
    // console.log(products)
    let user = this.os.getUserCopy(order.orderby);
    // console.log(user)
    this.order = {
      _id: order._id,
      products,
      paymentIntent :order.paymentIntent,
      orderStatus: order.orderStatus,
      orderBy: user,
      createdAt:order.createdAt,
    }
    // console.log(this.order)
  }

  display(pr){
    console.log(pr)
  }

  ngOnInit(): void {
    // this.getOrderCopy();
    this.getOrder();
  }
}
