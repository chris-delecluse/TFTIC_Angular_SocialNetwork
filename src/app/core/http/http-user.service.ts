import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { BasicUserProfileModel } from "../models/user/Basic-user-profile.model";
import { environment } from "../../../environments/environment";
import { FullPrivateProfileModel } from "../models/user/Full-private-profile.model";
import { FullPublicProfileModel } from "../models/user/Full-public-profile.model";
import { EditUserProfileModel } from "../models/user/Edit-user-profile.model";

@Injectable({
  providedIn: 'root'
})
export class HttpUserService {

  constructor(private _httpClient: HttpClient) { }

  getBasicProfiles = (): Observable<ApiResponseModel<BasicUserProfileModel[]>> => {
    return this._httpClient.get<ApiResponseModel<BasicUserProfileModel[]>>(`${environment.apiUrl}/user/profiles`);
  }

  getPrivateBasicProfile = (): Observable<ApiResponseModel<BasicUserProfileModel>> => {
    return this._httpClient.get<ApiResponseModel<BasicUserProfileModel>>(`${environment.apiUrl}/user/profile`)
  }

  getPublicBasicProfileById = (id: number): Observable<ApiResponseModel<BasicUserProfileModel>> => {
    return this._httpClient.get<ApiResponseModel<BasicUserProfileModel>>(`${environment.apiUrl}/user/${id}/profile`);
  }

  getPrivateFullProfile = (): Observable<ApiResponseModel<FullPrivateProfileModel>> => {
    return this._httpClient.get<ApiResponseModel<FullPrivateProfileModel>>(`${environment.apiUrl}/user/profile/details`);
  }

  getPublicFullProfileById = (id: number): Observable<ApiResponseModel<FullPublicProfileModel>> => {
    return this._httpClient.get<ApiResponseModel<FullPublicProfileModel>>(`${environment.apiUrl}/user/profile/${id}/details`);
  }

  patchUserProfile = (profile: EditUserProfileModel): Observable<ApiResponseModel<string>> => {
    return this._httpClient.patch<ApiResponseModel<string>>(`${environment.apiUrl}/user`, profile);
  }
}
