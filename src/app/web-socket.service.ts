import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as io from 'socket.io-client';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
    socket: any;
    readonly uri: string = "ws://localhost:3000"

    constructor() {
      this.socket = io(this.uri);
    }

    // Listen is a userdefined function returning observable.
    listen(eventName: string){

      return new Observable((subscriber) =>{
        this.socket.on(eventName, (data: string) => {
          subscriber.next(data);
        })
      });

    }

    emit(eventName:string, data: any){
      this.socket.emit(eventName, data);
    }
}