export const MOCK_USER = {
  "_id": "653b8d2b527bf1aaa594ca39",
  "firstName": "Vibhu",
  "lastName": "Tripathi",
  "email": "amtri2030@gmail.com",
  "mobile": "7753854479",
  "role": "admin",
  "isBlocked": false,
  "cart": [],
  "address": [],
  "wishlist": [],
  "createdAt": "2023-10-27T10:12:59.874Z",
  "updatedAt": "2023-10-27T10:12:59.874Z",
  "token": "mock-jwt-token-for-testing"
};

export const MOCK_PRODUCTS = [
  {
    "_id": "65391e01178feffa15c69818",
    "title": "iPhone 15 Plus",
    "slug": "iphone-15-plus",
    "description": "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
    "price": 500,
    "category": {
      "_id": "653919f7178feffa15c6980c",
      "title": "smartphones"
    },
    "quantity": 120,
    "images": [
      { "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698242686/bn9krjg5xishqdwsye0g.jpg" },
      { "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698242688/fpn52vgfcs6ny01ite7l.jpg" }
    ],
    "color": "Black",
    "brand": {
      "_id": "65391b8d178feffa15c69810",
      "title": "Apple"
    },
    "totalrating": 4.5,
    "ratings": []
  },
  {
    "_id": "653b9789a5f5655db2502879",
    "title": "Apple iPhone 13",
    "slug": "apple-iphone-13",
    "description": "15 cm (6.1-inch) Super Retina XDR display, A15 Bionic chip for lightning-fast performance",
    "price": 50999,
    "category": {
      "_id": "653b8f91a1f05e75d40e08cc",
      "title": "smartphones"
    },
    "quantity": 10,
    "images": [
      { "url": "https://res.cloudinary.com/dg7hngysn/image/upload/v1698404510/bdrcwhpfnub5liy9yu38.jpg" }
    ],
    "color": "Blue",
    "brand": {
      "_id": "653b8fe6a1f05e75d40e08d0",
      "title": "Apple"
    },
    "totalrating": 0,
    "ratings": []
  }
];

export const MOCK_ORDERS = [
  {
    "_id": "653b9e315e73527749896fd6",
    "products": [
      {
        "product": "653b9789a5f5655db2502879",
        "count": 3,
        "color": "Black",
        "_id": "653b9d6d5e73527749896fc9"
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
    "createdAt": "2023-10-27T11:25:37.709Z"
  }
];

export const MOCK_CART = {
  "_id": "65392ab64f6dd89aad379cf6",
  "products": [
    {
      "product": MOCK_PRODUCTS[0],
      "count": 1,
      "color": "Black",
      "price": 500,
      "_id": "65392ab64f6dd89aad379cf7"
    }
  ],
  "cartTotal": 500,
  "orderby": "653b8d2b527bf1aaa594ca39"
};
