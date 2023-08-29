import { Component, Input } from '@angular/core';
import { FriendService } from "../../../../core/services/friend.service";
import { faCancel, faMinus, faPlus, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { FriendStatus } from 'src/app/core/enums/friend-status';

@Component({
  selector: 'app-friend-button',
  templateUrl: './friend-button.component.html',
  styleUrls: ['./friend-button.component.scss']
})
export class FriendButtonComponent {
  protected readonly faMinus: IconDefinition = faMinus;
  protected readonly faPlus: IconDefinition = faPlus;
  protected readonly faCancel: IconDefinition = faCancel;
  protected readonly FriendStatus = FriendStatus;

  @Input()
  friendRequestStatus!: string | undefined;

  @Input()
  userProfileId!: number;

  @Input()
  isFriendRequestInitiator!: boolean;

  constructor(private _friendService: FriendService) {}

  getButtonIcon(): IconDefinition {
    switch (this.friendRequestStatus) {
      case FriendStatus.Accepted:
        return this.faMinus;
      case FriendStatus.Pending:
        return this.faCancel;
      default:
        return this.faPlus;
    }
  }

  addFriend = (): void => {
    this._friendService.postFriendRequest(this.userProfileId).subscribe({
      next: (response: ApiResponseModel<string>) => console.log(response.data)
    })
  }

  removeFriend = (): void => {

  }
}
