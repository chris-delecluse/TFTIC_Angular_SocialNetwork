import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToasterMessageComponent } from './components/toaster-message/toaster-message.component';
import { AbsolutIconComponent } from './components/absolut-icon/absolut-icon.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { MobileTitleComponent } from './components/mobile-title/mobile-title.component';
import { AgePipe } from './pipes/age.pipe';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { TruncateContentDirective } from './directives/truncate-content.directive';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    FormErrorComponent,
    ToasterMessageComponent,
    AbsolutIconComponent,
    MainButtonComponent,
    MobileTitleComponent,
    AgePipe,
    ProfilePictureComponent,
    TruncateContentDirective,
    TruncateContentDirective,
    DateAgoPipe,
  ],
  exports: [
    FormErrorComponent,
    ToasterMessageComponent,
    AbsolutIconComponent,
    MainButtonComponent,
    MobileTitleComponent,
    AgePipe,
    ProfilePictureComponent,
    TruncateContentDirective,
    DateAgoPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgOptimizedImage
  ]
})
export class SharedModule {
}
