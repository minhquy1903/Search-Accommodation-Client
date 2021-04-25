import React from 'react';

import { Link } from 'react-router-dom';

interface Props {
  name: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<Props> = ({ name: title, href, children, active }) => {
  return (
    <li className='nav-item'>
      <Link className={`nav-link ${active ? 'active' : ''}`} to={href}>
        {children}
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
