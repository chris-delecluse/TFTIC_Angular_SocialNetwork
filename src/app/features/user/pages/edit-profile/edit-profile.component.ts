import { Component } from '@angular/core';
import { UserService } from "../../../../core/services/user.service";
import { EditUserProfileModel } from "../../../../core/models/user/Edit-user-profile.model";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  constructor(
    private _userService: UserService,
    private _router: Router
    ) {}

  editProfile = (profile: EditUserProfileModel) => {
    this._userService.patchUserProfile(profile).subscribe({
      next: (response: ApiResponseModel<string>) => console.log(response),
      complete: () => this._router.navigateByUrl("user/profile")
    })
  }
}
