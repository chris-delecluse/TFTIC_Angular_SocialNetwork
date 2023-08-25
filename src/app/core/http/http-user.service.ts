import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { MinimalUserProfileInfoModel } from "../models/user/Minimal-user-profile-info.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpUserService {

  constructor(private _httpClient: HttpClient) { }

  getMinimalUserProfile = (): Observable<ApiResponseModel<MinimalUserProfileInfoModel>> => {
    return this._httpClient.get<ApiResponseModel<MinimalUserProfileInfoModel>>(`${environment.apiUrl}/user/profile`)
  }
}
