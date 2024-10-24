import { Topbar } from '../components/Topbar/Topbar';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};
