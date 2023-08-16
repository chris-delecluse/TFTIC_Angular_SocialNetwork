import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterFormModel } from "../../../../core/models/auth/Register-form.model";
import { FormInputModel } from "../../../../core/models/ui/Form-input.model";
import { registerFormInputs } from "./register-form.data";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  protected formInputs: FormInputModel[] = registerFormInputs;

  form !: FormGroup;

  @Output()
  emitSubmitRegister$: EventEmitter<RegisterFormModel> = new EventEmitter<RegisterFormModel>

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit = () => {
    this.emitSubmitRegister$.emit(this.form.value);
  }
}
