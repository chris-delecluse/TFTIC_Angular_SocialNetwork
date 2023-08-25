import { Injectable } from '@angular/core';
import { HttpUserService } from "../http/http-user.service";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { MinimalUserProfileInfoModel } from "../models/user/Minimal-user-profile-info.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpUserService: HttpUserService) { }

  getUserProfileInfo = (): Observable<ApiResponseModel<MinimalUserProfileInfoModel>> => {
    return this._httpUserService.getMinimalUserProfile();
  }
}
