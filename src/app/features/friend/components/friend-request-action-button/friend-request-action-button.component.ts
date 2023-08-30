import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMinus, faPlus, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FriendService } from "../../../../core/services/friend.service";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { FriendStatus } from "../../../../core/enums/friend-status";

@Component({
  selector: 'app-friend-request-action-button',
  templateUrl: './friend-request-action-button.component.html',
  styleUrls: ['./friend-request-action-button.component.scss']
})
export class FriendRequestActionButtonComponent {
  protected readonly faPlus: IconDefinition = faPlus;
  protected readonly faMinus: IconDefinition = faMinus;

  @Input()
  userProfileId!: number;

  @Output()
  emitRequestFriendButtonClicked$: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _friendService: FriendService) {}

  onClick = (isAccepted: boolean): void => {
    this._friendService.updateRequestFriendStatus(this.userProfileId, isAccepted).subscribe({
      next: (response: ApiResponseModel<string>) => {
        if (response.statusCode === 202)
          this.emitRequestFriendButtonClicked$.emit(isAccepted ? FriendStatus.Accepted : undefined)
      }
    })
  }
}
