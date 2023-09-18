import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../../core/services/post.service";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { PostsResponseModel } from "../../../../core/models/post/Posts-response.model";
import { ClientPostHubService } from "../../../../core/signal-r/client-post-hub.service";
import { TokenService } from "../../../../core/services/token.service";
import { CommentService } from "../../../../core/services/comment.service";
import { CommentResponseModel } from "../../../../core/models/comment/Comment-response.model";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  posts!: PostsResponseModel[];

  eventHandlers: { eventName: string, handler: any }[] = [
    {
      eventName: 'receiveNewPost',
      handler: (message: string) => {
        this.posts.unshift(this._postService.toPost(message));
      }
    },
    {
      eventName: 'receiveLike',
      handler: (message: string) => {
        this.handleLikeOrDislike(message, true);
      }
    },
    {
      eventName: 'receiveDislike',
      handler: (message: string) => {
        this.handleLikeOrDislike(message, false);
      }
    }, {
      eventName: 'receiveComment',
      handler: (message: string) => {
        const parsedMessage: CommentResponseModel = this._commentService.toComment(message);
        const postToUpdate: PostsResponseModel | undefined = this.posts.find((el) => el.post.id === parsedMessage.postId);

        if (postToUpdate) {
          postToUpdate.comments.push(parsedMessage);
        }
      }
    }
  ];

  constructor(
    private _postService: PostService,
    private _commentService: CommentService,
    private _tokenService: TokenService,
    private _clientPostHubService: ClientPostHubService
  ) {}

  ngOnInit(): void {
    this.getAllPost(0)

    this._clientPostHubService.startConnection("post")
      .then(() => {
        this.eventHandlers.forEach(({ eventName, handler }) => {
          this._clientPostHubService.hubConnection.on(eventName, handler);
        });
      })
      .catch((err) => console.error(err));
  }

  getAllPost = (offset: number, isDeleted: boolean = false): void => {
    this._postService.getAllPost(offset, isDeleted).subscribe({
      next: (response: ApiResponseModel<PostsResponseModel[]>) => {
        return this.posts = response.data;
      }
    })
  }

  addMorePosts = ($event: PostsResponseModel[]): void => {
    $event.forEach((item: PostsResponseModel) => this.posts.push(item));
  }

  private handleLikeOrDislike(message: string, isLike: boolean): void {
    const parsedMessage = JSON.parse(message);
    const postToUpdate: PostsResponseModel | undefined = this.posts.find((el: PostsResponseModel): boolean => el.post.id === parsedMessage.PostId);

    if (postToUpdate) {
      postToUpdate.post.likeCount += isLike ? 1 : -1;
      if (parsedMessage.UserId === this._tokenService.extractUserFromToken()?.Id) {
        postToUpdate.post.userHasLiked = isLike;
      }
    }
  }
}
