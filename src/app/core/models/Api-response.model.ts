export class ApiResponseModel<T>   {
  statusCode!: number;
  isSuccess!: boolean;
  message!: string;
  data!: T;
}
