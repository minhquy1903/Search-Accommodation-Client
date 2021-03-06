import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';

export default function UpdatePostRight() {
	const { typePost, typeTime, dateEnd, dateEndAccommodation, money } =
		useSelector((state: AppState) => state.date);
	const { userInformation } = useSelector((state: AppState) => state.user);
	let now = new Date();
	// let dateTimeNow = new Date();

	// dateTimeNow.setDate(dateTimeNow.getDate() + dateEnd);

	let checkTimeEnd = new Date(dateEndAccommodation);
	// let dateTimeEnd = new Date(dateEndAccommodation);
	// dateTimeEnd.setDate(now.getDate() - checkTimeEnd.getDate());
	return (
		<div className='post__col__right'>
			<div className='note__post'>
				<h4 className='note__post__title'>Lưu ý khi đăng tin</h4>
				<ul>
					<li className='create_square'>
						Nội dung phải viết bằng tiếng Việt có dấu.
					</li>
					<li className='create_square'>
						Tiêu đề tin không dài quá 100 kí tự.
					</li>
					<li className='create_square'>
						Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu
						quả hơn.
					</li>
					<li className='create_square'>
						Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy
						chọn vị trí tin rao của bạn một cách chính xác nhất.
					</li>
					<li className='create_square'>
						Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với
						tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!
					</li>
				</ul>
			</div>
			<div className='bill__info'>
				<h5 className='bill__info__title'>Thông tin bài đăng</h5>
				<table className='bill__info__table'>
					<tbody className='tbody__border'>
						<tr>
							<td>Bạn đang có:</td>
							<td>
								{new Intl.NumberFormat('de-DE').format(userInformation.money)}
							</td>
						</tr>
						<tr>
							<td>Loại tin:</td>
							<td>{typePost}</td>
						</tr>
						{/* <tr>
							<td>Gói thời gian:</td>
							<td>{typeTime}</td>
						</tr> */}
						{/* <tr>
							<td>Đơn giá:</td>
							<td>2000/ngày</td>
						</tr> */}
						{/* <tr>
							<td>Số ngày còn lại:</td>
							<td>{dateTimeEnd}</td>
						</tr> */}
						{/* 17:48, 14/6/202 */}
						<tr>
							<td>Ngày hết hạn</td>

							<td>{`${checkTimeEnd.getHours()}:${checkTimeEnd.getMinutes()}, ${checkTimeEnd.getDate()}/${
								checkTimeEnd.getMonth() + 1
							}/${checkTimeEnd.getFullYear()}`}</td>
						</tr>
						{/* <tr>
							<td>Ngày hết hạn mới:</td>
							{now.getTime() > checkTimeEnd.getTime() ? (
								<td>{`${dateTimeNow.getHours()}:${dateTimeNow.getMinutes()}, ${
									dateTimeNow.getMonth() + 1
								}/${dateTimeNow.getDate()}/${dateTimeNow.getFullYear()}`}</td>
							) : (
								<td>{`${dateTimeEnd.getHours()}:${dateTimeEnd.getMinutes()}, ${
									dateTimeEnd.getMonth() + 1
								}/${dateTimeEnd.getDate()}/${dateTimeEnd.getFullYear()}`}</td>
							)}
						</tr> */}
						{/* <tr>
							<td>Thành tiền:</td>
							<td>
								<span className='bill_info_total'>10000</span>
							</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		</div>
	);
}
