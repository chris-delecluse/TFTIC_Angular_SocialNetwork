import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { MessageFormModel } from "../models/chat/Message-form.model";
import { environment } from "../../../environments/environment";
import { MessageResponseModel } from "../models/chat/Message-response.model";

@Injectable({
  providedIn: 'root'
})
export class HttpChatService {

  constructor(private _httpClient: HttpClient) { }

  getMessages = (to: number): Observable<ApiResponseModel<MessageResponseModel[]>> => {
    return this._httpClient.post<ApiResponseModel<MessageResponseModel[]>>(`${environment.apiUrl}/chat`, { to: to })
  }
}
