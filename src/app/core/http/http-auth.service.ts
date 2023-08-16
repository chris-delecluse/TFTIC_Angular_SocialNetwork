import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { LoginFormModel } from "../models/auth/Login-form.model";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { LoginResponseModel } from "../models/auth/Login-response.model";
import { RegisterFormModel } from "../models/auth/Register-form.model";

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {

  constructor(private _httpClient: HttpClient) { }

  postLogin = (form: LoginFormModel): Observable<ApiResponseModel<LoginResponseModel>> => {
    return this._httpClient.post<ApiResponseModel<LoginResponseModel>>(`${environment.apiUrl}/auth/local/login`, form);
  }

  postRegister = (form: RegisterFormModel): Observable<ApiResponseModel<string>> => {
    return this._httpClient.post<ApiResponseModel<string>>(`${environment.apiUrl}/auth/local/register`, form);
  }
}
