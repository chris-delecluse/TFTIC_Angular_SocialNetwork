import { Component, Input } from '@angular/core';
import { PostsResponseModel } from "../../../../core/models/post/Posts-response.model";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent {
  @Input()
  posts!: PostsResponseModel[];

  trackPosts = (index: number, model: PostsResponseModel) => {
    return model.post.id;
  }
}
