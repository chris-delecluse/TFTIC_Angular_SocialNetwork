import { BasicUserProfileModel } from "../user/Basic-user-profile.model";

export interface MessageResponseModel {
  id: number;
  from: BasicUserProfileModel;
  to: BasicUserProfileModel;
  content: string;
  createdAt: Date
}
