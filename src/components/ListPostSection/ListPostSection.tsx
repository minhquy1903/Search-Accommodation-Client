import React from 'react';

import PostItem from '../PostItem/PostItem';
import Pagination from '../Pagination/Pagination';
import { IPost } from '../../interfaces/post';

import './ListPostSection.scss';

interface Props {
	posts: Array<IPost>;
	setPosts: any;
}

const ListPostSection: React.FC<Props> = ({ posts, setPosts }) => {
	return (
		<section className='list-post-section'>
			<div className='section-header'>
				<span className='section-title'>Danh sách tin đăng</span>
			</div>
			<div className='post-list'>
				{/* {posts && posts.map((post, i) => <PostItem data={post} key={i} />)} */}
				{posts &&
					posts.map((post, i) => {
						if (post._id !== '60d8d4545c57cc6c88ef5f84') {
							return <PostItem data={post} key={i} />;
						}
					})}
			</div>
			<Pagination setPosts={setPosts} />
		</section>
	);
};

export default ListPostSection;
