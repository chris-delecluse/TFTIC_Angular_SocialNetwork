import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../../core/services/post.service";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { PostsResponseModel } from "../../../../core/models/post/Posts-response.model";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  posts!: PostsResponseModel[];

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.getAllPost(0)
  }

  getAllPost = (offset: number, isDeleted: boolean = false): void => {
    this._postService.getAllPost(offset, isDeleted).subscribe({
      next: (response: ApiResponseModel<PostsResponseModel[]>) => {
        console.log(response.data)
        return this.posts = response.data;
      }
    })
  }
}
