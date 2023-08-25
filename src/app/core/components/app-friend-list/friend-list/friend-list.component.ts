  import { Component, OnInit } from '@angular/core';
  import { FriendService } from "../../../services/friend.service";
  import { FriendModel } from "../../../models/friend/Friend.model";

  export class FakeFriendModel {
    id!: number;
    firstName!: string;
    lastName!: string;
    isConnected!: boolean;
    avatarUrl!: string;
  }

  @Component({
    selector: 'app-friend-list',
    templateUrl: './friend-list.component.html',
    styleUrls: ['./friend-list.component.scss']
  })
  export class FriendListComponent implements OnInit {
    fakeList: FakeFriendModel[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        isConnected: true,
        avatarUrl: 'https://randomuser.me/api/portraits/men/10.jpg'
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        isConnected: true,
        avatarUrl: 'https://randomuser.me/api/portraits/women/15.jpg'
      },
      {
        id: 3,
        firstName: 'Michael',
        lastName: 'Johnson',
        isConnected: true,
        avatarUrl: 'https://randomuser.me/api/portraits/men/25.jpg'
      },
      {
        id: 4,
        firstName: 'Emily',
        lastName: 'Williams',
        isConnected: true,
        avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg'
      },
      {
        id: 5,
        firstName: 'David',
        lastName: 'Brown',
        isConnected: true,
        avatarUrl: 'https://randomuser.me/api/portraits/men/47.jpg'
      },
      {
        id: 6,
        firstName: 'Olivia',
        lastName: 'Jones',
        isConnected: true,
        avatarUrl: 'https://randomuser.me/api/portraits/women/52.jpg'
      },
      {
        id: 7,
        firstName: 'Daniel',
        lastName: 'Garcia',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/men/62.jpg'
      },
      {
        id: 8,
        firstName: 'Sophia',
        lastName: 'Martinez',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/women/74.jpg'
      },
      {
        id: 9,
        firstName: 'James',
        lastName: 'Lopez',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/men/85.jpg'
      },
      {
        id: 10,
        firstName: 'Isabella',
        lastName: 'Lee',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/women/93.jpg'
      },
      {
        id: 11,
        firstName: 'Joseph',
        lastName: 'Hernandez',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/men/8.jpg'
      },
      {
        id: 12,
        firstName: 'Ava',
        lastName: 'Walker',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/women/18.jpg'
      },
      {
        id: 13,
        firstName: 'Matthew',
        lastName: 'Perez',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/men/29.jpg'
      },
      {
        id: 14,
        firstName: 'Emma',
        lastName: 'Hall',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/women/37.jpg'
      },
      {
        id: 15,
        firstName: 'Andrew',
        lastName: 'Young',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/men/43.jpg'
      },
      {
        id: 16,
        firstName: 'Oliver',
        lastName: 'Allen',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/men/58.jpg'
      },
      {
        id: 17,
        firstName: 'Mia',
        lastName: 'Turner',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg'
      },
      {
        id: 18,
        firstName: 'William',
        lastName: 'Adams',
        isConnected: false,
        avatarUrl: 'https://randomuser.me/api/portraits/men/77.jpg'
      },
    ];

    friendList: FriendModel[] = [];

    constructor(private _friendService: FriendService) {}

    ngOnInit(): void {
      this.getFriendList();
    }

    getFriendList = (): void => {
      this._friendService.getFriendList().subscribe({
        next: (response) => {
          this.friendList = response.data;
        },
      })
    }
  }
