import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginFormModel } from "../../../../core/models/auth/Login-form.model";
import { loginFormInputs } from "./login-form.data";
import { FormInputModel } from "../../../../core/models/ui/Form-input.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  protected readonly formInputs: FormInputModel[] = loginFormInputs;

  form !: FormGroup;

  @Input()
  errorMessage: string = '';

  @Output()
  emitLoginSubmit$: EventEmitter<LoginFormModel> = new EventEmitter<LoginFormModel>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit = () => {
    this.emitLoginSubmit$.emit(this.form.value)
  }
}
