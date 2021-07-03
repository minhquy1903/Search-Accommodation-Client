import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../../store";
import { saveFilter } from "../../redux/filterSlice";
import { filterPosts, filterNewPosts } from "../../redux/postSlice";
import postAPI from "../../api/postAPI";

import "./Header.scss";

const Header: React.FC = () => {
  const loggedIn = useSelector((state: AppState) => state.user.loggedIn);
  const userInformation = useSelector(
    (state: AppState) => state.user.userInformation,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const goHome = async () => {
    dispatch(
      saveFilter({
        type: null,
        province: null,
        district: null,
        ward: null,
        retail: null,
        area: null,
      }),
    );
    try {
      const post = await postAPI.getFilterPost({}, 1);
      if (post.data.result === true) {
        dispatch(filterPosts(post.data.data));
      }
      const newPost = await postAPI.getFilterPost({ newPost: true }, 1);
      if (newPost.data.result === true) {
        dispatch(filterNewPosts(newPost.data.data));
      }
    } catch (error) {
      console.log(error);
    }
    history.push("/");
  };

  return (
    <div className="container container-header">
      <header className="header">
        <Link to="/">
          {/* <img
            className='logo'
            src='/resources/images/logo_70.png'
            alt='logo'
          /> */}
          <span className="logo" onClick={() => goHome()}>
            TimTroVN
          </span>
        </Link>
        <div className="left-header">
          {loggedIn ? (
            <>
              <Link
                to={
                  userInformation.active
                    ? "/quan-ly/tai-khoan"
                    : "/xac-thuc-tai-khoan"
                }
                className="info-user">
                <img
                  src="https://phongtro123.com/images/default-user.png"
                  alt="avt"
                />
                <div>
                  <span className="name">
                    Xin chào, <strong>{userInformation.name}</strong>
                  </span>
                  <span className="bottom">
                    Mã tài khoản:{" "}
                    <strong>
                      {userInformation._id?.substr(0, 10).toUpperCase()}
                    </strong>
                    . Số dư: <strong>{userInformation.money} VNĐ</strong>
                  </span>
                </div>
              </Link>
              <Link
                to={
                  userInformation.active
                    ? "/quan-ly/quan-ly-tin-dang"
                    : "/xac-thuc-tai-khoan"
                }>
                <button className="btn btn-red">Quản lý tài khoản</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dang-ky">
                <button className="btn btn-primary">Đăng ký</button>
              </Link>
              <Link to="/dang-nhap">
                <button className="btn btn-primary">Đăng nhập</button>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
