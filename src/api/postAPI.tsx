import axiosClient from "./AxiosClient";
import IResponse from "../interfaces/response";

const postAPI = {
	getNumberOfPosts: (body: any) => {
		return axiosClient.post<IResponse<any>>(`post/count-posts`, body);
	},
	getPostDetail: (_id: string) => {
		return axiosClient.get<IResponse<any>>(`post/get-post/${_id}`);
	},
	getFilterPost: (body: any, page: number) => {
		return axiosClient.post<IResponse<any>>(
			`post/filter-posts/${page}`,
			body,
		);
	},
	createPost: (body: any) => {
		return axiosClient.post(`post/create-post`, body);
	},
	updatePost: (id: string, body: any) => {
		return axiosClient.put<IResponse<any>>(`post/${id}`, body);
	},
	getPostByUserId: (_id: string) => {
		return axiosClient.get<IResponse<any>>(
			`post/get-posts-by-userid/${_id}`,
		);
	},
	confirmPost: (_id: string, body: any) => {
		return axiosClient.put<IResponse<any>>(`post/confirm/${_id}`, body);
	},
	deletePostById: (_id: string) => {
		return axiosClient.delete<IResponse<any>>(`post/delete/${_id}`);
	},
};

export default postAPI;
