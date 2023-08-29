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
import { FriendButtonComponent } from './components/friend-button/friend-button.component';
import { RequestFriendButtonComponent } from './components/request-friend-button/request-friend-button.component';
import { RemoveFriendButtonComponent } from './components/remove-friend-button/remove-friend-button.component';
import { CancelRequestFriendButtonComponent } from './components/cancel-request-friend-button/cancel-request-friend-button.component';


@NgModule({
  declarations: [
    FriendsComponent,
    SearchFriendCardComponent,
    SearchFriendInputComponent,
    FriendButtonComponent,
    RequestFriendButtonComponent,
    RemoveFriendButtonComponent,
    CancelRequestFriendButtonComponent,
  ],
  exports: [
    FriendButtonComponent,
    RequestFriendButtonComponent,
    RemoveFriendButtonComponent,
    CancelRequestFriendButtonComponent
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
