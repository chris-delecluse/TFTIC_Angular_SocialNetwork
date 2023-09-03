import { NewsFeedComponent } from "./pages/news-feed/news-feed.component";
import { CommonModule } from "@angular/common";
import { PostRoutingModule } from "./post-routing.module";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { CoreModule } from "../../core/core.module";
import { AddPostFormComponent } from './components/add-post-form/add-post-form.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { PostComponent } from './components/post/post.component';
import { AddCommentFormComponent } from './components/add-comment-form/add-comment-form.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GetMorePostsComponent } from './components/get-more-posts/get-more-posts.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    NewsFeedComponent,
    AddPostFormComponent,
    UserPostsComponent,
    PostComponent,
    AddCommentFormComponent,
    GetMorePostsComponent,
  ],
  exports: [
    UserPostsComponent,
    AddPostFormComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class PostModule { }
