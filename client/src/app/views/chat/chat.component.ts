import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.interface';
import { User } from 'src/app/models/user.interface';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  @Input() user!: User;
  @Input() contact!: User;

  constructor( private chatService: ChatService ) {}

  ngOnInit(): void {
    this.chatService.getMessage().subscribe((message: Message) => {
      console.log('MSG INCOMING', message);
      this.messages.push(message);
    })
  }

  handleSendMessageIntent(message:string): void {
    this.chatService.send(this._mapToMsgObject(message, this.user, this.contact));
    console.log(this.user);
    console.log(this.contact)
  }

  private _mapToMsgObject(message: string, sender: User, recipient: User): Message {
    return {
      body: message,
      sender: sender,
      recipient: recipient
    }
  }

}
