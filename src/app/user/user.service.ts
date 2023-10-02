import { Injectable, Inject } from '@angular/core';
import { BASE_URL } from './data/constants.injectables';

import { HttpClient } from "@angular/common/http";
import { User } from './data/user';
import { map } from 'rxjs';

@Injectable(
  // {providedIn: 'root' }
)
export class UserService {

  constructor(private http: HttpClient, @Inject(BASE_URL) private BASE_URL: string) { }

  createUser(data: {}) {
    // let ndata = JSON.stringify(data);
    // console.log(ndata);
    return this.http.post("http://127.0.0.1:1000/v3/api/user/register", data)
      .pipe(
        map(res => res),
      );
  }
  LoginUser(data: {}) {
    // let ndata = JSON.stringify(data);
    // console.log(ndata);
    return this.http.post("http://127.0.0.1:1000/v3/api/user/login", data)
      .pipe(
        map(res => res),
      );
  }
}