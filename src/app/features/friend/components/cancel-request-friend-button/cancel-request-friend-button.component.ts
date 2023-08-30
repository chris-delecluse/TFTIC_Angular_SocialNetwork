import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FriendService } from "../../../../core/services/friend.service";
import { faCancel, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FriendStatus } from "../../../../core/enums/friend-status";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";

@Component({
  selector: 'app-cancel-request-friend-button',
  templateUrl: './cancel-request-friend-button.component.html',
  styleUrls: ['./cancel-request-friend-button.component.scss']
})
export class CancelRequestFriendButtonComponent {
  protected readonly faCancel: IconDefinition = faCancel;
  protected readonly FriendStatus = FriendStatus;

  @Input()
  friendRequestStatus!: string | undefined;

  @Input()
  userProfileId!: number;

  @Input()
  isFriendRequestInitiator!: boolean;

  @Output()
  emitRequestFriendButtonClicked$: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _friendService: FriendService) {}

  onClick = (): void => {
    this._friendService.removeOrCancelFriendRequest(this.userProfileId).subscribe({
      next: (response: ApiResponseModel<string>) => {
        if (response.statusCode === 204)
          this.emitRequestFriendButtonClicked$.emit(undefined)
      }
    })
  }
}
