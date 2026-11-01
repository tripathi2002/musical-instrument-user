# Musical Instrument Store – Storefront

Customer-facing Angular storefront for the musical instrument e-commerce store. Shoppers browse products, filter them, view details, and manage a cart, wishlist, view-later list and orders.

## Features

- Product listing with filter sidebar and product detail page
- Cart, wishlist, view-later and orders pages
- Buy and order confirmation flow
- User login and profile pages
- Multi-part header (top, middle, bottom navigation)
- Mock HTTP interceptor with sample data, so the UI runs without a backend

## Tech stack

Angular 16 · TypeScript · RxJS · SCSS · Angular CDK

## Project structure

```
src/app/header/              # header-top / middle / bottom
src/app/mobile-store/        # product list, filters, details, buy, confirm, cart service
src/app/data/                # shared services, mock data, mock.interceptor
src/app/body/
```

## Getting started

```bash
npm install
npm start          # http://localhost:4200
npm run build
```

The real API base URL is `http://127.0.0.1:1000/v3/api`; requests are served by `MockInterceptor` when it is enabled in `app.module.ts`.

## Environment variables

None.
## Screenshots

_Screenshots coming soon._

## License

No license file has been added to this repository yet.
