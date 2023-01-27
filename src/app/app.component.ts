import { Component, OnInit } from '@angular/core';
import { Socket } from 'socket.io-client/build/esm/socket';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'chat-application';
  // id: string = "";
  // username:string = "";
  // reciever:string = "";
  // constructor(private webSocketService: WebSocketService){}
  
  // ngOnInit(){
  //   this.webSocketService.listen('firstEmit').subscribe((data: any) => {
  //     this.id = data;
  //   })
  //   this.webSocketService.listen('acknowledgement').subscribe((data: any) => {
  //     console.log(data);
  //   })

  //   this.webSocketService.listen('messageReceived').subscribe((data: any) => {
  //     console.log(data);
  //   })
  //   if (!window.sessionStorage.getItem('username')){
  //     alert("PLease login before starting Chat.");
  //   }
  // }

  // saveUserName(text: string){
  //   this.webSocketService.emit('saveUsers', {username: text, id: this.id});
  // }

  // saveReceiver(text: string){
  //   this.reciever = text;
  //     }

  // sendMessage(text: string){
  //   console.log('This is your id', this.id)
  //   this.webSocketService.emit('sendMessage', {sender:this.id, receiver: this.reciever, message: text});
  // }
  



}
