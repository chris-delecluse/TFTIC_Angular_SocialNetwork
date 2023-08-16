import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthGuard } from "./core/guards/is-auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [isAuthGuard],
    loadChildren: () => import('./core/main/main.module').then(m => m.MainModule)
  }, {
    path: 'auth',
    loadChildren: () => import("./features/auth/auth.module").then(m => m.AuthModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
