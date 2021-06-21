import React from 'react';
import UpdatePostLeft from './UpdatePostLeft';
import UpdatePostRight from './UpdatePostRight';
import '../CreatePost/CreatePost.scss';

export default function UpdatePost() {
	return (
		<div>
			<h1 className='header__page__post'>Chỉnh sửa tin</h1>
			<div className='container__post__wrap'>
				<UpdatePostLeft />
				<UpdatePostRight />
			</div>
		</div>
	);
}
