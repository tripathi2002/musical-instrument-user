import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilePhonesStoreComponent } from './mobile-phones-store.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  {
    path:'',
    component:MobilePhonesStoreComponent
  },
  {
    path:'phones',
    component: PhoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilePhonesStoreRoutingModule { }
