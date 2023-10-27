import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './components/wishlist.component';
import { CartComponent } from './components/cart.component';
import { OrdersComponent } from './components/orders.component';

const routes: Routes = [
  {path:'wishlist', component:WishlistComponent},
  {path:'cart', component:CartComponent},
  {path:'orders', component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewLaterRoutingModule { }
