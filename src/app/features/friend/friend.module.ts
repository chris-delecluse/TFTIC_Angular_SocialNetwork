import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { FriendsComponent } from './pages/friends/friends.component';
import { SearchFriendCardComponent } from './components/search-friend-card/search-friend-card.component';
import { CoreModule } from "../../core/core.module";
import { SearchFriendInputComponent } from './components/search-friend-input/search-friend-input.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RequestFriendButtonComponent } from './components/request-friend-button/request-friend-button.component';
import { RemoveFriendButtonComponent } from './components/remove-friend-button/remove-friend-button.component';
import { CancelRequestFriendButtonComponent } from './components/cancel-request-friend-button/cancel-request-friend-button.component';
import { FriendRequestActionButtonComponent } from './components/friend-request-action-button/friend-request-action-button.component';


@NgModule({
  declarations: [
    FriendsComponent,
    SearchFriendCardComponent,
    SearchFriendInputComponent,
    RequestFriendButtonComponent,
    RemoveFriendButtonComponent,
    CancelRequestFriendButtonComponent,
    FriendRequestActionButtonComponent,
  ],
  exports: [
    RequestFriendButtonComponent,
    RemoveFriendButtonComponent,
    CancelRequestFriendButtonComponent,
    FriendRequestActionButtonComponent
  ],
  imports: [
    CommonModule,
    FriendRoutingModule,
    CoreModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
})
export class FriendModule { }
