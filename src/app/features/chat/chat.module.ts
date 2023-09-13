import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { CoreModule } from "../../core/core.module";
import { SendMessageFormComponent } from './components/send-message-form/send-message-form.component';
import { SharedModule } from "../../shared/shared.module";
import { MessagesPreviewComponent } from './pages/messages-preview/messages-preview.component';
import { PersonalMessageComponent } from './pages/personal-message/personal-message.component';
import { DisplayMessageComponent } from './components/display-message/display-message.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    SendMessageFormComponent,
    MessagesPreviewComponent,
    PersonalMessageComponent,
    DisplayMessageComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
