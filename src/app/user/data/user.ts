export interface User {
    firstName:string,
    lastName?:string,
    email:string,
    mobile:number,
    password?:string,
    confirmPassword?:string,
    address?: string, 
    role?: string,
    token?: string
}

