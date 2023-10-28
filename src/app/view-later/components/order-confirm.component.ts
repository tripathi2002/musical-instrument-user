import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { error, loading, success } from 'src/app/data/data';
import { actions } from 'src/app/data/class';
@Component({
  selector: 'app-order-confirm',
  templateUrl: '../pages/order-confirm.component.html',
  styleUrls: ['../styles/order-confirm.component.scss', '../../data/styles/dialogBox.scss', '../../data/styles/action.scss'],
  animations: [loading, success, error]
})
export class OrderConfirmComponent extends actions {

  itemView = ["index", "item", "price", "quantity", "color", "count"]
  constructor(public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any,
    public cs: CartService
  ) {
    console.log(data);
    super("Confirm Order");
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.trueLoading();
    this.cs.createOrder()
      .subscribe((res) => {
        console.log(res);
        this.trueSuccess('Order Confirmed');
        this.cs.emptyCart()
          .subscribe((res) => {
            // this.cartDetails = [];
            // this.cartProducts = [];
            
          }, (err) => {
            console.log(err);
          });

      }, (err) => {
        console.log(err);
        this.trueError(err.error.message);
        this.timelate();
        setTimeout(() => {
          this.dialogRef.close();
        }, 5000)

      }, () => {
        setTimeout(() => {
          this.dialogRef.close();
        }, 5000)
      })
  }
}
