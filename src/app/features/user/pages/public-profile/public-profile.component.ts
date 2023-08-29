import { Component, OnInit } from '@angular/core';
import { faMessage, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { UserService } from "../../../../core/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { FullPublicProfileModel } from "../../../../core/models/user/Full-public-profile.model";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  protected readonly faMessage: IconDefinition = faMessage;

  userData: FullPublicProfileModel = {
    id: 0,
    firstName: 'unknown',
    lastName: ''
  };

  constructor(
    private readonly _userService: UserService,
    private readonly _router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFullPublicProfile();
  }

  getFullPublicProfile = (): void => {
    this._userService.getFullPublicProfileById(this._router.snapshot.params['id']).subscribe({
      next: (response: ApiResponseModel<FullPublicProfileModel>) => {
        return this.userData = response.data;
      }
    })
  }

  updateUserProfile = ($event: string): void => {
    this.userData.friendRequestStatus = $event;
  }
}
