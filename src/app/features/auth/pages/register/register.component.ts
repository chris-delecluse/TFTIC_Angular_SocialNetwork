import { Component } from '@angular/core';
import { RegisterFormModel } from "../../../../core/models/auth/Register-form.model";
import { AuthService } from "../../../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errors!: string[];

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  register = (form: RegisterFormModel): void => {
    this._authService.register(form).subscribe({
      error: (response) => {
        this.errors = [];

        if (!response.error.isSuccess && response.error.message)
          this.errors.push(response.error.message);

        for (const property in response.error.errors) {
          this.errors.push(response.error.errors[property].at(0))
        }
      },
      complete: () => this._router.navigateByUrl("auth/login")
    })
  }
}
