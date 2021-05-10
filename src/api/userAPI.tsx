import axiosClient from './AxiosClient';
import IResponse from '../interfaces/response';

const userAPI = {
  signUp: (body: object) => {
    return axiosClient.post<IResponse<any>>('/user/sign-up', body);
  },

  login: (body: object) => {
    return axiosClient.post<IResponse<any>>('/user/login', body);
  },
  phoneConfirm: (id: string) => {
    return axiosClient.put<IResponse<any>>(`/user/phone-confirm/${id}`);
  },
};

export default userAPI;
