export interface FullPrivateProfileModel {
  id: number;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  backdropImage?: string;
  gender?: string;
  birthDate?: Date;
  country?: string;
  relationShipStatus?: string;
}
