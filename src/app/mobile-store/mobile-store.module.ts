import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injector } from '../user/data/constants.injectables';
import { HttpClientModule } from '@angular/common/http';

import { MobileStoreComponent } from './mobile-store.component';
import { MobileStoreRoutingModule } from './mobile-store-routing.module';
import { PhoneLeftComponent } from './components/phone-left.component';
import { PhoneProductsComponent } from './components/phone-products.component';
import { PhoneCenterComponent } from './components/phone-center.component';
import { PhonesFilterComponent } from './components/phones-filter.component';
import { PhoneBuyComponent } from './components/phone-buy.component';

import { PhoneService } from './services/phone.service';
import{ DialogModule } from '@angular/cdk/dialog';
import { ConfirmComponent } from './components/confirm.component'
import { CartService } from './services/cart.service';
import { PhoneDetailsComponent } from './components/phone-details.component';

@NgModule({
  declarations: [
    MobileStoreComponent,
    PhoneLeftComponent,
    PhoneCenterComponent,
    PhoneProductsComponent,
    PhoneBuyComponent,
    PhonesFilterComponent,
    ConfirmComponent,
    PhoneDetailsComponent,
  ],
  imports: [
    CommonModule,
    MobileStoreRoutingModule,
    HttpClientModule,
    DialogModule,
  ],
  providers: [
    PhoneService,
    CartService,
    Injector
  ]
})
export class MobilePhonesStoreModule { }
