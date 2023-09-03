import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./components/main-layout.component";
import { isAuthGuard } from "../../guards/is-auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [isAuthGuard],
    children: [
      {
        path: 'feed',
        loadChildren: () => import("../../../features/post/post.module").then(m => m.PostModule)
      },
      {
        path: 'user',
        loadChildren: () => import("../../../features/user/user.module").then(m => m.UserModule)
      },
      {
        path: 'messages',
        loadChildren: () => import("../../../features/chat/chat.module").then(m => m.ChatModule)
      },
      {
        path: 'friends',
        loadChildren: () => import("../../../features/friend/friend.module").then(m => m.FriendModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule {
}
