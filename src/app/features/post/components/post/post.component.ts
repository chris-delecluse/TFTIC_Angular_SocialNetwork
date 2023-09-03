import { Component, Input, OnInit } from '@angular/core';
import { PostResponseModel } from "../../../../core/models/post/Post-response.model";
import { CommentResponseModel } from "../../../../core/models/comment/Comment-response.model";
import { faCancel, faComment, faThumbsUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { LikeServiceService } from "../../../../core/services/like-service.service";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { CommentFormModel } from "../../../../core/models/comment/Comment-form.model";
import { CommentService } from "../../../../core/services/comment.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  protected readonly faThumbsUp: IconDefinition = faThumbsUp;
  protected readonly faCancel: IconDefinition = faCancel;
  protected readonly faComment: IconDefinition = faComment;

  isLikeHovered!: boolean;

  @Input()
  post !: PostResponseModel;

  @Input()
  comment !: CommentResponseModel[];

  constructor(
    private _likeService: LikeServiceService,
    private _commentService: CommentService
  ) {}

  ngOnInit = (): void => {
    this.isLikeHovered = false;
  }

  likeOnClick = (): void => {
    if (!this.post.userHasLiked)
      this._likeService.postAddLike(this.post.id).subscribe({
        next: (response: ApiResponseModel<string>) => console.log(response)
      })
    else
      this._likeService.postRemoveLike(this.post.id).subscribe({
        next: (response: ApiResponseModel<string>) => console.log(response)
      })
  }

  commentOnClick = ($event: CommentFormModel) => {
    this._commentService.postComment(this.post.id, $event).subscribe({
      next: (response: ApiResponseModel<string>) => console.log(response)
    })
  }
}
