import { Injectable } from '@angular/core';
import { HttpChatService } from "../http/http-chat.service";
import { Observable, Subject } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { MessageResponseModel } from "../models/chat/Message-response.model";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _httpChatService: HttpChatService) { }

  getMessages = (to: number): Observable<ApiResponseModel<MessageResponseModel[]>> => {
    return this._httpChatService.getMessages(to);
  }
}
