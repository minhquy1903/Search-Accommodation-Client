export default interface IResponse<T> {
  result: boolean;
  data: T;
  error: any;
}
