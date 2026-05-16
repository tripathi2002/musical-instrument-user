import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import * as MockData from '../mock-data';

@Injectable()
export class MockInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { url, method } = request;

    console.log(`Intercepted request: ${method} ${url}`);

    // User endpoints
    if (url.includes('/user/login') || url.includes('/user/admin-login')) {
      return of(new HttpResponse({ status: 200, body: MockData.MOCK_USER })).pipe(delay(500));
    }
    if (url.includes('/user/register')) {
      return of(new HttpResponse({ status: 201, body: { newUser: MockData.MOCK_USER } })).pipe(delay(500));
    }
    if (url.match(/\/user\/[a-z0-9]+$/)) {
        return of(new HttpResponse({ status: 200, body: MockData.MOCK_USER })).pipe(delay(500));
    }

    // Product endpoints
    if (url.includes('/product') && method === 'GET') {
      if (url.match(/\/product\/[a-z0-9]+$/)) {
          const id = url.split('/').pop();
          const product = MockData.MOCK_PRODUCTS.find(p => p._id === id) || MockData.MOCK_PRODUCTS[0];
          return of(new HttpResponse({ status: 200, body: { product } })).pipe(delay(300));
      }
      return of(new HttpResponse({ status: 200, body: { product: MockData.MOCK_PRODUCTS, count: MockData.MOCK_PRODUCTS.length } })).pipe(delay(300));
    }
    if (url.includes('/product/wishlist')) {
        return of(new HttpResponse({ status: 200, body: MockData.MOCK_USER })).pipe(delay(300));
    }

    // Order endpoints
    if (url.includes('/order') && method === 'GET') {
        if (url.includes('/list')) {
            return of(new HttpResponse({ status: 200, body: MockData.MOCK_ORDERS })).pipe(delay(400));
        }
        return of(new HttpResponse({ status: 200, body: MockData.MOCK_ORDERS[0] })).pipe(delay(400));
    }
    if (url.includes('/order') && method === 'POST') {
        return of(new HttpResponse({ status: 201, body: { message: "success" } })).pipe(delay(800));
    }

    // Cart endpoints
    if (url.includes('/cart') && method === 'GET') {
        if (url.includes('/list')) {
            return of(new HttpResponse({ status: 200, body: [MockData.MOCK_CART] })).pipe(delay(300));
        }
        return of(new HttpResponse({ status: 200, body: MockData.MOCK_CART })).pipe(delay(300));
    }
    if (url.includes('/cart') && method === 'POST') {
        return of(new HttpResponse({ status: 200, body: MockData.MOCK_CART })).pipe(delay(300));
    }
    if (url.includes('/cart/empty-cart') && method === 'DELETE') {
        return of(new HttpResponse({ status: 200, body: { ...MockData.MOCK_CART, products: [] } })).pipe(delay(300));
    }

    // Default: pass through (though backend will likely fail if not running)
    return next.handle(request);
  }
}
