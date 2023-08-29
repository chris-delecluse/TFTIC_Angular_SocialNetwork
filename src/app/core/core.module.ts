import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AccessTokenInterceptor } from "./interceptors/access-token.interceptor";
import { UnauthorizedInterceptor } from "./interceptors/unauthorized.interceptor";
import { RouterOutlet } from "@angular/router";
import { FriendListComponent } from './components/app-friend-list/friend-list/friend-list.component';
import { NotificationsComponent } from './components/app-notifications/notifications/notifications.component';
import { FriendListItemCardComponent } from './components/app-friend-list/friend-list-item-card/friend-list-item-card.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NotificationListItemCardComponent } from './components/app-notifications/notification-list-item-card/notification-list-item-card.component';
import { NotificationModalComponent } from './components/app-notifications/notification-modal/notification-modal.component';
import { AppPageTitleComponent } from './components/app-page-title/app-page-title.component';

@NgModule({
  declarations: [
    FriendListComponent,
    NotificationsComponent,
    FriendListItemCardComponent,
    NotificationListItemCardComponent,
    NotificationModalComponent,
    AppPageTitleComponent,
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
    NotificationsComponent,
    AppPageTitleComponent,
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
