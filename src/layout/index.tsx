import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { usePartyContext } from '../context';
import { Header } from './Header';

export const Layout = ({ children }: any) => {
  const [state]: any = usePartyContext();
  const navigate: any = useNavigate();

  useEffect(() => {
    if (!state.token) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [state.token]);

  return (
    <>
      <Header />
      {state.isLoading ? <Spinner /> : <>{children}</>}
    </>
  );
};
