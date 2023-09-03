import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiResponseModel } from "../models/Api-response.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { PostsResponseModel } from "../models/post/Posts-response.model";
import { PostFormModel } from "../models/post/Post-form.model";

@Injectable({
  providedIn: 'root'
})
export class HttpPostService {

  constructor(private _httpClient: HttpClient) { }

  getAllPost = (offset: number, isDeleted: boolean): Observable<ApiResponseModel<PostsResponseModel[]>> => {
    return this._httpClient.get<ApiResponseModel<PostsResponseModel[]>>(`${environment.apiUrl}/post?offset=${offset}&isDeleted=${isDeleted}`)
  }

  getAllPostByUserId = (userId: number, offset: number, isDeleted: boolean): Observable<ApiResponseModel<PostsResponseModel[]>> => {
    return this._httpClient.get<ApiResponseModel<PostsResponseModel[]>>(`${environment.apiUrl}/post/user/${userId}?offset=${offset}&isDeleted=${isDeleted}`);
  }

  addPost = (form: PostFormModel): Observable<ApiResponseModel<string>> => {
    return this._httpClient.post<ApiResponseModel<string>>(`${environment.apiUrl}/post`, form);
  }
}
