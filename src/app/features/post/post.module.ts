import { NewsFeedComponent } from "./pages/news-feed/news-feed.component";
import { CommonModule } from "@angular/common";
import { PostRoutingModule } from "./post-routing.module";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
