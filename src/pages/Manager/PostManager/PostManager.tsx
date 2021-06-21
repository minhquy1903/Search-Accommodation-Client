import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PostManager.scss';
import Select from 'react-select';
import postAPI from '../../../api/postAPI';
import PostManagerItem from './PostManagerItem';
import ReactPaginate from 'react-paginate';

const PostManager = () => {
	const [listPost, setListPost] = useState<any>([]);
	const [listFilterPost, setListFilterPost] = useState<any>([]);

	const [typePost, setTypePost] = useState<any>('');
	const [typeStatus, setTypeStatus] = useState<any>('');

	const [page, setPage] = useState<number>(0);
	const [totalPages, setTotalPages] = useState<number>(0);

	useEffect(() => {
		const getAllPosts = async () => {
			try {
				let idUser = JSON.parse(localStorage.getItem('userInformation')!)._id;

				const data = await postAPI.getPostByUserId(idUser);
				console.log(data.data.data);

				setListPost(data.data.data);
				setTotalPages(data.data.data.length);
				setListFilterPost(data.data.data.slice(0, 5));
			} catch (error) {}
		};
		getAllPosts();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 75);
	}, [listFilterPost]);

	useEffect(() => {
		setPage(0);
	}, [typePost, typeStatus]);

	useEffect(() => {
		let data = [...listPost];
		if (typePost !== '' && typePost !== 0) {
			console.log('typePost', typePost);

			data = listPost.filter((post: any) => post.typePost === Number(typePost));
		}

		if (typeStatus !== '') {
			if (typeStatus === 6) {
				data = data.filter((post: any) => {
					let start = new Date();

					let end = new Date(post.timeEnd);
					if (start.getTime() <= end.getTime()) {
						return post;
					}
				});
				//console.log('sau 6', data);
			} else {
				data = data.filter((post: any) => {
					let start = new Date();
					let end = new Date(post.timeEnd);
					if (start.getTime() > end.getTime()) {
						return post;
					}
				});
			}
		}
		console.log('asd', data.length);

		setTotalPages(data.length);
		data = data.slice(page * 5, page * 5 + 5);

		setListFilterPost(data);
	}, [typePost, typeStatus, page]);

	const changeSelectTypePost = (e: any) => {
		let type = e.target.value;
		//console.log(type);
		setTypePost(Number(type));
		// if (type >= 1 && type <= 5) {
		// 	let data = listPost.filter((post: any) => post.typePost === Number(type));
		// 	setListFilterPost(data);
		// 	//console.log('arr', data);
		// }

		// if (type === '') {
		// 	setListFilterPost(listPost);
		// }
	};

	const changeSelectTypeStatus = (e: any) => {
		let type = Number(e.target.value);
		setTypeStatus(type);
		// if (type === 6) {
		// 	console.log('type', type);
		// 	let arr = listFilterPost.filter((post: any) => {
		// 		let start = new Date();
		// 		let end = new Date(post.timeEnd);
		// 		if (start.getTime() <= end.getTime()) {
		// 			return post;
		// 		}
		// 	});
		// 	setListFilterPost(arr);
		// } else {
		// 	let arr = listFilterPost.filter((post: any) => {
		// 		let start = new Date();
		// 		let end = new Date(post.timeEnd);
		// 		if (start.getTime() > end.getTime()) {
		// 			return post;
		// 		}
		// 	});
		// 	setListFilterPost(arr);
		// }
	};

	const handlePageChange = (e: any) => {
		console.log(e.selected);
		setPage(e.selected);
	};

	return (
		<div>
			{/* header__page__post */}
			<div className='div__header__manager__container'>
				<h1 className='h1__header__manager'>Quản lý tin đăng</h1>
				<div className='div__header__manager__container'>
					<select
						name='typePost'
						id='typePost'
						className='select__manager'
						onChange={changeSelectTypePost}
					>
						<option value='' disabled selected hidden>
							Lọc theo loại VIP
						</option>
						<option value='0'>Tất cả tin</option>
						<option value='5'>Tin thường</option>
						<option value='4'>Tin VIP 3</option>
						<option value='3'>Tin VIP 2</option>
						<option value='2'>Tin VIP 1</option>
						<option value='1'>Tin VIP nổi bật</option>
					</select>
					<select
						name='typeAc'
						id='typeAc'
						className='select__manager'
						onChange={changeSelectTypeStatus}
					>
						<option value='' disabled selected hidden>
							Lọc theo trạng thái
						</option>
						<option value='6'>Tin đang hiển thị</option>
						<option value='7'>Tin hết hạn</option>
					</select>
				</div>
			</div>
			<div className='div__line__header'></div>
			<div className='div__manager__container'>
				<table className='table__manager'>
					<thead>
						<tr>
							<th>Mã tin</th>
							<th className='th__image'>Ảnh đại diện</th>
							<th>Tiêu đề</th>
							<th>Giá</th>
							<th>Ngày bắt đầu</th>
							<th>Ngày hết hạn</th>
							<th>Trạng thái</th>
						</tr>
					</thead>
					<tbody>
						{listFilterPost.length === 0 ? (
							<tr>
								<td colSpan={7}>
									Bạn chưa có đăng tin nào. Bấm
									<Link to='/quan-ly/dang-bai'> vào đây </Link>
									để bắt đầu đăng tin
								</td>
							</tr>
						) : (
							listFilterPost.map((post: any) => (
								<PostManagerItem key={post.id} post={post} />
							))
						)}
					</tbody>
				</table>
			</div>
			{listFilterPost.length > 0 && (
				<ReactPaginate
					pageCount={Math.ceil(totalPages / 5)}
					pageRangeDisplayed={5}
					marginPagesDisplayed={5}
					previousLabel={'Prev'}
					nextLabel={'Next'}
					onPageChange={handlePageChange}
					containerClassName={'pagination'}
					pageClassName={'paginated-btn'}
					breakClassName={'paginated-btn'}
					previousClassName={'prev-btn'}
					nextClassName={'next-btn'}
					disabledClassName={'disabled-btn'}
					activeClassName={'active-btn'}
					forcePage={page}
				/>
			)}
			<div className='div__support__container'>
				<div className='div__section__support'>
					<div className='div__support__bg'></div>
					<div className='div__support__list'>
						<div className='div__support__title'>
							Liên hệ với chúng tôi nếu bạn cần hỗ trợ:
						</div>
						<div className='div__support__item'>
							<span className='span__title__item'>HỖ TRỢ THANH TOÁN</span>
							<span className='span__title__phone'>Điện thoại: 0917686234</span>
							<span className='span__title__phone'>Zalo: 0917686234</span>
						</div>
						<div className='div__support__item'>
							<span className='span__title__item'>HỖ TRỢ THANH TOÁN</span>
							<span className='span__title__phone'>Điện thoại: 0917686567</span>
							<span className='span__title__phone'>Zalo: 0917686567</span>
						</div>
						<div className='div__support__item'>
							<span className='span__title__item'>HỖ TRỢ THANH TOÁN</span>
							<span className='span__title__phone'>Điện thoại: 0917686798</span>
							<span className='span__title__phone'>Zalo: 0917686789</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostManager;
