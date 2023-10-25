import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileStoreComponent } from './mobile-store.component';
import { PhoneProductsComponent } from './components/phone-products.component';

const routes: Routes = [
  {
    path:'',
    component:MobileStoreComponent
  },
  {
    path:'phones',
    component: PhoneProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileStoreRoutingModule { }
