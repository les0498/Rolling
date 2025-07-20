import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Toast from '@/components/ui/Toast';
import useErrorToast from '@/hooks/useErrorToast';
import styles from '@/layouts/Layout.module.scss';

export default function MainLayout() {
  const { isToast, setIsToast } = useErrorToast();

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
