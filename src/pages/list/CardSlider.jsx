//카드 리스트, 스크롤, 버튼 담당
import { useEffect, useRef, useState } from 'react';

import CardItem from '@/pages/List/CardItem';
import styles from '@/pages/list/CardSlider.module.scss';
import SlideButton from '@/pages/List/SlideButton';

function CardSlider({ cards }) {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    //scrollLeft: 왼쪽으로 얼마나 스크롤 되었는지
    //scrollWidth: 가능한 총 스크롤 가로 너비
    //clientWidth: 보이는 영역 너비
    setCanScrollLeft(slider.scrollLeft > 0);
    setCanScrollRight(
      slider.scrollWidth > slider.clientWidth + slider.scrollLeft
    );
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  useEffect(() => {
    updateScrollButtons();
    const slider = sliderRef.current;
    if (!slider) return;

    //scroll, resize 발생할 때마다 버튼 갱신
    slider.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      slider.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const showButtons = cards.length >= 4;

  //카드가 4개 이상이고, 왼쪽 스크롤 가능하면 SlideButton 렌더링
  return (
    <div className={styles.sliderWrapper}>
      {showButtons && canScrollLeft && (
        <div className={styles.buttonLeft}>
          <SlideButton direction='left' onClick={scrollLeft} />
        </div>
      )}
      <div className={styles.sliderOuter} ref={sliderRef}>
        <div className={styles.slider}>
          {cards.map((card) => (
            <CardItem key={card.id} {...card} />
          ))}
        </div>
      </div>

      {showButtons && canScrollRight && (
        <div className={styles.buttonRight}>
          <SlideButton direction='right' onClick={scrollRight} />
        </div>
      )}
    </div>
  );
}

export default CardSlider;
