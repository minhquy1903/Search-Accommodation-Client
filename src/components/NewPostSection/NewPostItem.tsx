import React from 'react';
import { subtractTime } from '../../services';

import { Link } from 'react-router-dom';
import { IPost } from '../../interfaces/post';

interface Props {
	post: IPost;
}

const NewPostItem: React.FC<Props> = ({ post }) => {
	const createPathName = (str: string): string => {
		return str
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace('%', '')
			.replace(/ /g, '-')
			.toLowerCase();
	};
	const pathname = createPathName(post.accommodation.title);

	return (
		<div className='item-container'>
			<Link
				to={{
					pathname: `thong-tin-chi-tiet/${pathname}`,
					search: `_id=${post._id}`,
				}}
				className='item'
			>
				<figure>
					<img
						src={post.accommodation.images[0].src}
						alt={post.accommodation.images[0].alt}
					/>
				</figure>
				<div className='post-meta'>
					<h4 className='post-title'>{post.accommodation.title}</h4>
					<div>
						<span className='room-price'>
							{post.accommodation.retail} triệu/tháng
						</span>
						<span className='post-time'>
							{subtractTime(new Date(post.timeStart!))}
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default NewPostItem;
