import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Socket, io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})

export class SocketService {
    public socket:Socket;
   public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    // private http:HttpClient,
  ) {
    this.socket = io('http://localhost:3000').connect()
     console.log('socket page')
    }
//   socket = io('http://localhost:3000');

  public sendMessage(message: any) {
    console.log('sendMessage: ', message)
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };

}