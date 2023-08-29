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
import { BasicUserProfileModel } from "../../models/user/Basic-user-profile.model";
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

  minimalUserProfileInfo?: BasicUserProfileModel;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getBasicProfile();
  }

  getBasicProfile = () => {
    this._userService.getBasicProfile().subscribe({
      next: async (response) => {
         this.minimalUserProfileInfo = response.data;
      },
      error: (response) => {},
      complete: () => {}
    })
  }
}
