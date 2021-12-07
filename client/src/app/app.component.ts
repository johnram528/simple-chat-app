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
  userList = [
    {
      id: 1,
      name: 'USER1',
    },
    {
      id: 2,
      name: 'USER2',
    }
  ];
  
  ngOnInit() {
    //Sets the first two client instances to users 1 and 2
    const indexFromStorage = sessionStorage.getItem('simple-chat-app-index');
    if (indexFromStorage) {
      this.userIndex = 2
      this.user = this.userList[1];
      this.contact = this.userList[0]
      sessionStorage.setItem('simple-chat-app-index', this.userIndex.toString());
    } else {
      this.user = this.userList[0];
      this.contact = this.userList[1]
      sessionStorage.setItem('simple-chat-app-index', this.userIndex.toString());
    }
    console.log(this.user)
  };

  toggleContactOnUserChange() {
    console.log(this.user)
    if(this.user.id === 1) {
      this.contact = this.userList[1];
    } else {
      this.contact = this.userList[0];
    }
  }
}
