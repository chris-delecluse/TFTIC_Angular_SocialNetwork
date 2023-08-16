import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from "../services/token.service";

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

    constructor(private _tokenService: TokenService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token: string | null = this._tokenService.getToken();

        if (!token)
            return next.handle(request);

        const clone: HttpRequest<unknown> = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })

        return next.handle(clone);
    }
}
