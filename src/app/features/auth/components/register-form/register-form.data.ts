import { FormInputModel } from "../../../../core/models/ui/Form-input.model";
import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export const registerFormInputs: FormInputModel[] = [
  {
    name: 'firstName',
    errorMessage: 'FirstName is invalid',
    icon: faUser,
    placeholder: 'firstName',
    type: 'text'
  }, {
    name: 'lastName',
    errorMessage: 'LastName is invalid',
    icon: faUser,
    placeholder: 'lastName',
    type: 'text'
  }, {
    name: 'email',
    errorMessage: 'Email is invalid',
    icon: faAt,
    placeholder: 'email',
    type: 'email'
  }, {
    name: 'password',
    errorMessage: 'Password is invalid',
    icon: faLock,
    placeholder: 'password',
    type: 'password'
  }
];
