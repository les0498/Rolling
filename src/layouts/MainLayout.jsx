import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Toast from '@/components/ui/Toast';
import styles from '@/layouts/Layout.module.scss';

export default function MainLayout() {
  const [isToast, setIsToast] = useState(false);

  useEffect(() => {
    const errToast = sessionStorage.getItem('errToast');
    if (errToast === 'true') {
      setIsToast(true);

      const timer = setTimeout(() => {
        setIsToast(false);
        sessionStorage.removeItem('errToast');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      {isToast && (
        <Toast
          isValid={!isToast}
          text='잘못된 페이지입니다.'
          onCloseClick={() => setIsToast(false)}
        />
      )}
    </>
  );
}
