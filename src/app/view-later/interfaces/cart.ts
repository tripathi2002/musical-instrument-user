import { Product } from "src/app/mobile-store/interfaces/product";

export interface Cart {
    _id:any,
    products: [{
        product:Product
        count:number,
        color:string,
        price:number,
        _id:any
    }],
    cartTotal:number,
    orderby:any,    
}


