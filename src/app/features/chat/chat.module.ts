import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { MessagesComponent } from './pages/messages/messages.component';
import { CoreModule } from "../../core/core.module";


@NgModule({
  declarations: [
    MessagesComponent
  ],
    imports: [
        CommonModule,
        ChatRoutingModule,
        CoreModule
    ]
})
export class ChatModule { }
