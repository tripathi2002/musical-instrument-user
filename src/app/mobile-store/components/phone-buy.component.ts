import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { error, loading, success } from 'src/app/data/data';
import { PhoneService } from '../services/phone.service';
import { popupBase } from 'src/app/data/class';

@Component({
  selector: 'app-phone-buy',
  templateUrl: '../pages/phone-buy.component.html' ,
  styleUrls: ['../styles/phone-products.component.scss', '../../data/styles/popup.scss', '../styles/phone-buy.component.scss'],
  animations: [error, success, loading],
})
export class PhoneBuyComponent extends popupBase implements OnInit {
  item: any;
  sendData: any;
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any,

  ){
    super();
    this.item = data.item
  }


  onSubmit(){  
    this.trueLoading();
  
  }

  onClose(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.warn(this.data);
  }
  
}
