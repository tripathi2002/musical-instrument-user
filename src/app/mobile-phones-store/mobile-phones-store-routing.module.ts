import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilePhonesStoreComponent } from './mobile-phones-store.component';

const routes: Routes = [
  {
    path:'',
    component:MobilePhonesStoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilePhonesStoreRoutingModule { }
