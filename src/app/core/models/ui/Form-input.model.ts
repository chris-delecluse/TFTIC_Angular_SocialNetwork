import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class FormInputModel {
  name!: string;
  icon!: IconDefinition;
  errorMessage?: string;
  placeholder?: string;
  type?:string;
}
