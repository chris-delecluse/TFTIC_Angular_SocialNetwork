import { Injectable } from '@angular/core';
import { HttpCommentService } from "../http/http-comment.service";
import { CommentFormModel } from "../models/comment/Comment-form.model";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { CommentResponseModel } from "../models/comment/Comment-response.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _httpCommentService: HttpCommentService) { }

  postComment = (postId: number, form: CommentFormModel): Observable<ApiResponseModel<string>> => {
    return this._httpCommentService.postComment(postId, form);
  }

  toComment = (string: string): CommentResponseModel => {
    const parsed = JSON.parse(string);

    return {
      commentProfilePicture: parsed.CommentProfilePicture,
      content: parsed.Content,
      createdAt: parsed.CreatedAt,
      id: parsed.Id,
      postId: parsed.PostId,
      userId: parsed.UserId
    };
  }
}
