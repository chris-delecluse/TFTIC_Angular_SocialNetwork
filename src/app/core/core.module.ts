import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AccessTokenInterceptor } from "./interceptors/access-token.interceptor";
import { UnauthorizedInterceptor } from "./interceptors/unauthorized.interceptor";
import { RouterOutlet } from "@angular/router";
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FriendListItemCardComponent } from './components/friend-list-item-card/friend-list-item-card.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    FriendListComponent,
    NotificationsComponent,
    FriendListItemCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterOutlet,
    NgOptimizedImage,
    FontAwesomeModule,
  ],
  exports: [
    FriendListComponent,
    NotificationsComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
}
