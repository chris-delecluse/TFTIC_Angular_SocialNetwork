import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent, LoginFormComponent, RegisterComponent, RegisterFormComponent } from "./index";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    LoginComponent,
    RegisterComponent,
    AuthButtonComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class AuthModule {}
