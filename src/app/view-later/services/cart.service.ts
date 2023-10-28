import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs';
import { BASE_URL } from 'src/app/user/data/constants.injectables';


@Injectable()
export class CartService {

  constructor( private http:HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
    ) { }

  createOrder(){
    let headers:HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    let data = {
      COD:true,
      couponApplied:false
    };

    return this.http.post(`${this.baseUrl}/order`, data, { headers })
      .pipe(map(res=>res));
  }

  getOrders(){
    let headers:HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    console.log("_________")
    return this.http.get(`${this.baseUrl}/order`, { headers })
      .pipe(map(res=>res));
    // return this.http.get(`${this.baseUrl}/order`, { headers })
    //   .pipe(map(res=>res));
  }

  // clear the cart 
  emptyCart(){
    let headers:HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.delete(`${this.baseUrl}/cart/empty-cart`, { headers })
      .pipe(map(res=>res));
  }

  getCart(){
    let headers:HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(`${this.baseUrl}/cart`, { headers })
      .pipe(res=>res);
  }

  getAllCart(){
    let headers:HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(`${this.baseUrl}/cart/list`, { headers })
      .pipe(res=>res);
  }

  getOrdersCopy(){
    return {
      "_id": "65392eaa318171b8ef89b844",
      "products": [
        {
          "product": "65391e01178feffa15c69818",
          "count": 3,
          "color": "Black",
          "_id": "65392e83318171b8ef89b83e"
        }
      ],
      "paymentIntent": {
        "id": "n85ge2gclo5w0at5",
        "method": "COD",
        "amount": 1600,
        "status": "Cash on Delivery",
        "created": 1698246314723,
        "currency": "rs"
      },
      "orderStatus": "Cash on Delivery",
      "orderby": "653915eae4cbe15043028d4a",
      "createdAt": "2023-10-25T15:05:14.725Z",
      "updatedAt": "2023-10-25T15:05:14.725Z",
      "__v": 0
    }
  }

  
  getCartCopy(){
    return {
      "_id": "65392ab64f6dd89aad379cf6",
      "products": [
        {
          "product": {
            "_id": "65391e01178feffa15c69818",
            "title": "iPhone 15 Plus",
            "slug": "iphone-15-plus",
            "description": "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
            "price": 500,
            "category": "653919f7178feffa15c6980c",
            "quantity": 120,
            "sold": 0,
            "images": [
              {
                "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698242686/bn9krjg5xishqdwsye0g.jpg"
              },
              {
                "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698242688/fpn52vgfcs6ny01ite7l.jpg"
              },
              {
                "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698242689/isgrdyxrdqevewkdh5io.jpg"
              },
              {
                "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698242691/qmqmaqg7g2x7priemkpc.jpg"
              },
              {
                "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698242693/acfvjj16wvbaosmof2zs.jpg"
              }
            ],
            "color": "Black",
            "brand": "65391b8d178feffa15c69810",
            "totalrating": 0,
            "ratings": [],
            "createdAt": "2023-10-25T13:54:09.450Z",
            "updatedAt": "2023-10-25T14:04:53.002Z",
            "__v": 0
          },
          "count": 3,
          "color": "Black",
          "price": 500,
          "_id": "65392ab64f6dd89aad379cf7"
        }
      ],
      "cartTotal": 1500,
      "orderby": "653915eae4cbe15043028d4a",
      "createdAt": "2023-10-25T14:48:22.652Z",
      "updatedAt": "2023-10-25T14:48:22.652Z",
      "__v": 0
    }
  }

}
