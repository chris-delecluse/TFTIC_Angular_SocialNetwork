import { NewsFeedComponent } from "./pages/news-feed/news-feed.component";
import { CommonModule } from "@angular/common";
import { PostRoutingModule } from "./post-routing.module";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ]
})
export class PostModule { }
