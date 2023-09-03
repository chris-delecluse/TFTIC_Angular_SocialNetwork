import { Injectable } from '@angular/core';
import { HttpLikeService } from "../http/http-like.service";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";

@Injectable({
  providedIn: 'root'
})
export class LikeServiceService {

  constructor(private _httpLikeService: HttpLikeService) { }

  postAddLike = (postId: number): Observable<ApiResponseModel<string>> => {
    return this._httpLikeService.postAddLike(postId);
  }

  postRemoveLike = (postId: number): Observable<ApiResponseModel<string>> => {
    return this._httpLikeService.postRemoveLike(postId);
  }
}
