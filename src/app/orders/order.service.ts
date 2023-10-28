import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BASE_URL } from "../user/data/constants.injectables";


@Injectable()
export class OrderService {

    constructor(
        public http: HttpClient,
        @Inject(BASE_URL) private baseUrl,
    ){
    }

    getUser(id){
      let headers:HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });

      return this.http.get(`${this.baseUrl}/user/${id}`, { headers})
        .pipe(res=>res);
    }

    getUserCopy(id){
      return {
        "firstName": "Vibhu",
        "lastName": "Tripathi",
        "email": "amtri2030@gmail.com",
        "mobile": "7753854479",
        "password": "$2b$10$KoXT7TubJwdx6UdVvRhuTOiGO0hHSiGR9hvhC4Gmqn4yMT2jK9/IW",
        "role": "admin",
        "isBlocked": false,
        "cart": [],
        "address": [],
        "wishlist": [],
        "_id": "653b8d2b527bf1aaa594ca39",
        "createdAt": "2023-10-27T10:12:59.874Z",
        "updatedAt": "2023-10-27T10:12:59.874Z",
        "__v": 0
      }
    }

    getOrder(id){
      let headers:HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
      console.log(id);
      return this.http.get(`${this.baseUrl}/order/${id}`, { headers } )
    }

    getOrderCopy(id){
      return {
        "_id": "653b9e315e73527749896fd6",
        "products": [
          {
            "product": "653b9789a5f5655db2502879",
            "count": 3,
            "color": "Black",
            "_id": "653b9d6d5e73527749896fc9"
          },
          {
            "product": "653b9737a5f5655db2502872",
            "count": 2,
            "color": "green",
            "_id": "653b9d6d5e73527749896fca"
          }
        ],
        "paymentIntent": {
          "id": "n85ge4islo8j1kpw",
          "method": "COD",
          "amount": 154097,
          "status": "Cash on Delivery",
          "created": 1698405937702,
          "currency": "rs"
        },
        "orderStatus": "Cash on Delivery",
        "orderby": "653b8d2b527bf1aaa594ca39",
        "createdAt": "2023-10-27T11:25:37.709Z",
        "updatedAt": "2023-10-27T11:25:37.709Z",
        "__v": 0
      }
    }

    getProduct(id:any){
      return this.http.get(`${this.baseUrl}/product/${id}`)
        .pipe(res=>res);
    }

    getProductCopy(id:any){
      
        return {
            "product": {
              "_id": "653b9789a5f5655db2502879",
              "title": "Apple iPhone 13",
              "slug": "apple-iphone-13",
              "description": "15 cm (6.1-inch) Super Retina XDR display, Cinematic mode adds shallow depth of field and shifts focus automatically in your videos, Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording, 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording, A15 Bionic chip for lightning-fast performance",
              "price": 50999,
              "category": {
                "_id": "653b8f91a1f05e75d40e08cc",
                "title": "smartphones",
                "createdAt": "2023-10-27T10:23:13.990Z",
                "updatedAt": "2023-10-27T10:23:13.990Z",
                "__v": 0
              },
              "quantity": 10,
              "sold": 0,
              "images": [
                {
                  "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698404510/bdrcwhpfnub5liy9yu38.jpg"
                },
                {
                  "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698404511/ehzkc1awgjnmsug4pdgv.jpg"
                },
                {
                  "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698404514/rzuqwqqljqkg9rqcyts2.jpg"
                },
                {
                  "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698404516/xwlpc5bvw3blqqcuj5xv.jpg"
                },
                {
                  "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698404518/zic4no4cm0mnqivkxcjo.jpg"
                }
              ],
              "color": "Black",
              "brand": {
                "_id": "653b8fe6a1f05e75d40e08d0",
                "title": "Apple",
                "createdAt": "2023-10-27T10:24:38.596Z",
                "updatedAt": "2023-10-27T10:24:38.596Z",
                "__v": 0
              },
              "totalrating": 0,
              "ratings": [],
              "createdAt": "2023-10-27T10:57:13.720Z",
              "updatedAt": "2023-10-27T11:01:59.299Z",
              "__v": 0
            }
          }
    }

    getAllOrder(){
      let headers:HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
      return this.http.get(`${this.baseUrl}/order/list`, { headers})
        .pipe(res=>res);
    }

    getAllOrderCopy(){
        return [
            {
              "_id": "653b9e315e73527749896fd6",
              "products": [
                {
                  "product": "653b9789a5f5655db2502879",
                  "count": 3,
                  "color": "Black",
                  "_id": "653b9d6d5e73527749896fc9"
                },
                {
                  "product": "653b9737a5f5655db2502872",
                  "count": 2,
                  "color": "green",
                  "_id": "653b9d6d5e73527749896fca"
                }
              ],
              "paymentIntent": {
                "id": "n85ge4islo8j1kpw",
                "method": "COD",
                "amount": 154097,
                "status": "Cash on Delivery",
                "created": 1698405937702,
                "currency": "rs"
              },
              "orderStatus": "Cash on Delivery",
              "orderby": "653b8d2b527bf1aaa594ca39",
              "createdAt": "2023-10-27T11:25:37.709Z",
              "updatedAt": "2023-10-27T11:25:37.709Z",
              "__v": 0
            },
            {
                "_id": "653b9e315e73527749896fd6",
                "products": [
                  {
                    "product": "653b9789a5f5655db2502879",
                    "count": 3,
                    "color": "Black",
                    "_id": "653b9d6d5e73527749896fc9"
                  },
                  {
                    "product": "653b9737a5f5655db2502872",
                    "count": 2,
                    "color": "green",
                    "_id": "653b9d6d5e73527749896fca"
                  }
                ],
                "paymentIntent": {
                  "id": "n85ge4islo8j1kpw",
                  "method": "COD",
                  "amount": 154097,
                  "status": "Cash on Delivery",
                  "created": 1698405937702,
                  "currency": "rs"
                },
                "orderStatus": "Cash on Delivery",
                "orderby": "653b8d2b527bf1aaa594ca39",
                "createdAt": "2023-10-27T11:25:37.709Z",
                "updatedAt": "2023-10-27T11:25:37.709Z",
                "__v": 0
              },
              {
                "_id": "653b9e315e73527749896fd6",
                "products": [
                  {
                    "product": "653b9789a5f5655db2502879",
                    "count": 3,
                    "color": "Black",
                    "_id": "653b9d6d5e73527749896fc9"
                  },
                  {
                    "product": "653b9737a5f5655db2502872",
                    "count": 2,
                    "color": "green",
                    "_id": "653b9d6d5e73527749896fca"
                  }
                ],
                "paymentIntent": {
                  "id": "n85ge4islo8j1kpw",
                  "method": "COD",
                  "amount": 154097,
                  "status": "Cash on Delivery",
                  "created": 1698405937702,
                  "currency": "rs"
                },
                "orderStatus": "Cash on Delivery",
                "orderby": "653b8d2b527bf1aaa594ca39",
                "createdAt": "2023-10-27T11:25:37.709Z",
                "updatedAt": "2023-10-27T11:25:37.709Z",
                "__v": 0
              },
          ];
    }
}