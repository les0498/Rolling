import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header';
import PostNav from '@/pages/PostNav/PostNav';
import useIsMobile from '@/hooks/useIsMobile';
import styles from '@/layouts/Layout.module.scss';

export default function PostPageLayout() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? null : <Header />}
      <PostNav />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
