import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/auth.service";
import {ChatMessage} from "../../../models/chatMessage";
import {AngularFireAction, DatabaseSnapshot} from "@angular/fire/database";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // AngularFireAction<DatabaseSnapshot<any>>
  @Input() chatMessage: ChatMessage;
  userEmail: string;
  // userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;


  constructor(private authService: AuthService) {
  }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    console.log(chatMessage);
  }
}
