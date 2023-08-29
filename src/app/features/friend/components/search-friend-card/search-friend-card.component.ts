import { Component, Input } from '@angular/core';
import { BasicUserProfileModel } from "../../../../core/models/user/Basic-user-profile.model";
import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-search-friend-card',
  templateUrl: './search-friend-card.component.html',
  styleUrls: ['./search-friend-card.component.scss']
})
export class SearchFriendCardComponent {
  @Input()
  friendCard !: BasicUserProfileModel;
  protected readonly faUser = faUser;
}
