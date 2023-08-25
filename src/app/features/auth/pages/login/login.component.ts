import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "../../../../core/services/auth.service";
import { LoginFormModel } from "../../../../core/models/auth/Login-form.model";
import { TokenService } from "../../../../core/services/token.service";
import { Router } from "@angular/router";
import { RedirectEventService } from "../../../../core/services/redirect-event.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  errorMessage: string = '';

  constructor(
    private _authService: AuthService,
    private _tokenService: TokenService,
    private _redirectEventService: RedirectEventService,
    private _router: Router
  ) {}

  public login = (form: LoginFormModel): void => {
    this._authService.login(form).subscribe({
      next: (response) => {
        this._tokenService.storeToken(response.data.token);
        this._authService.setIsConnected(true);
      },
      error: (error) => {
        this.errorMessage = error.error.message;

        if (error.error.status == 400)
          this.errorMessage = error.error.errors['Email']?.[0] || error.error.errors['Password']?.[0];
      },
      complete: async () => {
        await this._router.navigateByUrl("feed");
      }
    });
  }

  ngOnDestroy(): void {
    this._redirectEventService.emitAction("emit de mon message pour voir");
  }
}
