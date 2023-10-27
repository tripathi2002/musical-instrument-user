import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewLaterRoutingModule } from './view-later-routing.module';
import { WishlistComponent } from './components/wishlist.component';
import { CartComponent } from './components/cart.component';
import { OrdersComponent } from './components/orders.component';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderConfirmComponent } from './components/order-confirm.component';
import { DialogModule } from '@angular/cdk/dialog';
import { Injector } from '../user/data/constants.injectables';


@NgModule({
  declarations: [
    WishlistComponent,
    CartComponent,
    OrdersComponent,
    OrderConfirmComponent,
  ],
  imports: [
    CommonModule,
    ViewLaterRoutingModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [
    CartService,
    Injector
  ]
})
export class ViewLaterModule { }
