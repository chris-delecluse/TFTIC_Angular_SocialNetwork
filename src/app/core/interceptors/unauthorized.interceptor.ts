import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from "../services/auth.service";
import { TokenService } from "../services/token.service";

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    excluded: string[] = [
      'auth/local/login',
      'auth/local/register'
    ]

    constructor(
        private _authService: AuthService,
        private _tokenService: TokenService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.excluded.some(url => request.url.includes(url))) {
      return next.handle(request);
    }

    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        this._tokenService.removeToken();
        this._authService.setIsConnected(false);
      }

      return throwError(() => new Error(error.message));
    }));
  }
}
