import { Component, OnInit } from '@angular/core';
import { faEdit, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FullPrivateProfileModel } from "../../../../core/models/user/Full-private-profile.model";
import { UserService } from "../../../../core/services/user.service";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.component.html',
  styleUrls: ['./private-profile.component.scss']
})
export class PrivateProfileComponent implements OnInit {
  protected readonly faUser: IconDefinition = faUser;
  protected readonly faEdit: IconDefinition = faEdit;

  userData: FullPrivateProfileModel = {
    id: 0,
    firstName: 'unknown',
    lastName: ''
  };

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getFullProfile();
  }

  getFullProfile = (): void => {
    this._userService.getFullProfile().subscribe({
      next: (response: ApiResponseModel<FullPrivateProfileModel>) => this.userData = response.data
    })
  }

  onClick = async (): Promise<void> => {
    await this._router.navigateByUrl("user/profile/edit");
  }
}
