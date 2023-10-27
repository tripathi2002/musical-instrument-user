import { Component } from '@angular/core';
import { error, loading, success } from 'src/app/data/data';
import { actions } from './class';

@Component({
  selector: 'app-action',
  template: `
  <div class="action-container">

    <div class="message" 
        [@error]="isError?'start':'end'" 
        [@success]="isSuccess?'start':'end'"  
    >
        <span>{{message}}</span>
    </div>
    <div class="action-blur"  *ngIf="isLoading"  [@loading]="isLoading?'start':'end'"></div>
        <div class="loading-box"
          *ngIf="isLoading"
        >
          <img class="lodaing-box-img" src="../../../assets/images/loading.gif" alt="loading image">
        </div>
  </div>

  `,
  styles: [`
    .container{
        width:70vw;
        height: 60vh;
        background: #000;
    }
    .action-container{

      .message {
          position: fixed;
          top: 10rem;
          color: #fff;
          padding: 0.5rem 1rem;
          width: 16rem;
          text-align: center;
          height: 5rem;
          border-right: none;
          overflow: hidden;
          border-radius: 0.5rem 0 0 0.5rem;
      }
    
      .action-blur{
          opacity: 1;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* filter: blur(1px); */
          background: #151718db;
      }
      
      .loading-box {
        /* opacity: 1; */
        position: fixed;
        top: 10rem;
        left: calc(50% - 11.625rem);
      }
    }
    `
  ],
  animations: [loading, success, error]
})
export class ActionComponent extends actions {
  constructor(
  ) {
    super();
  }

  onAction() {

    this.trueLoading();
    this.trueSuccess("");
    setTimeout(() => {
      this.falseAll;
    }, 2000);
  }
}
