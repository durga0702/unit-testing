import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private http:HttpClient,
  ) { }
//   public getValue():Observable<any>{
//     return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
//   }
  public getAsyncValue():Observable<any>{
    return this.http.get<any>('https://ipapi.co/json/');
  }

}
