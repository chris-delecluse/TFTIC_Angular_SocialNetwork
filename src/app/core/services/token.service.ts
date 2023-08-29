import { Injectable } from '@angular/core';
import { HttpTokenService } from "../http/http-token.service";

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
}
