import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateProfileComponent } from "./pages/private-profile/private-profile.component";
import { PublicProfileComponent } from "./pages/public-profile/public-profile.component";
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";

const routes: Routes = [
  {
    path: 'profile',
    component: PrivateProfileComponent
  },
  {
    path: 'profile/edit',
    component: EditProfileComponent
  },
  {
    path: 'profile/:id',
    component: PublicProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
