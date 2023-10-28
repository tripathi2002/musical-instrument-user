import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './component/orders.component';
import { OrdersListComponent } from './component/orders-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './order.service';
import { OrdersDetailComponent } from './component/orders-detail.component';
import { DialogModule } from '@angular/cdk/dialog';
import { Injector } from '../user/data/constants.injectables';


@NgModule({
  declarations: [
    OrdersComponent,
    OrdersListComponent,
    OrdersDetailComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [
    OrderService,
    Injector
  ]
})
export class OrderModule { }
