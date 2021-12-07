import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { Message } from '../models/message.interface';


@Injectable({
  providedIn: 'root',
})
export class ChatService {

  message$: BehaviorSubject<Message> = new BehaviorSubject({
    body: '', 
    sender: {id: 0, name: ''}, 
    recipient: {id: 0, name: ''}, 
  });
  constructor() {}

  socket = io('http://localhost:3000');

  send(message: Message) {
    this.socket.emit('message', message);
  }

  getMessage() {
    this.socket.on('message', (message: Message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };
}