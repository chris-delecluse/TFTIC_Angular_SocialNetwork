import { Component } from '@angular/core';
import {
  faCakeCandles,
  faEdit,
  faGlobe,
  faHeart,
  faImage,
  faNeuter, faSave,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.scss']
})
export class EditProfileFormComponent {
  protected readonly faImage: IconDefinition = faImage;
  protected readonly faCakeCandles: IconDefinition = faCakeCandles;
  protected readonly faNeuter: IconDefinition = faNeuter;
  protected readonly faGlobe: IconDefinition = faGlobe;
  protected readonly faHeart: IconDefinition = faHeart;
  protected readonly faEdit = faEdit;
  protected readonly faSave = faSave;
}
