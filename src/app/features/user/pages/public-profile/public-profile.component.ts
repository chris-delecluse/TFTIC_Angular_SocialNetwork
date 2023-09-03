import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../core/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { FullPublicProfileModel } from "../../../../core/models/user/Full-public-profile.model";
import { FriendStatus } from "../../../../core/enums/friend-status";
import { PostsResponseModel } from "../../../../core/models/post/Posts-response.model";
import { PostService } from "../../../../core/services/post.service";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  protected readonly FriendStatus = FriendStatus;

  userData: FullPublicProfileModel = {
    id: 0,
    firstName: 'unknown',
    lastName: ''
  };

  posts!: PostsResponseModel[];

  constructor(
    private readonly _userService: UserService,
    private readonly _postService: PostService,
    private readonly _router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFullPublicProfile();
  }

  getFullPublicProfile = (): void => {
    this._userService.getFullPublicProfileById(this._router.snapshot.params['id']).subscribe({
      next: (response: ApiResponseModel<FullPublicProfileModel>): void => {
        if (response.statusCode === 200) {
          this.userData = response.data;
          this.getPosts(response.data.id)
        }
      }
    })
  }

  getPosts = (userId: number): void => {
    this._postService.getAllPostByUserId(userId, 0, false).subscribe({
      next: (response: ApiResponseModel<PostsResponseModel[]>): void => {
        this.posts = response.data;
      }
    })
  }

  addMorePosts = ($event: PostsResponseModel[]): void => {
    $event.forEach((item: PostsResponseModel) => this.posts.push(item));
  }

  updateUserProfile = ($event: string): void => {
    this.userData.friendRequestStatus = $event;
  }
}
