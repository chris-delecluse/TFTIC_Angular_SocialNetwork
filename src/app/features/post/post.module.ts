import { NewsFeedComponent } from "./pages/news-feed/news-feed.component";
import { CommonModule } from "@angular/common";
import { PostRoutingModule } from "./post-routing.module";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { CoreModule } from "../../core/core.module";
import { AddPostComponent } from './pages/add-post/add-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { EditPostFormComponent } from './components/edit-post-form/edit-post-form.component';
import { AddPostFormComponent } from './components/add-post-form/add-post-form.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    NewsFeedComponent,
    AddPostComponent,
    EditPostComponent,
    EditPostFormComponent,
    AddPostFormComponent,
    UserPostsComponent,
    PostComponent,
  ],
    imports: [
        CommonModule,
        PostRoutingModule,
        SharedModule,
        CoreModule
    ]
})
export class PostModule { }
