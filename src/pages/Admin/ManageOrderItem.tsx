import React from 'react';
import moment from 'moment';
export default function ManageOrderItem(props: any) {
	const time = new Date(props.order.date);
	function renderTypePost(type: number) {
		switch (type) {
			case 5:
				return 'Tin thường (2.000 đ/ngày)';
			case 4:
				return 'Tin VIP 3 (10.000 đ/ngày)';
			case 3:
				return 'Tin VIP 2 (20.000 đ/ngày)';
			case 2:
				return 'Tin VIP 1 (30.000 đ/ngày)';
			case 1:
				return 'Tin VIP nổi bật (50.000 đ/ngày)';
			default:
				break;
		}
	}
	return (
		<tr>
			<td className='td__info__time__order'>
				<span /*className='span__info__phone'*/>
					{moment(time).format('DD/MM/YYYY  HH:mm')}
				</span>
			</td>
			<td className='td__info__postInfo__order__manager'>
				<div /*className='div__image__container'*/>#{props.order._id}</div>
			</td>
			<td className='td__info__postInfo__order__manager'>
				<div /*className='div__image__container'*/>#{props.order.idPost}</div>
			</td>
			<td>
				<div>{props.order.user_id.name}</div>
				<div>{props.order.user_id.phone}</div>
			</td>
			<td className='td__info__typePost__order'>
				<span className=''>{renderTypePost(props.order.typePost)}</span>
			</td>

			<td className='td__info__numberDay__order'>
				<span className=''>{props.order.numberDay} ngày</span>
			</td>
			<td>{new Intl.NumberFormat('de-DE').format(props.order.total)}đ</td>
		</tr>
	);
}
