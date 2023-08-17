import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/layouts/main-layout/main-layout.module').then(m => m.MainLayoutModule)
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
