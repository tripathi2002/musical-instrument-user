import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'mobile-store',
    pathMatch:'full'
  },
  { 
    path: 'user',
    loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule)
  },
  {
    path: 'mobile-store',
    loadChildren: ()=> import('./mobile-store/mobile-store.module').then(m=>m.MobilePhonesStoreModule)
  },
  { path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
