import {Injectable, Input} from '@angular/core';
import {AngularFireDatabase, AngularFireList, SnapshotAction} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable} from "rxjs";
import { AuthService} from "./auth.service";
import * as firebase from 'firebase/app';

import { ChatMessage} from "../models/chatMessage";
import {FirebaseListObservable} from "@angular/fire/database-deprecated";


@Injectable()
export class ChatService {
  user: firebase.User;
  chatMessages: AngularFireList<any>;
  chatMessage: Observable<SnapshotAction<any>[]>;
  // userName: Observable<string>;
  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
  }
  sendMessage(msg: string , zoneKey : string ) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessage = this.getMessages(zoneKey);
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      email: email });
  }

  getMessages(zoneKey)
  {
    this.chatMessages = this.db.list(`Zones/${zoneKey}/discussions`);
    return this.chatMessages.snapshotChanges();
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() ;

    return (date + ' ' + time);
  }
}
