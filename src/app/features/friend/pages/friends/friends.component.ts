import { Component, OnInit } from '@angular/core';
import { BasicUserProfileModel } from "../../../../core/models/user/Basic-user-profile.model";
import { Router } from "@angular/router";
import { UserService } from "../../../../core/services/user.service";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friendCards: BasicUserProfileModel[] = [];

  constructor(
    private _userService: UserService,
    private _router: Router) {}

  ngOnInit(): void {
       this.fetchProfiles()
    }

  onClickCard = async (item: number) => {
    await this._router.navigateByUrl(`user/profile/${item}`)
    console.log("clicked ", item)
  }

  fetchProfiles = (): void => {
    this._userService.getBasicProfiles().subscribe({
      next: (response: ApiResponseModel<BasicUserProfileModel[]>) => this.friendCards = response.data
    })
  }
}
