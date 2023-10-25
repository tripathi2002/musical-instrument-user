import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BASE_URL } from 'src/app/user/data/constants.injectables';

@Injectable()
export class CartService {

    constructor(
        @Inject(BASE_URL) private baseUrl: string,
        private http: HttpClient
    ) {

    }

    add(cart:any){
        let headers: HttpHeaders = new HttpHeaders({
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        });

        return this.http.post(`${this.baseUrl}/cart`, cart, { headers })
            .pipe(map(res =>res)
        );
    }

}
