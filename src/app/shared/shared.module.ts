import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToasterMessageComponent } from './components/toaster-message/toaster-message.component';
import { AbsolutIconComponent } from './components/absolut-icon/absolut-icon.component';
import { MainButtonComponent } from './components/main-button/main-button.component';

@NgModule({
  declarations: [
    FormErrorComponent,
    ToasterMessageComponent,
    AbsolutIconComponent,
    MainButtonComponent,
  ],
  exports: [
    FormErrorComponent,
    ToasterMessageComponent,
    AbsolutIconComponent,
    MainButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
}
