import { useNavigate } from 'react-router-dom';

import Button from '@/components/ui/Button';
import CardSliderSection from '@/pages/List/CardSliderSection';
import styles from '@/pages/List/ListPage.module.scss';

function ListPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/post');
  };

  return (
    <div className={styles.wrapper}>
      <CardSliderSection title='인기 롤링 페이퍼 🔥' sort='like' />
      <CardSliderSection title='최근에 만든 롤링 페이퍼 ⭐' sort='createdAt' />
      <div className={styles.buttonField}>
        <Button
          type='button'
          variant='primary'
          size='big'
          onClick={handleSubmit}
        >
          나도 만들어보기
        </Button>
      </div>
    </div>
  );
}

export default ListPage;
