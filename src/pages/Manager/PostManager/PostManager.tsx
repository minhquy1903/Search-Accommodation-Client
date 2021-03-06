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

	const getRefreshPosts = async (
		pageNumber: number,
		listFilterPostHold: any,
	) => {
		try {
			let idUser = JSON.parse(localStorage.getItem('userInformation')!)._id;

			const data = await postAPI.getPostByUserId(idUser);
			console.log('trc khi loc', listFilterPostHold);

			const dataInit = data.data.data;

			//listFilterPostHold=
			setListPost(data.data.data);
			setTypePost(0);
			setTypeStatus(5);
			// setTotalPages(data.data.data.length);
			setListFilterPost(dataInit.slice(0, 5));
		} catch (error) {}
	};

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

		if (typeStatus !== '' && typeStatus !== 5) {
			if (typeStatus === 1) {
				data = data.filter((post: any) => {
					// let start = new Date();
					// let end = new Date(post.timeEnd);
					// if (start.getTime() <= end.getTime()) {
					// 	return post;
					// }
					if (post.status === 1) return post;
				});
				//console.log('sau 6', data);
			} else if (typeStatus === 2) {
				data = data.filter((post: any) => {
					// let start = new Date();
					// let end = new Date(post.timeEnd);
					// if (start.getTime() > end.getTime()) {
					// 	return post;
					// }
					if (post.status === 2) return post;
				});
			} else {
				data = data.filter((post: any) => {
					if (post.status === 0) return post;
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
	};

	const handlePageChange = (e: any) => {
		console.log(e.selected);
		setPage(e.selected);
	};

	return (
		<div>
			{/* header__page__post */}
			<div className='div__header__manager__container'>
				<h1 className='h1__header__manager'>Qu???n l?? tin ????ng</h1>
				<div className='div__header__manager__container'>
					<select
						name='typePost'
						id='typePost'
						className='select__manager'
						onChange={changeSelectTypePost}
						value={typePost}
					>
						<option value='' disabled selected hidden>
							L???c theo lo???i VIP
						</option>
						<option value='0'>T???t c??? tin</option>
						<option value='5'>Tin th?????ng</option>
						<option value='4'>Tin VIP 3</option>
						<option value='3'>Tin VIP 2</option>
						<option value='2'>Tin VIP 1</option>
						<option value='1'>Tin VIP n???i b???t</option>
					</select>
					<select
						name='typeAc'
						id='typeAc'
						className='select__manager'
						onChange={changeSelectTypeStatus}
						value={typeStatus}
					>
						<option value='' disabled selected hidden>
							L???c theo tr???ng th??i
						</option>
						<option value='5'>T???t c??? tr???ng th??i</option>
						<option value='1'>Tin ??ang hi???n th???</option>
						<option value='2'>Tin ??ang ???n</option>
						<option value='3'>Tin ??ang ch??? duy???t</option>
					</select>
				</div>
			</div>
			<div className='div__line__header'></div>
			<div className='div__manager__container'>
				<table className='table__manager'>
					<thead>
						<tr>
							<th>M?? tin</th>
							<th className='th__image'>???nh ?????i di???n</th>
							<th>Ti??u ?????</th>
							<th>Gi??</th>
							<th>Ng??y b???t ?????u</th>
							<th>Ng??y h???t h???n</th>
							<th>Tr???ng th??i</th>
						</tr>
					</thead>
					<tbody>
						{listFilterPost.length === 0 ? (
							<tr>
								<td colSpan={7}>
									B???n ch??a c?? ????ng tin n??o. B???m
									<Link to='/quan-ly/dang-bai'> v??o ????y </Link>
									????? b???t ?????u ????ng tin
								</td>
							</tr>
						) : (
							listFilterPost.map((post: any) => (
								<PostManagerItem
									key={post.id}
									post={post}
									refresh={() => getRefreshPosts(page, listFilterPost)}
								/>
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
							Li??n h??? v???i ch??ng t??i n???u b???n c???n h??? tr???:
						</div>
						<div className='div__support__item'>
							<span className='span__title__item'>H??? TR??? THANH TO??N</span>
							<span className='span__title__phone'>??i???n tho???i: 0917686234</span>
							<span className='span__title__phone'>Zalo: 0917686234</span>
						</div>
						<div className='div__support__item'>
							<span className='span__title__item'>H??? TR??? THANH TO??N</span>
							<span className='span__title__phone'>??i???n tho???i: 0917686567</span>
							<span className='span__title__phone'>Zalo: 0917686567</span>
						</div>
						<div className='div__support__item'>
							<span className='span__title__item'>H??? TR??? THANH TO??N</span>
							<span className='span__title__phone'>??i???n tho???i: 0917686798</span>
							<span className='span__title__phone'>Zalo: 0917686789</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostManager;
