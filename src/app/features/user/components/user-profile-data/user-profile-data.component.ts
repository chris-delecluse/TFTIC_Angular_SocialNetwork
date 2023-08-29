import { Component, Input } from '@angular/core';
import { faCakeCandles, faGlobe, faHeart, faNeuter, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FullPrivateProfileModel } from "../../../../core/models/user/Full-private-profile.model";

@Component({
  selector: 'app-user-profile-data',
  templateUrl: './user-profile-data.component.html',
  styleUrls: ['./user-profile-data.component.scss']
})
export class UserProfileDataComponent {
  protected readonly faCakeCandles: IconDefinition = faCakeCandles;
  protected readonly faHeart: IconDefinition = faHeart;
  protected readonly faGlobe: IconDefinition = faGlobe;
  protected readonly faNeuter: IconDefinition = faNeuter;
  protected readonly faUser: IconDefinition = faUser;

  @Input()
  userData!: FullPrivateProfileModel;
}
