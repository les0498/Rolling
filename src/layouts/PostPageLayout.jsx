import { useEffect, useState } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';

import { getRecipientById } from '@/apis/recipients';
import Header from '@/components/layout/Header';
import PostNav from '@/components/PostNav';
import useIsMobile from '@/hooks/useIsMobile';
import styles from '@/layouts/Layout.module.scss';

export default function PostPageLayout() {
  const isMobile = useIsMobile();
  const { id } = useParams();

  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const recipientData = await getRecipientById(id);
        setIsValid(recipientData);
      } catch {
        //데이터(ID)가 없을 때
        setIsValid(false);
      }
    }
    fetchData();
  }, [id]);

  if (isValid === false) {
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
