export interface CommentResponseModel {
  id: number;
  userId: number;
  postId: number;
  content: string;
  createdAt: Date;
  commentProfilePicture?: string;
}
