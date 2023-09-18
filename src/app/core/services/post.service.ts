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

  getAllPost = (offset: number, isDeleted: boolean): Observable<ApiResponseModel<PostsResponseModel[]>> => {
    return this._httpPostService.getAllPost(offset, isDeleted)
  }

  getAllPostByUserId = (userId: number, offset: number, isDeleted: boolean): Observable<ApiResponseModel<PostsResponseModel[]>> => {
    return this._httpPostService.getAllPostByUserId(userId, offset, isDeleted);
  }

  addPost = (form: PostFormModel): Observable<ApiResponseModel<string>> => {
    return this._httpPostService.addPost(form);
  }

  toPost = (string: string): PostsResponseModel => {
    const parsed = JSON.parse(string);

    return {
      post: {
        id: parsed.Post.Id,
        userId: parsed.Post.UserId,
        content: parsed.Post.Content,
        firstName: parsed.Post.FirstName,
        lastName: parsed.Post.LastName,
        commentCount: parsed.Post.CommentCount,
        likeCount: parsed.Post.LikeCount,
        userHasLiked: parsed.Post.UserHasLiked,
        profilePicture: parsed.Post.ProfilePicture,
        createdAt: parsed.Post.CreatedAt
      }, comments: []
    };
  }
}
