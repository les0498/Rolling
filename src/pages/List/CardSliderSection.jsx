//데이터 CardSlider에 전달, 제목 및 Empty 처리
import { useEffect, useState } from 'react';

import { getRecipients } from '@/apis/recipients';
import CardSlider from '@/pages/List/CardSlider';
import styles from '@/pages/List/CardSliderSection.module.scss';
import EmptyState from '@/pages/List/EmptyState';
import SectionTitle from '@/pages/List/SectionTitle';

function CardSliderSection({ title, sort = '' }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fecthRecipients = async () => {
      try {
        const data = await getRecipients({ limit: 8, offset: 0, sort });
        const converted = data.results.map((recipient) => ({
          id: recipient.id,
          title: recipient.name,
          backgroundImage: recipient.backgroundImageURL,
          backgroundColor: recipient.backgroundColor,
          totalCount: recipient.messageCount,
          participants: recipient.recentMessages.map(
            (msg) => msg.profileImageURL
          ),
          emojiReaction: recipient.topReactions,
        }));

        setCards(converted);
      } catch (error) {
        console.error('롤링페이퍼 목록 불러오기 실패: ', error);
      }
    };

    fecthRecipients();
  }, [sort]);

  const hasCards = cards.length > 0;

  return (
    <section className={styles.wrapper}>
      <SectionTitle>{title}</SectionTitle>
      {hasCards ? <CardSlider cards={cards} /> : <EmptyState />}
    </section>
  );
}

export default CardSliderSection;
