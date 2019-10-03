import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ChatService} from "../../shared/chat.service";
import {ChatMessage} from "../../models/chatMessage";
import {SnapshotAction} from "@angular/fire/database";
import {Observable} from "rxjs";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: any[];
  @Input() zoneKey : string ;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
  this.chatService.getMessages(this.zoneKey).subscribe(
      list=>{
        this.feed = list.map(item => {
          return {
            $key : item.key,
              ...item.payload.val()
          };
        });
      }
    );
  }

  ngOnChanges() {
    this.chatService.getMessages(this.zoneKey).subscribe(
      list=>{
        this.feed = list.map(item => {
          return {
            $key : item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }

}

