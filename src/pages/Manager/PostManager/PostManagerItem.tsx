import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import moment from 'moment';
import postAPI from '../../../api/postAPI';

export default function PostManagerItem(props: any) {
	const start = new Date(props.post.timeStart);
	const end = new Date(props.post.timeEnd);

	let dateNow = new Date();

	const hideShowPost = async () => {
		let result = window.confirm(
			`${
				props.post.status === 1
					? 'Bạn muốn ẩn bài này'
					: 'Bạn muốn hiện bài này'
			}`,
		);

		if (result) {
			try {
				//console.log('_id', props.post._id);
				let res: any = null;
				if (props.post.status === 1)
					res = await postAPI.confirmPost(props.post._id, { status: 2 });
				else if (props.post.status === 2)
					res = await postAPI.confirmPost(props.post._id, { status: 1 });
				console.log('ket qua ẩn', res.data.result);
				props.refresh();
				if (res.data.result)
					alert(
						`${
							props.post.status === 1
								? 'Ẩn bài thành công'
								: 'Hiện bài thành công'
						}`,
					);
			} catch (error) {
				alert(
					`${
						props.post.status === 1 ? 'Ẩn bài thất bại' : 'Hiện bài thất bại'
					}`,
				);
			}
			console.log('có ẩn bài');
		}
	};

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

	function renderTypeStatus(type: number) {
		switch (type) {
			case 1:
				return 'Đang hiển thị';
			case 2:
				return 'Đang ẩn';
			case 0:
				return 'Đang chờ duyệt';
			default:
				break;
		}
	}

	function classNameTypeStatus(type: number) {
		switch (type) {
			case 1:
				return 'span__info__active';
			case 2:
				return 'hide__post__status__color';
			case 0:
				return 'do__not__active';
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
					<div className='div__container__hide__edit__btn '>
						<div className='div__container__btn__edit'>
							<Link
								className='link__btn__edit'
								to={`/quan-ly/sua-bai/${props.post._id}`}
							>
								<AiOutlineEdit />
								Chỉnh sửa
							</Link>
						</div>
						{props.post.status !== 0 && (
							<div
								className='div__container__btn__edit'
								onClick={() => hideShowPost()}
							>
								<div className='div__accept__post__btn__manager'>
									{props.post.status === 1 ? (
										<AiOutlineEyeInvisible className='svg__hide__icon' />
									) : (
										<AiOutlineEye className='svg__hide__icon' />
									)}
									{props.post.status === 1 ? 'Ẩn bài' : 'Hiện bài'}
								</div>
							</div>
						)}
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
					// className={
					// 	dateNow.getTime() <= end.getTime()
					// 		? 'span__info__active'
					// 		: 'do__not__active'
					// }
					className={classNameTypeStatus(props.post.status)}
				>
					{/* {dateNow.getTime() <= end.getTime() ? 'Đang hiển thị' : 'Hết hạn'} */}
					{renderTypeStatus(props.post.status)}
				</span>
			</td>
		</tr>
	);
}
