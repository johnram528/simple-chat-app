import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './views/chat/chat.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatInputComponent,
    ChatScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
