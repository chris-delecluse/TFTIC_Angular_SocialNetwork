import { Injectable } from '@angular/core';
import { HttpFriendService } from "../http/http-friend.service";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { FriendModel } from "../models/friend/Friend.model";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private _httpFriendService: HttpFriendService) { }

  getFriendList = (): Observable<ApiResponseModel<FriendModel[]>> => {
    return this._httpFriendService.getFriendList();
  }

  postFriendRequest = (userProfileId: number): Observable<ApiResponseModel<string>> => {
    return this._httpFriendService.postFriendRequest(userProfileId);
  }

  removeOrCancelFriendRequest = (userId : number) : Observable<ApiResponseModel<string>> => {
    return this._httpFriendService.removeOrCancelFriendRequest(userId);
  }

  updateRequestFriendStatus = (userId: number, isAccepted: boolean) : Observable<ApiResponseModel<string>> => {
    return this._httpFriendService.updateRequestFriendStatus(userId, isAccepted);
  }
}
