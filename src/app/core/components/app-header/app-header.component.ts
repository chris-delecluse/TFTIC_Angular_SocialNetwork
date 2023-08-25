import { Component, OnInit } from '@angular/core';
import {
  faComment,
  faGear,
  faHouse,
  faSearch,
  faUser,
  faUserGroup,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { MainNavigationModel } from "../../models/ui/Main-navigation.model";
import { MinimalUserProfileInfoModel } from "../../models/user/Minimal-user-profile-info.model";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  protected readonly faSearch: IconDefinition = faSearch;
  protected readonly faGear: IconDefinition = faGear;
  protected readonly faUser: IconDefinition = faUser;

  nav: MainNavigationModel[] = [
    {
      icon: faHouse,
      navigateTo: 'feed'
    },
    {
      icon: faUser,
      navigateTo: 'user/profile'
    },
    {
      icon: faUserGroup,
      navigateTo: 'friends/research'
    },
    {
      icon: faComment,
      navigateTo: 'messages'
    }
  ];

  minimalUserProfileInfo?: MinimalUserProfileInfoModel;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getMinimalUserProfileInfo();
  }

  getMinimalUserProfileInfo = () => {
    this._userService.getUserProfileInfo().subscribe({
      next: async (response) => {
         this.minimalUserProfileInfo = response.data;
      },
      error: (response) => {},
      complete: () => {}
    })
  }
}
