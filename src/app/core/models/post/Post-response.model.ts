export interface PostResponseModel {
  id: number;
  userId: number,
  content: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  commentCount: number;
  likeCount: number;
  createdAt: Date;
}
