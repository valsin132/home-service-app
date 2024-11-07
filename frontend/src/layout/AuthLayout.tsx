import { Topbar } from '../components/Topbar/Topbar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export function AuthLayout() {
  return (
    <>
      <Topbar />
      <div className={styles.authLayoutContainer}>
        <Outlet />
      </div>
    </>
  );
}
