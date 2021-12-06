import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: string[] = [];

  constructor( private chatService: ChatService ) {}

  ngOnInit(): void {
    this.chatService.getMessage().subscribe((message: string) => {
      this.messages.push(message);
    })
  }

  handleSendMessageIntent(message:string) {
    this.chatService.send(message);
  }

}
