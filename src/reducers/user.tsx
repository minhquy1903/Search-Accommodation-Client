import { IAction } from '../interfaces/action';

interface IUser {
  phone: string;
  name: string;
  password: string;
}

const initState: IUser = {
  phone: '123456789',
  name: 'Vo Mnh Quy',
  password: '123456789',
};

const userReducer: React.Reducer<IUser, IAction<any>> = (
  state = initState,
  action: IAction<any>,
) => {
  switch (action.type) {
    case 'LOGIN':
      return state;

    case 'LOGIN_SUCCESS':
      return state;

    case 'LOGIN_FAILED':
      return state;

    case 'LOGOUT':
      return state;

    default:
      return state;
  }
};

export default userReducer;
