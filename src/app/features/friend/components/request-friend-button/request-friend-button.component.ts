import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPlus, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FriendService } from "../../../../core/services/friend.service";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { FriendStatus } from "../../../../core/enums/friend-status";

@Component({
  selector: 'app-request-friend-button',
  templateUrl: './request-friend-button.component.html',
  styleUrls: ['./request-friend-button.component.scss']
})
export class RequestFriendButtonComponent {
  protected readonly faPlus: IconDefinition = faPlus;

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
    this._friendService.postFriendRequest(this.userProfileId).subscribe({
      next: (response: ApiResponseModel<string>) => {
        if (response.statusCode === 201)
          this.emitRequestFriendButtonClicked$.emit(FriendStatus.Pending)
      }
    })
  }
}
