export default interface IUser {
  userInformation: {
    _id: string | null;
    name: string;
    phone: string;
    email?: string;
    money: number;
    type: number;
    active: boolean;
  };
  loggedIn: boolean;
  accssToken: string;
}
