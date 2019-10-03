import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from "../../shared/chat.service";

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  message: string;
  @Input() zoneKey : string ;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    console.log(this.zoneKey);
  }

  send() {
    this.chat.sendMessage(this.message , this.zoneKey );
    this.message = '';
  }

  handleSubmit(event) {
    if (event.which === 13) {
      this.send();
    }
  }

}
