import axiosClient from './AxiosClient';
import IResponse from '../interfaces/response';

const userAPI = {
	signUp: (body: object) => {
		return axiosClient.post<IResponse<any>>('/user/sign-up', body);
	},

	login: (body: object) => {
		return axiosClient.post<IResponse<any>>('/user/login', body);
	},
	phoneConfirm: (_id: string) => {
		return axiosClient.put<IResponse<any>>(`/user/phone-confirm/${_id}`);
	},
	getUserInfomation: (_id: string) => {
		return axiosClient.get<IResponse<any>>(`/user/get-user-info/${_id}`);
	},
	updateUserMoney: (_id: string, body: any) => {
		return axiosClient.put<IResponse<any>>(`/user/update-money/${_id}`, body);
	},
};

export default userAPI;
