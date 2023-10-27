import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';
import { Product } from '../interfaces/product';
import { timeInterval } from 'rxjs';
import { error, loading, success } from 'src/app/data/data';
import { actions } from 'src/app/data/class';
import { SharedService } from 'src/app/data/services/shared.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: '../pages/phone-details.component.html',
  // styleUrls: ['../styles/phone-products.component.scss','../styles/phone-details.component.scss],
  styleUrls: ['../styles/phone-products.component.scss',
    '../styles/phone-details.component.scss',
    '../../data/styles/dialogBox.scss',
    '../../data/styles/action.scss'],
  animations: [error, success, loading]

})
export class PhoneDetailsComponent extends actions implements OnInit {
  product: Product | any;
  count: number = 1;

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any,
    public ps: PhoneService,
    public sharedService: SharedService
  ) {
    super("Product Details");
  }
  onClose() {
    this.dialogRef.close();
  }



  addToCart() {
    let data = {
      cart: [
        {
          _id: this.data.id,
          count: this.count,
          color: this.product.color
        }
      ]
    }

    this.trueLoading();
    this.ps.addToCart(data)
      .subscribe((res) => {
        this.trueSuccess("Created User");
        this.message = 'Congratulation!!';

        // alert("Add the product in cart");
        setTimeout(() => {
          this.onClose();
        }, 3000);
      }, (err) => {
        this.trueError(err.error.message);
        this.timelate();

        console.log(err);
      }, () => {
        this.count = 1;
      });
  }

  getProduct() {
    this.ps.getProduct(this.data.id)
      .subscribe((res) => {
        console.log(res);
        this.product = res['product'];
      }, (err) => {
        console.log(err);
      })
  }

  getProductCopy() {
    this.product = this.ps.getProductCopy(this.data.id);
  }

  ngOnInit(): void {
    this.getProduct();
    this.getProductCopy();
  }

}
