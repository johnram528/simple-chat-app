import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message.interface';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  @Input() messages: Message[] = [];
  @Output() sendMessageIntent = new EventEmitter();
  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  send() {
    if(this.newMessage.length) {
      this.sendMessageIntent.emit(this.newMessage);
      this.newMessage = '';
    }
  }

}
