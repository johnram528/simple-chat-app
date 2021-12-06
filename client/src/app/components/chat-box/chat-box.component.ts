import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  messages: string[] = ["hi", "hello"];
  newMessage: string = '';
  @Output() sendMessageIntent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  send() {
    this.sendMessageIntent.emit();
  }

}
