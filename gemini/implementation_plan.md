# Implementation Plan: Mock Data Layer

The goal is to allow the application to run without a backend by providing dummy data. Instead of modifying every service to return hardcoded values, we will implement an **Angular HTTP Interceptor**. This keeps the service logic clean and makes it easy to switch back to a real backend later.

## User Review Required

> [!IMPORTANT]
> The application will currently "simulate" all API calls. Real network requests will not be made to `127.0.0.1:1000`.

## Proposed Changes

### Core Infrastructure

#### [NEW] [mock-data.ts](file:///d:/2026/project/ecommerce/musical-instrument-user/src/app/data/mock-data.ts)
- Centralize all dummy data (products, users, orders, cart) into one file.
- Use data extracted from `DATA-BASE/data.txt` and existing "Copy" methods.

#### [NEW] [mock.interceptor.ts](file:///d:/2026/project/ecommerce/musical-instrument-user/src/app/data/services/mock.interceptor.ts)
- Create an `HttpInterceptor` that checks the request URL.
- If the URL matches an API endpoint, return an `HttpResponse` containing the corresponding data from `mock-data.ts`.
- Add a small delay to simulate network latency.

### Configuration

#### [MODIFY] [app.module.ts](file:///d:/2026/project/ecommerce/musical-instrument-user/src/app/app.module.ts)
- Register the `MockInterceptor` in the `providers` array.
- Import `HttpClientModule` (it was missing from the root module in previous checks, although used in sub-modules).

### Clean up

#### [MODIFY] Services
- We will eventually remove the `...Copy()` methods from `PhoneService`, `OrderService`, etc., as they will no longer be needed. The standard `all()`, `getProduct()`, etc., will work automatically via the interceptor.

## Verification Plan

### Manual Verification
- Run the app using `npm start`.
- Navigate through "Mobile Store", "Orders", and "Cart".
- Verify that data is displayed without any backend errors in the console.
- Test "Log In" and "Log Out" functionality using mock credentials (e.g., `amtri2030@gmail.com` / `admin@123`).
