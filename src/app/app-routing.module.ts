import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'mobile-phones-store',
    pathMatch:'full'
  },
  // { 
  //   path: 'user',
  //   loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule)
  // },
  {
    path: 'mobile-phones-store',
    loadChildren: ()=> import('./mobile-phones-store/mobile-phones-store.module').then(m=>m.MobilePhonesStoreModule)
  },
  { path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
