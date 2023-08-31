import { Injectable } from '@angular/core';
import { HttpUserService } from "../http/http-user.service";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { BasicUserProfileModel } from "../models/user/Basic-user-profile.model";
import { FullPrivateProfileModel } from "../models/user/Full-private-profile.model";
import { FullPublicProfileModel } from "../models/user/Full-public-profile.model";
import { EditUserProfileModel } from "../models/user/Edit-user-profile.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpUserService: HttpUserService) { }

  getBasicProfiles = (): Observable<ApiResponseModel<BasicUserProfileModel[]>> => {
    return this._httpUserService.getBasicProfiles();
  }

  getBasicProfile = (): Observable<ApiResponseModel<BasicUserProfileModel>> => {
    return this._httpUserService.getPrivateBasicProfile();
  }

  getBasicProfileById = (id: number): Observable<ApiResponseModel<BasicUserProfileModel>> => {
    return this._httpUserService.getPublicBasicProfileById(id);
  }

  getFullProfile = (): Observable<ApiResponseModel<FullPrivateProfileModel>> => {
    return this._httpUserService.getPrivateFullProfile();
  }

  getFullPublicProfileById = (id: number): Observable<ApiResponseModel<FullPublicProfileModel>> => {
    return this._httpUserService.getPublicFullProfileById(id);
  }

  patchUserProfile = (profile: EditUserProfileModel) : Observable<ApiResponseModel<string>> => {
    return this._httpUserService.patchUserProfile(profile);
  }
}
