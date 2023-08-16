import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPrimaryButtonComponent } from './ui/buttons/primary/ui-primary-button/ui-primary-button.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToasterMessageComponent } from './components/toaster-message/toaster-message.component';

@NgModule({
  declarations: [
    UiPrimaryButtonComponent,
    FormErrorComponent,
    ToasterMessageComponent,
  ],
  exports: [
    UiPrimaryButtonComponent,
    FormErrorComponent,
    ToasterMessageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
}
