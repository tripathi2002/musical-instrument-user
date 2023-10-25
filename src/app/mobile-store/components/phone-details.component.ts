import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: '../pages/phone-details.component.html',
  styleUrls: ['../styles/phone-products.component.scss','../styles/phone-details.component.scss',]
})
export class PhoneDetailsComponent implements OnInit {
  title = "Product Details"

  item: any= {
    _id: '650563b773ef3233df8080e9', title: 'Motorola Edge 40 Neo', slug: 'f3', 
    description: '... Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, consectetur animi!', 
    price: 2, images: [

      { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694957845/rdt0egafni0tqtyzs02h.jpg' },
      { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694957845/rdt0egafni0tqtyzs02h.jpg' },
      { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694957845/rdt0egafni0tqtyzs02h.jpg' },
    ],
    brand: {_id: '65056097b15c6e35c516d18d', title: 'samsung', createdAt: '2023-09-16T08:00:23.876Z', updatedAt: '2023-09-16T08:00:23.876Z', __v: 0}
  }
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any,
    public ps: PhoneService
  ){
    // super();
  }

  getProduct(){
    this.ps.getProduct(this.data.id)
      .subscribe((res)=>{
        this.item = res['product'];
        console.log("product::", res)
      }, (err)=>{
        console.log(err);
      })

  }
  
  onClose(){
    this.dialogRef.close();
  }



  // addToCart(id:any){
  //   // console.log(id);
  //   const dialogRef=this.dialog.open(ConfirmComponent, {
  //     data: {id}
  //   })
  // }


  ngOnInit(): void {
    this.getProduct();
  }

}
