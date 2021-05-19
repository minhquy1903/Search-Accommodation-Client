import axiosClient from './AxiosClient';
import IResponse from '../interfaces/response';

const postAPI = {
  getHotPosts: () => {
    return axiosClient.get<IResponse<any>>('post/get-hot-post');
  },
  getPosts: (page: number) => {
    return axiosClient.get<IResponse<any>>(`post/get-post-page/${page}`);
  },
  getNumberOfPosts: () => {
    return axiosClient.get<IResponse<any>>(`post/count-posts/`);
  },
};

export default postAPI;
