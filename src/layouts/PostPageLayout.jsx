import { Navigate, Outlet, useParams } from 'react-router-dom';

import Header from '@/components/layout/Header';
import PostNav from '@/components/PostNav';
import useIsMobile from '@/hooks/useIsMobile';
import useRecipientId from '@/hooks/useRecipientId';
import styles from '@/layouts/Layout.module.scss';

export default function PostPageLayout() {
  const isMobile = useIsMobile();
  const { id } = useParams();

  // 리디렉션
  const { author, loading, error } = useRecipientId();

  if (loading) return <div>불러오는중...</div>;
  if (error || author?.id !== id) {
    return <Navigate to='/post' replace />;
  }

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
