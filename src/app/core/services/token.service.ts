import { Injectable } from '@angular/core';
import { HttpTokenService } from "../http/http-token.service";
import { UserDataModel } from "../models/auth/User-data.model";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _httpTokenService: HttpTokenService) { }

  storeToken = (token: string): void => {
    localStorage.setItem("access-token", token);
  }

  getToken = (): string | null => {
    return localStorage.getItem("access-token")
  }

  removeToken = (): void => {
    localStorage.removeItem("access-token");
  }

  extractUserFromToken = (): UserDataModel | void => {
    const token: string | null = this.getToken();

    if (token) {
      const decoded: UserDataModel = jwtDecode(token);

      return {
        Id: parseInt(decoded.Id.toString()),
        given_name: decoded.given_name,
        family_name: decoded.family_name
      };
    }
  }
}
