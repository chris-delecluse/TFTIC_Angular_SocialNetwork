import { Injectable } from '@angular/core';
import { HttpFriendListService } from "../http/http-friend-list.service";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { FriendModel } from "../models/friend/Friend.model";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private _httpFriendListService: HttpFriendListService) { }

  getFriendList = (): Observable<ApiResponseModel<FriendModel[]>> => {
    return this._httpFriendListService.getFriendList();
  }
}
