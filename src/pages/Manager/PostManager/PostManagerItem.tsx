import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function PostManagerItem(props: any) {
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
				<time title=''>{moment(start).format('DD/MM/YYYY  HH:mm')}</time>
			</td>
			<td>
				<time title=''>{moment(start).format('DD/MM/YYYY  HH:mm')}</time>
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
