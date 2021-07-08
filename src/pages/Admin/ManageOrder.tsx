import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ManageOrderItem from './ManageOrderItem';
import './ManageOrder.scss';
const ManageOrder = () => {
	const [listOrder, setListOrder] = useState<any>([]);
	const [page, setPage] = useState<number>(0);
	const [totalPages, setTotalPages] = useState<number>(0);
	useEffect(() => {
		const getAllOrder = async () => {
			const res = await axios.get(`http://localhost:8000/api/order/all?page=1`);
			console.log(res.data.data.data);
			setTotalPages(res.data.data.allPages);
			setListOrder(res.data.data.data);
		};
		getAllOrder();
	}, []);

	// const getAllOrder = async () => {
	// 	const res = await axios.get(`http://localhost:8000/api/order/all?page=1`);
	// 	console.log(res.data.data.data);
	// 	setTotalPages(res.data.data.allPages);
	// 	setListOrder(res.data.data.data);
	// };

	const handlePageChange = async (e: any) => {
		console.log(e.selected);

		const res = await axios.get(
			`http://localhost:8000/api/order/all?page=${e.selected + 1}`,
		);

		setPage(e.selected);
		setListOrder(res.data.data.data);
	};

	return (
		<div>
			{/* header__page__post */}
			<div className='div__header__manager__container'>
				<h1 className='h1__header__manager'>Quản lý hóa đơn</h1>
				{/* <div className='div__header__manager__container'></div> */}
			</div>
			<div className='div__line__header'></div>
			<div className='div__manager__container'>
				<table className='table__manager'>
					<thead>
						<tr>
							<th>Thời gian</th>
							<th>Mã thanh toán</th>
							<th>Mã tin đăng</th>
							<th>Thông tin người đăng</th>
							<th>Loại tin</th>
							<th>Số ngày</th>
							<th>Phí</th>
							{/* <th>Trạng thái</th> */}
							{/* <th>Trạng thái</th> */}
						</tr>
					</thead>
					<tbody>
						{/* ManageOrderItem */}
						{listOrder.length === 0 ? (
							<tr>
								<td colSpan={7}>Bạn chưa có đăng tin nào.</td>
							</tr>
						) : (
							listOrder.map((order: any) => (
								<ManageOrderItem
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
			{listOrder.length > 0 && (
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

export default ManageOrder;
