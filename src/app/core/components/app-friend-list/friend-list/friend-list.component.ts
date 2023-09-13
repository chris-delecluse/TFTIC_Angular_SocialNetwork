import { Component, OnInit } from '@angular/core';
import { FriendService } from "../../../services/friend.service";
import { FriendModel } from "../../../models/friend/Friend.model";
import { Router } from "@angular/router";
import { ChatMediatorService } from "../../../services/chat-mediator.service";

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

  friendList: FriendModel[] = [];

  constructor(
    private _friendService: FriendService,
    private _chatMediatorService: ChatMediatorService,
    private _router: Router
  ) {}

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

  onClick = async (id: number): Promise<void> => {
    this._chatMediatorService.notifyIdChanged(id);
    await this._router.navigateByUrl(`messages`);
  }
}
