import { Component, Input } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-friend-list-item-card',
  templateUrl: './friend-list-item-card.component.html',
  styleUrls: ['./friend-list-item-card.component.scss']
})
export class FriendListItemCardComponent {
  @Input()
  firstName!: string;

  @Input()
  lastName!: string;

  @Input()
  src?: string;

  @Input()
  alt?: string;

  @Input()
  width?: string;

  @Input()
  height?: string;

  @Input()
  isConnected!: boolean;
  protected readonly faUser = faUser;
}
