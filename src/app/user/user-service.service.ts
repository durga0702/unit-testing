import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myBehaviorSubject = new BehaviorSubject<string>('');

  constructor() { }

  public setValue(value: any) {
    this.myBehaviorSubject.next(value);
  }

  public getValue() {
    return this.myBehaviorSubject.asObservable();
  }
}
