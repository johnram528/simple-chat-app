import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  userIndex: number = 1;
  user!: User;
  contact!: User;
  
  ngOnInit() {
    const userList = [
      {
        id: 1,
        name: 'USER1',
      },
      {
        id: 2,
        name: 'USER2',
      }
    ];

    const indexFromStorage = sessionStorage.getItem('simple-chat-app-index');
    if (indexFromStorage) {
      this.userIndex = 2
      this.user = userList[1];
      this.contact = userList[0]
      sessionStorage.setItem('simple-chat-app-index', this.userIndex.toString());
    } else {
      this.user = userList[0];
      this.contact = userList[1]
      sessionStorage.setItem('simple-chat-app-index', this.userIndex.toString());
    }
  };

}
