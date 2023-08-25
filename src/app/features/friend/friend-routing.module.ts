import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from "./pages/friends/friends.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'research',
    pathMatch: "full"
  },
  {
    path: 'research',
    component: FriendsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule {
}
