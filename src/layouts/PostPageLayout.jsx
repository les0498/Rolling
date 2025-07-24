import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import { getRecipientById } from '@/apis/recipients';
import Header from '@/components/layout/Header';
import PostNav from '@/components/PostNav';
import useAsync from '@/hooks/useAsync';
import useIsMobile from '@/hooks/useIsMobile';
import styles from '@/layouts/Layout.module.scss';

export const TopMessageContext = createContext(null);
export const useTopMessage = () => useContext(TopMessageContext);

export default function PostPageLayout() {
  const isMobile = useIsMobile();

  const { id } = useParams();

  const navigate = useNavigate();

  // 리다이렉트
  const [author, setAuthor] = useState(null);
  const [topMessage, setTopMessage] = useState([]);

  const [pending, error, fetchRecipient] = useAsync(getRecipientById);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      const recipientData = await fetchRecipient(id);

      if (recipientData) {
        setAuthor(recipientData);
        setTopMessage([...(recipientData?.recentMessages || [])]);
      }
    }
    fetchData();
  }, [id, fetchRecipient]);

  useEffect(() => {
    if (pending || (!author && !error)) return;

    if (error || author?.id !== Number(id)) {
      navigate('/list', { replace: true });

      sessionStorage.setItem('errToast', 'true');
    }
  }, [author, id, pending, error, navigate]);

  return (
    <TopMessageContext.Provider value={{ author, topMessage, setTopMessage }}>
      {isMobile ? null : <Header />}
      <PostNav />
      <div className={styles['container-post']}>
        <Outlet />
      </div>
    </TopMessageContext.Provider>
  );
}
