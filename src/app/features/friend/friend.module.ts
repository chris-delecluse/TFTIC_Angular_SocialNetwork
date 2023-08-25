import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { FriendsComponent } from './pages/friends/friends.component';
import { SearchFriendCardComponent } from './components/search-friend-card/search-friend-card.component';
import { FriendProfileComponent } from './pages/friend-profile/friend-profile.component';


@NgModule({
  declarations: [
    FriendsComponent,
    SearchFriendCardComponent,
    FriendProfileComponent
  ],
  imports: [
    CommonModule,
    FriendRoutingModule
  ]
})
export class FriendModule { }
