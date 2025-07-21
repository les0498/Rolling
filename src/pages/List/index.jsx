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
      <CardSliderSection title='인기 롤링 페이퍼 🔥' />
      <CardSliderSection title='최근에 만든 롤링 페이퍼 ⭐' />
      <Button onClick={handleSubmit}>나도 만들어보기</Button>
    </div>
  );
}

export default ListPage;
