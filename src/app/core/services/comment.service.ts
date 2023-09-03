import { Injectable } from '@angular/core';
import { HttpCommentService } from "../http/http-comment.service";
import { CommentFormModel } from "../models/comment/Comment-form.model";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _httpCommentService: HttpCommentService) { }

  postComment = (postId: number, form: CommentFormModel): Observable<ApiResponseModel<string>> => {
    return this._httpCommentService.postComment(postId, form);
  }
}
