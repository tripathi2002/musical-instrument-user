import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilePhonesStoreRoutingModule } from './mobile-phones-store-routing.module';
import { MobilePhonesStoreComponent } from './mobile-phones-store.component';
import { PhonesFilterComponent } from './components/phones-filter.component';
import { PhoneLeftComponent } from './components/phone-left.component';
import { PhoneCenterComponent } from './components/phone-center.component';


@NgModule({
  declarations: [
    MobilePhonesStoreComponent,
    PhonesFilterComponent,
    PhoneLeftComponent,
    PhoneCenterComponent,
  ],
  imports: [
    CommonModule,
    MobilePhonesStoreRoutingModule
  ]
})
export class MobilePhonesStoreModule { }
