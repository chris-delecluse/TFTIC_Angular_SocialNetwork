import { Component, Input } from '@angular/core';
import { MessageResponseModel } from "../../../../core/models/chat/Message-response.model";

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss']
})
export class DisplayMessageComponent {
  @Input()
  currentUserId!: number;

  @Input()
  message!: MessageResponseModel;
}
