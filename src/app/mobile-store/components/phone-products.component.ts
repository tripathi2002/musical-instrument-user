import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';
import { Dialog } from '@angular/cdk/dialog';
import { PhoneBuyComponent } from './phone-buy.component';
import { ConfirmComponent } from './confirm.component';
import { PhoneDetailsComponent } from './phone-details.component';

@Component({
  selector: 'app-phone-products',
  templateUrl: '../pages/phone-products.component.html',
  styleUrls: ['../styles/phone-products.component.scss', ]
})
export class PhoneProductsComponent implements OnInit {
  listCount = 0;
  lists: any = [
    {
      _id: '650563b773ef3233df8080e9', title: 'Motorola Edge 40 Neo', slug: 'f3', 
      description: '... Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, consectetur animi!', 
      price: 2, images: [

        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694957845/rdt0egafni0tqtyzs02h.jpg' }
      ],
      brand: {_id: '65056097b15c6e35c516d18d', title: 'samsung', createdAt: '2023-09-16T08:00:23.876Z', updatedAt: '2023-09-16T08:00:23.876Z', __v: 0}
    },
    {
      _id: '6505639573ef3233df8080e2', title: 'vivo T2 Pro', slug: 'f2', description: '...', price: 1, images: [

        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694958864/thd2ao7c5brirricdukn.jpg' },
        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694958862/jxijrvzjgfesg8sqxnoc.jpg' },
        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694958865/dngmlqnelel1uhmndxog.jpg' },
        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694958866/uc8key8nwybrejoukkno.jpg' },
      ],
      brand: {_id: '65056097b15c6e35c516d18d', title: 'samsung', createdAt: '2023-09-16T08:00:23.876Z', updatedAt: '2023-09-16T08:00:23.876Z', __v: 0}

    },
    // { _id: '6505634873ef3233df8080d8', title: 'f1', slug: 'f1', description: '...', price: 12, images: [] },
  ];

  constructor(
    public ps: PhoneService,
    public dialog:Dialog
  ) {

  }

  openBuy(item:any): void{
    const dialogRef=this.dialog.open(PhoneBuyComponent, {
      data: {item}
    })
  }

  addToCart(id:any){
    // console.log(id);
    const dialogRef=this.dialog.open(ConfirmComponent, {
      data: {id}
    })
  }

  viewDetails(id:any){
    const dialogRef= this.dialog.open(PhoneDetailsComponent, {
      data: {id}
    });
  }
  
  getAll(){
    this.ps.all()
      .subscribe((res)=>{
        // console.log(res['product']);
        this.listCount=res['count'];
        this.lists = res['product'];
      }, (e)=>{
        console.log(e)
      });
  }

  ngOnInit(): void {
    this.getAll();
  }
}
