import { Component } from '@angular/core';
import { MainNavigationModel } from "../../models/ui/Main-navigation.model";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
  footerLinks: MainNavigationModel[] = [
    {
      icon: faLinkedin,
      navigateTo: 'https://www.linkedin.com/in/christopher-delecluse/'
    },
    {
      icon: faGithub,
      navigateTo: 'https://github.com/chris-delecluse',
    }
  ];
}
