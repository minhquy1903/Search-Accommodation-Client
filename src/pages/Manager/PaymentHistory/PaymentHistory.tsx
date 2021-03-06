import React, { useState, useEffect } from 'react';
import PaymentHistoryItem from './PaymentHistoryItem';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const PaymentHistory = () => {
	const [listOrder, setListOrder] = useState<any>([]);
	const [listFilterOrder, setListFilterOrder] = useState<any>([]);
	const [page, setPage] = useState<number>(0);
	const [totalPages, setTotalPages] = useState<number>(0);
	useEffect(() => {
		const getAllPosts = async () => {
			try {
				let idUser = JSON.parse(localStorage.getItem('userInformation')!)._id;
				const res = await axios.get(
					`http://localhost:8000/api/order/getByUserId/${idUser}`,
				);
				// const data = await postAPI.getPostByUserId(idUser);
				console.log('list hoa don', res.data.data.data);

				setListOrder(res.data.data.data);
				setTotalPages(res.data.data.data.length);
				setListFilterOrder(res.data.data.data.slice(0, 5));
			} catch (error) {}
		};
		getAllPosts();
	}, []);

	// useEffect(() => {

	// }, [page]);

	const handlePageChange = (e: any) => {
		console.log(e.selected);
		setPage(e.selected);
		let data = [...listOrder];
		data = data.slice(e.selected * 5, e.selected * 5 + 5);
		setListFilterOrder(data);
	};
	return (
		<div>
			{/* header__page__post */}
			<div className='div__header__manager__container'>
				<h1 className='h1__header__manager'>Lịch sử thanh toán tin</h1>
				{/* <div className='div__header__manager__container'></div> */}
			</div>
			<div className='div__line__header'></div>
			<div className='div__manager__container'>
				<table className='table__manager'>
					<thead>
						<tr>
							<th>Thời gian </th>
							<th>Mã thanh toán</th>
							<th>Mã tin đăng</th>
							<th>Loại tin</th>
							<th>Số ngày</th>
							<th>Phí</th>
							{/* <th>Trạng thái</th> */}
							{/* <th>Trạng thái</th> */}
						</tr>
					</thead>
					<tbody>
						{listFilterOrder.length === 0 ? (
							<tr>
								<td colSpan={7}>Bạn chưa có đăng tin nào.</td>
							</tr>
						) : (
							listFilterOrder.map((order: any) => (
								<PaymentHistoryItem
									key={order._id}
									order={order}
									// key={post.id}
									// post={post}
									// refresh={() => getRefreshPosts(page, listFilterPost)}
								/>
							))
						)}
					</tbody>
				</table>
			</div>
			{listFilterOrder.length > 0 && (
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

export default PaymentHistory;
