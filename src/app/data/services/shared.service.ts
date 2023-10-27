import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  userItemsRoute = [
    {
      routeLink: 'user/profile',
      icon: 'fa-regular fa-id-card',
      label: 'profile',
      type: 'a'
    },
    {
      routeLink: 'view-later/orders',
      icon: 'fa-solid fa-truck-fast',
      label: 'Orders',
      type: 'a'
    },
    {
      routeLink: 'user/setting',
      icon: 'fa-solid fa-gears',
      label: 'settings',
      type: 'a'
    },
    {
      routeLink: localStorage.getItem('token') ? 'user/logout' : 'user/login',
      icon: 'fa fa-right-to-bracket',
      label: localStorage.getItem('token') ? 'Log Out' : 'Log In',
      type: localStorage.getItem('token') ? 'b' : 'a'
    },
  ]

  private headerData = new BehaviorSubject<any>(this.userItemsRoute);
  headerData$ = this.headerData.asObservable();

  updateHeaderData() {
    this.headerData.next([
      {
        routeLink: 'user/profile',
        icon: 'fa-regular fa-id-card',
        label: 'profile',
        type: 'a'
      },
      {
        routeLink: 'view-later/orders',
        icon: 'fa-solid fa-truck-fast',
        label: 'Orders',
        type: 'a'
      },
      {
        routeLink: 'user/setting',
        icon: 'fa-solid fa-gears',
        label: 'settings',
        type: 'a'
      },
      {
        routeLink: localStorage.getItem('token') ? 'user/logout' : 'user/login',
        icon: 'fa fa-right-to-bracket',
        label: localStorage.getItem('token') ? 'Log Out' : 'Log In',
        type: localStorage.getItem('token') ? 'b' : 'a'
      }
    ]);
  }

  constructor() { }
}
