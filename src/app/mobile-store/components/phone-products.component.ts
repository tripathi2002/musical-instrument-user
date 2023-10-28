import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';
import { Dialog } from '@angular/cdk/dialog';
import { PhoneBuyComponent } from './phone-buy.component';
import { ConfirmComponent } from './confirm.component';
import { PhoneDetailsComponent } from './phone-details.component';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-phone-products',
  templateUrl: '../pages/phone-products.component.html',
  styleUrls: ['../styles/phone-products.component.scss',]
})
export class PhoneProductsComponent implements OnInit {
  productsDetails: any;
  products: Product[];
  count: number;

  constructor(
    public ps: PhoneService,
    public dialog: Dialog
  ) {

  }

  openBuy(item: any): void {
    const dialogRef = this.dialog.open(PhoneBuyComponent, {
      data: { item }
    })
  }

  addToCart(id: any) {
    // console.log(id);
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { id }
    })
  }

  viewDetails(id: any) {
    const dialogRef = this.dialog.open(PhoneDetailsComponent, {
      data: { id }
    });
  }

  addToWishlist(id) {
    this.ps.addToWishlist(id)
      .subscribe((res) => {
        console.log("added");
        if (res['wishlist'].length) alert('removed from wishlist');
        else alert('added in wishlist');
      }, (err) => {
        console.log(err);
      });
  }

  getAll() {
    this.ps.all()
      .subscribe((res) => {
        this.productsDetails = res;
        this.products = this.productsDetails.product;
        this.count = this.productsDetails.count;
      }, (e) => {
        console.log(e);
        // this.getAllCopy();
      });
  }

  getAllCopy() {
    this.productsDetails = this.ps.allCopy();
    this.products = this.productsDetails.product;
    this.count = this.productsDetails.count;
  }

  ngOnInit(): void {
    this.getAll();
    // this.getAllCopy();
  }
}
