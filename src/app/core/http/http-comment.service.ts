import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CommentFormModel } from "../models/comment/Comment-form.model";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpCommentService {

  constructor(private _httpClient: HttpClient) { }

  postComment = (postId: number, form: CommentFormModel): Observable<ApiResponseModel<string>> => {
    console.log(form)
    return this._httpClient.post<ApiResponseModel<string>>(`${environment.apiUrl}/post/${postId}/comment`, form);
  }
}
