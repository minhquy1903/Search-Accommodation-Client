import React from "react";
import { useDispatch } from "react-redux";
import postAPI from "../../api/postAPI";
import { saveFilter } from "../../redux/filterSlice";
import { filterNewPosts, filterPosts } from "../../redux/postSlice";

import "./NavBar.scss";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();

  const filterAccommodation = async (type: number) => {
    console.log("hahahaha");
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

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          <li className="is-active">Trang chủ</li>
          <li
            onClick={() => {
              filterAccommodation(1);
            }}>
            Phòng trọ
          </li>
          <li
            onClick={() => {
              filterAccommodation(2);
            }}>
            Căn hộ
          </li>
          <li
            onClick={() => {
              filterAccommodation(4);
            }}>
            Mặt bằng
          </li>
          <li>Hưỡng Dẫn</li>
          <li>Nạp tiền</li>
          <li>Bảng giá</li>
          <li>Liên hệ</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
