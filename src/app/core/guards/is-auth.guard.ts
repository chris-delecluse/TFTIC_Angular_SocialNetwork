import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { TokenService } from "../services/token.service";

export const isAuthGuard: CanActivateFn = (route, state) => {
    return inject(AuthService).isConnected() && inject(TokenService).getToken()
        ? true
        : inject(Router).navigateByUrl('/auth');
};
