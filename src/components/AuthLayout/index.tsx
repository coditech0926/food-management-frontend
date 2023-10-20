import React, { useEffect } from 'react';
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import { usePartyContext } from '../../context';
import './authlayout.scss';

export const AuthLayout = () => {
  const [state]: any = usePartyContext();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (state.token) {
      navigate('/home');
    }
    // eslint-disable-next-line
  }, [state.token]);

  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};
