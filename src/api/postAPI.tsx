import axiosClient from './AxiosClient';
import IResponse from '../interfaces/response';

const postAPI = {
	getNumberOfPosts: (body: any) => {
		return axiosClient.post<IResponse<any>>(`post/count-posts`, body);
	},
	getPostDetail: (_id: string) => {
		return axiosClient.get<IResponse<any>>(`post/get-post/${_id}`);
	},
	getFilterPost: (body: any, page: number) => {
		return axiosClient.post<IResponse<any>>(`post/filter-posts/${page}`, body);
	},
	createPost: (body: any) => {
		return axiosClient.post<any>(`post/create-post`, body);
	},
	updatePost: (body: any) => {
		return axiosClient.put<IResponse<any>>(`post/update-post`, body);
	},
	getPostByUserId: (_id: string) => {
		return axiosClient.get<IResponse<any>>(`post/get-posts-by-userid/${_id}`);
	},
};

export default postAPI;
