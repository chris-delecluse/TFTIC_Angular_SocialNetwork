import { Component, Input } from '@angular/core';
import { faCircleExclamation, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-notification-list-item-card',
    templateUrl: './notification-list-item-card.component.html',
    styleUrls: ['./notification-list-item-card.component.scss']
})
export class NotificationListItemCardComponent {
    protected readonly faCircleExclamation: IconDefinition = faCircleExclamation;

    @Input()
    firstName!: string;

    @Input()
    lastName!: string;

    @Input()
    notificationText!: string;
}
