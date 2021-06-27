import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Manager/PostManager/PostManager.scss';
import Select from 'react-select';
import postAPI from '../../../src/api/postAPI';
import ReactPaginate from 'react-paginate';
import { AiOutlineEdit } from 'react-icons/ai';

const PostManager = () => {
	const [listPost, setListPost] = useState<any>([]);
	const [listFilterPost, setListFilterPost] = useState<any>([]);

	const [typePost, setTypePost] = useState<any>(null);
	const [typeStatus, setTypeStatus] = useState<any>(null);

	const [page, setPage] = useState<number>(0);
	const [totalPages, setTotalPages] = useState<number>(0);

	const getAllPosts = async (filter: any = {}, pageNumber: number = 1) => {
		try {
			const data = await postAPI.getFilterPost(filter, pageNumber);
			const countData = await postAPI.getNumberOfPosts(filter);
			console.log(data.data.data);
			console.log('số lượng bài', countData.data.data);

			setListPost(data.data.data);
			setTotalPages(countData.data.data);
			setListFilterPost(data.data.data /*.slice(0, 15)*/);
		} catch (error) {}
	};
	useEffect(() => {
		getAllPosts();
	}, []);

	const getPostsReturn = async (filter: any = {}, pageNumber: number = 1) => {
		try {
			const data = await postAPI.getFilterPost(filter, pageNumber);
			//console.log('dasdasdas', data.data.data);

			return data.data.data;
		} catch (error) {}
	};

	const countPostsReturn = async (filter: any = {}, pageNumber: number = 1) => {
		try {
			const data = await postAPI.getNumberOfPosts(filter);
			return data.data.data;
		} catch (error) {}
	};

	// useEffect(() => {
	// 	window.scrollTo(0, 75);
	// }, [listFilterPost]);

	useEffect(() => {
		setPage(0);
	}, [typePost, typeStatus]);

	useEffect(() => {
		const changeNumberPosts = async () => {
			const countData = await countPostsReturn(
				{
					typePost,
					status: 1,
				},
				page + 1,
			);
			console.log('So bai post', countData);
			setTotalPages(countData);
		};
		changeNumberPosts();
	}, [typePost, typeStatus]);

	useEffect(() => {
		// let data = [...listPost];
		// if (typePost !== '' && typePost !== 0) {
		// 	console.log('typePost', typePost);
		// 	data = listPost.filter((post: any) => post.typePost === Number(typePost));
		// }
		// if (typeStatus !== '') {
		// 	if (typeStatus === 6) {
		// 		data = data.filter((post: any) => {
		// 			let start = new Date();
		// 			let end = new Date(post.timeEnd);
		// 			if (start.getTime() <= end.getTime()) {
		// 				return post;
		// 			}
		// 		});
		// 		//console.log('sau 6', data);
		// 	} else {
		// 		data = data.filter((post: any) => {
		// 			let start = new Date();
		// 			let end = new Date(post.timeEnd);
		// 			if (start.getTime() > end.getTime()) {
		// 				return post;
		// 			}
		// 		});
		// 	}
		// }
		// console.log('asd', data.length);
		// setTotalPages(data.length);
		// data = data.slice(page * 15, page * 15 + 15);
		// setListFilterPost(data);
		const listTypePostAndStatus = async () => {
			const data = await getPostsReturn(
				{
					typePost,
					status: 1,
				},
				page + 1,
			);

			// const countData = await countPostsReturn(
			// 	{
			// 		typePost,
			// 		status: 1,
			// 	},
			// 	page + 1,
			// );
			setListFilterPost(data);
			//setTotalPages(countData);
		};
		listTypePostAndStatus();
	}, [typePost, typeStatus, page]);

	// useEffect(() => {
	// 	const changePageNumber = async () => {
	// 		const data = await getPostsReturn(
	// 			{
	// 				typePost,
	// 				status: 1,
	// 			},
	// 			page + 1,
	// 		);
	// 		setListFilterPost(data);
	// 	};
	// 	changePageNumber();
	// }, [page]);

	const changeSelectTypePost = (e: any) => {
		let type: any = Number(e.target.value);

		if (type === 0) type = null;
		console.log(type);
		setTypePost(type);
	};

	const changeSelectTypeStatus = (e: any) => {
		let type = Number(e.target.value);
		setTypeStatus(type);
	};

	const handlePageChange = async (e: any) => {
		console.log(e.selected);
		// let daspage = e.selected;
		// const postInPage = await getPostsReturn({}, daspage + 1);
		// console.log(`trang ${daspage}`, postInPage);
		// setListFilterPost(postInPage);
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
									Chưa có tin nào
									{/* Chưa có đăng tin nào. Bấm
									<Link to='/quan-ly/dang-bai'> vào đây </Link>
									để bắt đầu đăng tin */}
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
					pageCount={Math.ceil(totalPages / 15)}
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
			{/* <div className='div__support__container'>
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
			</div> */}
		</div>
	);
};

export default PostManager;

function PostManagerItem(props: any) {
	const start = new Date(props.post.timeStart);
	const end = new Date(props.post.timeEnd);

	let dateNow = new Date();

	function renderTypePost(type: number) {
		switch (type) {
			case 5:
				return 'Tin thường';
			case 4:
				return 'Tin VIP 3';
			case 3:
				return 'Tin VIP 2';
			case 2:
				return 'Tin VIP 1';
			case 1:
				return 'Tin VIP nổi bật';
			default:
				break;
		}
	}

	function renderTypeAccommodation(type: number) {
		switch (type) {
			case 5:
				return 'Căn hộ dịch vụ';
			case 4:
				return 'Mặt bằng';
			case 3:
				return 'Căn hộ';
			case 2:
				return 'Nhà nguyên căn';
			case 1:
				return 'Phòng trọ';
			default:
				break;
		}
	}

	return (
		<tr>
			<td className='td__info__phone'>
				<span className='span__info__phone'>#{props.post._id}</span>
			</td>
			<td className='td__info__image'>
				<div className='div__image__container'>
					<img src={props.post.accommodation.images[0].src} />
				</div>
			</td>
			<td className='td__info__title'>
				<div className=''>
					<span className='span__badge badge__pill badge__warning'>
						{renderTypeAccommodation(props.post.accommodation.typeAccommdation)}
					</span>
					<span className='span__title__post'>
						{props.post.accommodation.title}
					</span>
					<div className='div__container__btn__edit'>
						<Link
							className='link__btn__edit'
							to={`/quan-ly/sua-bai/${props.post._id}`}
						>
							<AiOutlineEdit />
							Chỉnh sửa
						</Link>
					</div>
					<div className='div__container__info__typePost'>
						<span>Loại tin: {renderTypePost(props.post.typePost)}</span>
					</div>
				</div>
			</td>
			<td>
				<span className='span__info__price'>
					{props.post.accommodation.retail} triệu/tháng
				</span>
			</td>
			<td>
				<time title=''>{start.toLocaleString()}</time>
			</td>
			<td>
				<time title=''>{end.toLocaleString()}</time>
			</td>
			<td>
				<span
					className={
						dateNow.getTime() <= end.getTime()
							? 'span__info__active'
							: 'do__not__active'
					}
				>
					{dateNow.getTime() <= end.getTime() ? 'Đang hiển thị' : 'Hết hạn'}
				</span>
			</td>
		</tr>
	);
}
