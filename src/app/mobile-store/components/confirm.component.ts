import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { actions } from 'src/app/data/class';
import { error, loading, success } from 'src/app/data/data';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirm',
  templateUrl: '../pages/confirm.component.html',
  styleUrls: ['../styles/confirm.component.scss','../../data/styles/dialogBox.scss',],
  animations: [error, success, loading]
})
export class ConfirmComponent extends actions implements OnInit {
  cart = [];
  count = 1;

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any,
    public cs: CartService
  ){
    super("Confirm");
  }

  onSubmit(){
    this.trueLoading();
    let obj = {
      _id: this.data.id,
      count: this.count,
      color:'blue'
    }
    this.cart.push(obj);

    this.cs.add(this.cart)
      .subscribe(
        (data)=>{
          this.trueSuccess('Added Successfully');
          setTimeout(function(){
            this.dialogRef.close();
          }.bind(this), 2000)
        },(err)=>{
          this.trueError(err.error.message);
          console.log(err);
        }
      )

  }

  onClose(){
    this.dialogRef.close();
  }


  ngOnInit(): void {
    
  }
}
