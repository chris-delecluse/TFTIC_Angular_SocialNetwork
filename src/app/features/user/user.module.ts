import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CoreModule } from "../../core/core.module";
import { PrivateProfileComponent } from './pages/private-profile/private-profile.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';
import { BackdropAndProfilePictureComponent } from './components/backdrop-and-profile-picture/backdrop-and-profile-picture.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../../shared/shared.module";
import { UserProfileDataComponent } from './components/user-profile-data/user-profile-data.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { EditProfileFormComponent } from './components/edit-profile-form/edit-profile-form.component';
import { FriendModule } from "../friend/friend.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    PrivateProfileComponent,
    PublicProfileComponent,
    BackdropAndProfilePictureComponent,
    UserProfileDataComponent,
    EditProfileComponent,
    EditProfileFormComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        CoreModule,
        NgOptimizedImage,
        FontAwesomeModule,
        SharedModule,
        FriendModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
