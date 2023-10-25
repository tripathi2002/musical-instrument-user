import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BASE_URL } from 'src/app/user/data/constants.injectables';

@Injectable()
export class PhoneService {

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http:HttpClient
  ) { 

  }
  all(){
    return this.http.get(`${this.baseUrl}/product`)
      .pipe(
        map(res=>res)
      )
  }

  getProduct(id:any){
    return this.http.get(`${this.baseUrl}/product/${id}`)
      .pipe(
        map(res=>res)
      )
  }


}
