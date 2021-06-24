import React from "react";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, saveUserInformation } from "../../redux/userSlice";

interface Props {
  name: string;
  href: string;
}

const NavItem: React.FC<Props> = ({ name, href, children }) => {
  const dispatch = useDispatch();
  return (
    <li
      className="nav-item"
      onClick={() => {
        if (name !== "Thoát") return;
        dispatch(loginSuccess(false));
        dispatch(saveUserInformation({}));
        localStorage.clear();
      }}>
      <NavLink className={`nav-link`} activeClassName="active" to={href}>
        {children}
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;
