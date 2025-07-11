import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header';
import styles from '@/layouts/Layout.module.scss';

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
