import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/Api-response.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpLikeService {

  constructor(private _httpClient: HttpClient) { }

  postAddLike = (postId: number): Observable<ApiResponseModel<string>> => {
    return this._httpClient.post<ApiResponseModel<string>>(`${environment.apiUrl}/post/${postId}/like`, null)
  }

  postRemoveLike = (postId: number): Observable<ApiResponseModel<string>> => {
    return this._httpClient.delete<ApiResponseModel<string>>(`${environment.apiUrl}/post/${postId}/like`)
  }
}
