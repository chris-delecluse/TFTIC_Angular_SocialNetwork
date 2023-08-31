import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToasterMessageComponent } from './components/toaster-message/toaster-message.component';
import { AbsolutIconComponent } from './components/absolut-icon/absolut-icon.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { MobileTitleComponent } from './components/mobile-title/mobile-title.component';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    FormErrorComponent,
    ToasterMessageComponent,
    AbsolutIconComponent,
    MainButtonComponent,
    MobileTitleComponent,
    AgePipe,
  ],
  exports: [
    FormErrorComponent,
    ToasterMessageComponent,
    AbsolutIconComponent,
    MainButtonComponent,
    MobileTitleComponent,
    AgePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
}
