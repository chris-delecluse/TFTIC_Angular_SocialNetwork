import { Injectable } from '@angular/core';
import { HttpAuthService } from "../http/http-auth.service";
import { LoginFormModel } from "../models/auth/Login-form.model";
import { LoginResponseModel } from "../models/auth/Login-response.model";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { RegisterFormModel } from "../models/auth/Register-form.model";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isConnected: boolean = false;

  constructor(
    private _httpAuthService: HttpAuthService,
    private _tokenService: TokenService
  ) { }

  login = (form: LoginFormModel): Observable<ApiResponseModel<LoginResponseModel>> => {
    return this._httpAuthService.postLogin(form);
  }

  register = (form: RegisterFormModel): Observable<ApiResponseModel<string>> => {
    return this._httpAuthService.postRegister(form);
  }

  isConnected = (): boolean => {
    if (this._tokenService.getToken())
      this._isConnected = true;

    return this._isConnected;
  }

  setIsConnected(status: boolean): void {
    this._isConnected = status;
  }
}
