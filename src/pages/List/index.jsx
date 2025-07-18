import CardSliderSection from '@/pages/List/CardSliderSection';
import styles from '@/pages/List/ListPage.module.scss';

function ListPage() {
  return (
    <div className={styles.wrapper}>
      <CardSliderSection title='인기 롤링 페이퍼 🔥' />
      <CardSliderSection title='최근에 만든 롤링 페이퍼 ⭐' />

      {/* 공통 컴포넌트로 처리 */}
      <div>
        <button>나도 만들어보기</button>
      </div>
    </div>
  );
}

export default ListPage;
