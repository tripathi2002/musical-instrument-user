import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  products: any = [
    {
      _id: '650563b773ef3233df8080e9', title: 'Motorola Edge 40 Neo', slug: 'f3', 
      description: '... Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, consectetur animi!', 
      price: 2, images: [

        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694957845/rdt0egafni0tqtyzs02h.jpg' }
      ]
    },
    {
      _id: '6505639573ef3233df8080e2', title: 'vivo T2 Pro', slug: 'f2', description: '...', price: 1, images: [

        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694958862/jxijrvzjgfesg8sqxnoc.jpg' },
        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694958864/thd2ao7c5brirricdukn.jpg' },
        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694958865/dngmlqnelel1uhmndxog.jpg' },
        { url: 'https://res.cloudinary.com/dg7hngysn/image/upload/v1694958866/uc8key8nwybrejoukkno.jpg' },
      ]
    },
    // { _id: '6505634873ef3233df8080d8', title: 'f1', slug: 'f1', description: '...', price: 12, images: [] },
  ];

  constructor(
    public ps: PhoneService,
  ) {

  }

  // getAll(){
  //   this.ps.all()
  //     .subscribe((res) => {
  //       console.log(res)
  //     },
  //       (err) => {
  //         console.log(err)
  //       })
  // }

  ngOnInit(): void {
    
  }
}
