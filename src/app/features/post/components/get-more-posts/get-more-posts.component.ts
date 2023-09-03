import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faAngleDown, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { PostService } from "../../../../core/services/post.service";
import { PostsResponseModel } from "../../../../core/models/post/Posts-response.model";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";

@Component({
  selector: 'app-get-more-posts',
  templateUrl: './get-more-posts.component.html',
  styleUrls: ['./get-more-posts.component.scss']
})
export class GetMorePostsComponent {

  protected readonly faAngleDown: IconDefinition = faAngleDown;

  @Input()
  posts?: PostsResponseModel[];

  @Input()
  userId: number = 0;

  @Output()
  emitNewPostsOnClick$: EventEmitter<PostsResponseModel[]> = new EventEmitter<PostsResponseModel[]>();

  constructor(private _postService: PostService) {}

  getPostsOnClick = (): void => {
    if (this.userId === 0) {
      this._postService.getAllPost(this.posts!.length, false).subscribe({
        next: (response: ApiResponseModel<PostsResponseModel[]>) => {
          console.log('without id', response.data)
          this.emitNewPostsOnClick$.emit(response.data)
        }
      })
    } else {
      this._postService.getAllPostByUserId(this.userId, this.posts!.length, false).subscribe({
        next: (response: ApiResponseModel<PostsResponseModel[]>) => {
          console.log('wih id', response.data)
          this.emitNewPostsOnClick$.emit(response.data)
        }
      })
    }
  }
}
