import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faXmark, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { NotificationModel } from "../notifications/notifications.component";

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent {
  protected readonly faXmark: IconDefinition = faXmark;

  @Input()
  isOpen!: boolean;

  @Input()
  notifications!: NotificationModel[];

  @Output()
  emitOnClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClose = (): void => {
    this.emitOnClose.emit(!this.isOpen);
  }
}
