import { FormInputModel } from "../../../../core/models/ui/Form-input.model";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export const loginFormInputs: FormInputModel[] = [
  {
    name: 'email',
    errorMessage: 'Email is invalid.',
    icon: faUser,
    placeholder: 'email@example.com'
  },
  {
    name: 'password',
    errorMessage: 'Password is invalid.',
    icon: faLock,
    placeholder: 'password12@Example'
  }
];
