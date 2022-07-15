import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function DefaultLayout(props: any) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}