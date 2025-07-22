import { Link } from 'react-router-dom';

import NotFound404 from '@/assets/icons/codeit404.svg';
import Button from '@/components/ui/Button';
import styles from '@/pages/NotFound/NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <NotFound404 />
      <h1 className={styles.title}>페이지가 없거나 접근할 수 없어요</h1>
      <div className={styles.description}>
        입력하신 주소가 맞는지 다시 확인 주세요
      </div>
      <div className={styles['button-wrapper']}>
        <Link to={'/'}>
          <Button variant='primary' size='big'>
            Rolling 홈으로
          </Button>
        </Link>
      </div>
    </div>
  );
}
