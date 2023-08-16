import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from "./auth/auth.module";
import { ChatModule } from "./chat/chat.module";
import { PostModule } from "./post/post.module";
import { UserModule } from "./user/user.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    ChatModule,
    PostModule,
    UserModule
  ]
})
export class FeatureModule {
}
