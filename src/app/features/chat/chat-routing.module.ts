import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalMessageComponent } from "./pages/personal-message/personal-message.component";

const routes: Routes = [
  {
    path: '',
    component: PersonalMessageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {
}
