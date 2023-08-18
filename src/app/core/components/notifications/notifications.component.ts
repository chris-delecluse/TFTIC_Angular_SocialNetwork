import { Component } from '@angular/core';
import { faCircleExclamation, faExclamation } from "@fortawesome/free-solid-svg-icons";

export class NotificationModel {
  id!: number;
  firstName !: string;
  lastName !: string;
  notificationText !: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  fakeNotifications: NotificationModel[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      notificationText: 'liked your post.',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      notificationText: 'commented on your photo.',
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      notificationText: 'mentioned you in a comment.',
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Williams',
      notificationText: 'sent you a message.',
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Brown',
      notificationText: 'shared a post with you.',
    },
    {
      id: 6,
      firstName: 'Olivia',
      lastName: 'Jones',
      notificationText: 'liked your post.',
    },
  ];
  protected readonly faExclamation = faExclamation;
  protected readonly faCircleExclamation = faCircleExclamation;
}
