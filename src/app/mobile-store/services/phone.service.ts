import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BASE_URL } from 'src/app/user/data/constants.injectables';

@Injectable()
export class PhoneService {

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient
  ) {

  }

  addToWishlist(id: any) {
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put(`${this.baseUrl}/product/wishlist`, { prodId: id }, { headers })
      .pipe(res=>res);
  }

  addToCart(data){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.post(`${this.baseUrl}/cart`, data, { headers })
      .pipe(res=>res);
  }

  // get all products
  all(){
    return this.http.get(`${this.baseUrl}/product`)
      .pipe(
        map(res=>res)
      )
  }

  // get a product
  getProduct(id: any) {
    return this.http.get(`${this.baseUrl}/product/${id}`)
      .pipe(
        map(res => res)
      )
  }

  // get a product
  getProductCopy(id: any) {
    return {
      "_id": "65391e01178feffa15c69818",
      "title": "iPhone 15 Plus",
      "slug": "iphone-15-plus",
      "description": "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
      "price": 500,
      "category": {
        "_id": "653919f7178feffa15c6980c",
        "title": "smartphones",
        "createdAt": "2023-10-25T13:36:55.889Z",
        "updatedAt": "2023-10-25T13:36:55.889Z",
        "__v": 0
      },
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
      "brand": {
        "_id": "65391b8d178feffa15c69810",
        "title": "Apple",
        "createdAt": "2023-10-25T13:43:41.896Z",
        "updatedAt": "2023-10-25T13:43:41.896Z",
        "__v": 0
      },
      "totalrating": 0,
      "ratings": [],
      "createdAt": "2023-10-25T13:54:09.450Z",
      "updatedAt": "2023-10-25T14:04:53.002Z",
      "__v": 0
    }
  }

  // get all products
  allCopy() {
    return {
      "count": 1,
      "product": [
        {
          "_id": "65391e01178feffa15c69818",
          "title": "iPhone 15 Plus",
          "slug": "iphone-15-plus",
          "description": "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
          "price": 500,
          "category": {
            "_id": "653919f7178feffa15c6980c",
            "title": "smartphones",
            "createdAt": "2023-10-25T13:36:55.889Z",
            "updatedAt": "2023-10-25T13:36:55.889Z",
            "__v": 0
          },
          "quantity": 120,
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
          "brand": {
            "_id": "65391b8d178feffa15c69810",
            "title": "Apple",
            "createdAt": "2023-10-25T13:43:41.896Z",
            "updatedAt": "2023-10-25T13:43:41.896Z",
            "__v": 0
          },
          "totalrating": 0,
          "ratings": [],
          "createdAt": "2023-10-25T13:54:09.450Z"
        }
      ]
    }
  }

}
