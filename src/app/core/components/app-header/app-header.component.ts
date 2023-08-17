import { Component } from '@angular/core';
import { faHouse, faSearch, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { MainNavigationModel } from "../../models/ui/Main-navigation.model";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  protected readonly faSearch: IconDefinition = faSearch;

  nav: MainNavigationModel[] = [
    {
      icon: faHouse,
      navigateTo: ''
    },
    {
      icon: faUser,
      navigateTo: ''
    }
  ];
}
