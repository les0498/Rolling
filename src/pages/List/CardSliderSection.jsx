//데이터 CardSlider에 전달, 제목 및 Empty 처리
import { useEffect, useState } from 'react';

import { getRecipients } from '@/apis/recipients';
import useAsync from '@/hooks/useAsync';
import CardSlider from '@/pages/List/CardSlider';
import styles from '@/pages/List/CardSliderSection.module.scss';
import CardSliderSkeleton from '@/pages/List/CardSliderSkeleton';
import EmptyState from '@/pages/List/EmptyState';
import SectionTitle from '@/pages/List/SectionTitle';

function CardSliderSection({ title, sort = '' }) {
  const [cards, setCards] = useState([]);
  const [loading, error, getRecipientsAsync] = useAsync(getRecipients);

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        const data = await getRecipientsAsync({ limit: 8, offset: 0 });
        let sorted = data.results;

        if (sort === 'like') {
          // messageCount 기준 내림차순 정렬
          sorted = sorted.sort(
            (a, b) => Number(b.messageCount) - Number(a.messageCount)
          );
        } else if (sort === 'createdAt') {
          // createdAt 기준 내림차순 정렬
          sorted = sorted.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }

        const converted = sorted.map((recipient) => ({
          id: recipient.id,
          title: recipient.name,
          backgroundImage: recipient.backgroundImageURL,
          backgroundColor: recipient.backgroundColor,
          totalCount: recipient.messageCount,
          participants: recipient.recentMessages.map(
            (msg) => msg.profileImageURL
          ), // 최대 3명 (이미지용)
          emojiReaction: recipient.topReactions,
        }));

        setCards(converted);
      } catch (error) {
        console.error('롤링페이퍼 목록 불러오기 실패: ', error);
      }
    };

    fetchRecipients();
  }, [sort, getRecipientsAsync]);

  const hasCards = cards.length > 0;
  return (
    <section className={styles.wrapper}>
      <SectionTitle>{title}</SectionTitle>
      {!loading ? <CardSlider cards={cards} /> : <CardSliderSkeleton />}
    </section>
  );
}

export default CardSliderSection;
