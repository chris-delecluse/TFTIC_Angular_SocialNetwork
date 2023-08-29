import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMinus, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FriendService } from "../../../../core/services/friend.service";
import { FriendStatus } from "../../../../core/enums/friend-status";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";

@Component({
  selector: 'app-remove-friend-button',
  templateUrl: './remove-friend-button.component.html',
  styleUrls: ['./remove-friend-button.component.scss']
})
export class RemoveFriendButtonComponent {
  protected readonly faMinus: IconDefinition = faMinus;
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
    this._friendService.removeFriendOrCancelRequest(this.userProfileId).subscribe({
      next: (response: ApiResponseModel<string>) => {
        if (response.statusCode === 204)
          this.emitRequestFriendButtonClicked$.emit(undefined);
      }
    })
  }
}
