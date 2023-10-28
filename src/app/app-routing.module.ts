import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './data/action.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'mobile-store',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'orders',
    loadChildren: ()=>import('./orders/order.module').then(m=>m.OrderModule)
  },
  {
    path: 'mobile-store',
    loadChildren: () => import('./mobile-store/mobile-store.module').then(m => m.MobilePhonesStoreModule)
  },
  {
    path: 'view-later',
    loadChildren: ()=>import('./view-later/view-later.module').then(m=>m.ViewLaterModule)
  },
  
  // { path: 'cart', component: ActionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
