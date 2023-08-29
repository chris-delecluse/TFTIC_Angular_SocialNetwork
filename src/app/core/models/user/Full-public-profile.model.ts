import { FullPrivateProfileModel } from "./Full-private-profile.model";

export interface FullPublicProfileModel extends FullPrivateProfileModel {
  friendRequestStatus?: string;
  isFriendRequestInitiator?: boolean;
}
