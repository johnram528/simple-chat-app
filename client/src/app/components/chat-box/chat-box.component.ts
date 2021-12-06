import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  @Input() messages: string[] = [];
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
