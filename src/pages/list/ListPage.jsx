import Header from "@/components/layout/Header";
import CardSliderSection from "@/pages/list/CardSliderSection";
import styles from "@/pages/list/ListPage.module.scss";

function ListPage() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CardSliderSection title="인기 롤링 페이퍼 🔥" />
        <CardSliderSection title="최근에 만든 롤링 페이퍼 ⭐" />

        {/* 공통 컴포넌트로 처리 */}
        <div>
          <button>나도 만들어보기</button>
        </div>
      </div>
    </>
  );
}

export default ListPage;
