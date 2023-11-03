import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PeriodicElement {
    id:string,
    name: string;
    email: string;
  }

@Injectable({
  providedIn: 'root'
})

export class ListUserService {
  
  constructor(
    private http:HttpClient,
  ) { }
  public getValue():Observable<any>{
    return this.http.get<PeriodicElement>('https://jsonplaceholder.typicode.com/users');
  }

 
  getSingleValue(data: any) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/users/${data?.id}`
    );
  }

  deleteValue(data: PeriodicElement) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/users/${data.id}`
    );
  }

//   updateValue(post: Post) {
//     return this.http.put(
//       `https://jsonplaceholder.typicode.com/post/${post.id}`,
//       post
//     );
//   }

}