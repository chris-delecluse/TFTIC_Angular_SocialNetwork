import { Component, Input } from '@angular/core';
import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {
  protected readonly faUser: IconDefinition = faUser;

  @Input()
  src !: string;

  @Input()
  alt !: string;

  @Input()
  cStyles?: string;
}
