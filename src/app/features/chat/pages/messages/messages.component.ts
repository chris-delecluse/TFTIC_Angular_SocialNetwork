import { Component } from '@angular/core';
import { faMessage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  protected readonly faPaperPlane = faPaperPlane;
  protected readonly faMessage = faMessage;
}
