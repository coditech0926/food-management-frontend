import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePartyContext } from '../../context';
import './header.scss';

const navList: NavListObject[] = [
  { label: 'Home', route: '/home', shadow: 'Home' },
  { label: 'Category', route: '/category', shadow: 'Category' },
  { label: 'Filter', route: '/filter', shadow: 'Filter' }
];

export const Header = () => {
  const location: any = useLocation();
  const [, { dispatch }]: any = usePartyContext();

  const logOut = () => {
    dispatch({ type: 'LOG_OUT' });
  };

  return (
    <header>
      <ul className="font-montserrat">
        {navList.map((item: NavListObject, ind: number) => {
          return (
            <li key={item.label + ind}>
              <Link to={item.route}>{item.label}</Link>
              <span className={location.pathname === item.route ? 'opacity-100' : 'opacity-0'}>{item.shadow}</span>
            </li>
          );
        })}
      </ul>
      <p onClick={logOut}>LogOut</p>
    </header>
  );
};
