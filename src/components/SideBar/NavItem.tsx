import React from 'react';

import { NavLink } from 'react-router-dom';

interface Props {
  name: string;
  href: string;
}

const NavItem: React.FC<Props> = ({ name: title, href, children }) => {
  return (
    <li className='nav-item'>
      <NavLink className={`nav-link`} activeClassName='active' to={href}>
        {children}
        {title}
      </NavLink>
    </li>
  );
};

export default NavItem;
