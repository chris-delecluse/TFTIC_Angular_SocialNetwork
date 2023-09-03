import { Injectable } from '@angular/core';
import { HttpPostService } from "../http/http-post.service";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { PostsResponseModel } from "../models/post/Posts-response.model";
import { PostFormModel } from "../models/post/Post-form.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private _httpPostService: HttpPostService) { }

  getAllPost = (offset: number, isDeleted: boolean): Observable<ApiResponseModel<PostsResponseModel[]>>  => {
    return this._httpPostService.getAllPost(offset, isDeleted)
  }

  addPost = (form: PostFormModel): Observable<ApiResponseModel<string>> => {
    return this._httpPostService.addPost(form);
  }
}
