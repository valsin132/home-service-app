import { Topbar } from '../components/Topbar/Topbar';
import { Outlet } from 'react-router-dom';
import styles from "./RootLayout.module.scss";

export function RootLayout() {
  return (
    <>
      <Topbar />
      <div className={styles.rootLayoutContainer}>
        <Outlet /> 
      </div>
    </>
  );
};
