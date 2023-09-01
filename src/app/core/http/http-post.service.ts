import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiResponseModel } from "../models/Api-response.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { PostsResponseModel } from "../models/post/Posts-response.model";

@Injectable({
  providedIn: 'root'
})
export class HttpPostService {

  constructor(private _httpClient: HttpClient) { }

  getAllPost = (offset: number, isDeleted: boolean): Observable<ApiResponseModel<PostsResponseModel[]>> => {
    return this._httpClient.get<ApiResponseModel<PostsResponseModel[]>>(`${environment.apiUrl}/post?offset=${offset}&isDeleted=${isDeleted}`)
  }
}
