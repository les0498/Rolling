import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '@/components/layout/Header';
import PostNav from '@/components/PostNav';
import useIsMobile from '@/hooks/useIsMobile';
import useRecipientId from '@/hooks/useRecipientId';
import styles from '@/layouts/Layout.module.scss';

export default function PostPageLayout() {
  const isMobile = useIsMobile();

  const { id } = useParams();

  const navigate = useNavigate();

  // 리다이렉트
  const { author, loading, error } = useRecipientId(id);

  useEffect(() => {
    if (loading || (!author && !error)) return;

    if (error || author?.id !== Number(id)) {
      navigate('/list', { replace: true });

      sessionStorage.setItem('errToast', 'true');
    }
  }, [author, id, loading, error, navigate]);

  return (
    <>
      {isMobile ? null : <Header />}
      <PostNav />
      <div className={styles['container-post']}>
        <Outlet />
      </div>
    </>
  );
}
