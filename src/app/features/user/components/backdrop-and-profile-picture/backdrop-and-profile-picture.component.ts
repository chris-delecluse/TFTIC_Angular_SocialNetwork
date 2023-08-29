import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backdrop-and-profile-picture',
  templateUrl: './backdrop-and-profile-picture.component.html',
  styleUrls: ['./backdrop-and-profile-picture.component.scss']
})
export class BackdropAndProfilePictureComponent {
  // @Input()
  // profilePicture ?: string = "https://randomuser.me/api/portraits/men/29.jpg";

  // @Input()
  // backdropImage ?: string = "./assets/images/img.png";

  @Input()
  profilePicture ?: string;

  @Input()
  backdropImage ?: string;
}
