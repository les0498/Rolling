import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import { getRecipientById } from '@/apis/recipients';
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
  const { author, recentMessages, loading, error } = useRecipientId();

  useEffect(() => {
    if (loading || (!author && !error)) return;

    if (error || author?.id !== Number(id)) {
      navigate('/post', { replace: true });
    }
  }, [author, id, loading, error, navigate]);

  if (loading) {
    return <div>불러오는중...</div>;
  }

  return (
    <>
      {isMobile ? null : <Header />}
      <PostNav
        author={author}
        recentMessages={recentMessages}
        loading={loading}
      />
      <div className={styles.container}>
        <Outlet context={{ author, recentMessages, loading, error }} />
      </div>
    </>
  );
}
