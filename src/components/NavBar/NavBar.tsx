import React from "react";
import { useDispatch } from "react-redux";
import postAPI from "../../api/postAPI";
import { saveFilter } from "../../redux/filterSlice";
import { filterNewPosts, filterPosts } from "../../redux/postSlice";

import "./NavBar.scss";

const NavBar: React.FC = () => {
	const dispatch = useDispatch();
	const [toggleState, setToggleState] = React.useState<number>(1);
	const filterAccommodation = async (type: number) => {
		const filterObj = {
			type: type,
			province: null,
			district: null,
			ward: null,
			retail: null,
			area: null,
			newPost: false,
		};
		dispatch(saveFilter(filterObj));
		try {
			const post = await postAPI.getFilterPost(filterObj, 1);
			if (post.data.result === true) {
				dispatch(filterPosts(post.data.data));
			}
			filterObj.newPost = true;
			const newPost = await postAPI.getFilterPost(filterObj, 1);
			if (newPost.data.result === true) {
				dispatch(filterNewPosts(newPost.data.data));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const toggle = (i: number) => {
		setToggleState(i);
	};

	return (
		<nav className="navbar">
			<div className="container">
				<ul className="nav-menu">
					<li
						className={`${toggleState === 1 && "active"}`}
						onClick={() => {
							filterAccommodation(1);

							toggle(1);
						}}>
						Trang chủ
					</li>
					<li
						className={`${toggleState === 2 && "active"}`}
						onClick={() => {
							filterAccommodation(1);
							toggle(2);
						}}>
						Phòng trọ
					</li>
					<li
						className={`${toggleState === 3 && "active"}`}
						onClick={() => {
							filterAccommodation(2);
							toggle(3);
						}}>
						Căn hộ
					</li>
					<li
						className={`${toggleState === 4 && "active"}`}
						onClick={() => {
							filterAccommodation(4);
							toggle(4);
						}}>
						Mặt bằng
					</li>
					<li
						className={`${toggleState === 5 && "active"}`}
						onClick={() => {
							toggle(5);
						}}>
						Hưỡng Dẫn
					</li>
					<li
						className={`${toggleState === 6 && "active"}`}
						onClick={() => {
							toggle(6);
						}}>
						Nạp tiền
					</li>
					<li
						className={`${toggleState === 7 && "active"}`}
						onClick={() => {
							toggle(7);
						}}>
						Bảng giá
					</li>
					<li
						className={`${toggleState === 8 && "active"}`}
						onClick={() => {
							toggle(8);
						}}>
						Liên hệ
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
