import { CommentResponseModel } from "../comment/Comment-response.model";
import { PostResponseModel } from "./Post-response.model";

export interface PostsResponseModel {
  post: PostResponseModel;
  comments: CommentResponseModel[];
}
