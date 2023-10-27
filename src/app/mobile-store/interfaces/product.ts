export interface Product {
    _id:any,
    title:string,
    description:string,
    price:number,
    category: Category,
    quantity:number,
    images:Images[],
    color:string,
    brand:Brand,
    totalrating:number,
    ratings:[]
}


export interface Category {
    _id:any,
    title:string,
}

export interface Images {
    url:string
}

export interface Brand {
    _id:any,
    title:string,
}