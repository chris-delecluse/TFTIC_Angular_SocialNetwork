import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { FriendModel } from "../models/friend/Friend.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpFriendListService {

  constructor(private _httpClient: HttpClient) { }

  getFriendList = (): Observable<ApiResponseModel<FriendModel[]>> => {
    return this._httpClient.get<ApiResponseModel<FriendModel[]>>(`${environment.apiUrl}/friend`);
  }

  postFriendRequest = (userId: number): Observable<ApiResponseModel<string>> => {
    return this._httpClient.post<ApiResponseModel<string>>(`${environment.apiUrl}/friend`, {userId: userId});
  }

  removeFriendOrCancelRequest = (userId: number): Observable<ApiResponseModel<string>> => {
    return this._httpClient.delete<ApiResponseModel<string>>(`${environment.apiUrl}/friend/${userId}`)
  }
}
