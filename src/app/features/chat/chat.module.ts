import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { MessagesComponent } from './pages/messages/messages.component';
import { CoreModule } from "../../core/core.module";
import { SendMessageFormComponent } from './components/send-message-form/send-message-form.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    MessagesComponent,
    SendMessageFormComponent
  ],
    imports: [
        CommonModule,
        ChatRoutingModule,
        CoreModule,
        SharedModule
    ]
})
export class ChatModule { }
