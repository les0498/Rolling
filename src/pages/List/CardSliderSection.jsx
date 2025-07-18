//데이터 CardSlider에 전달, 제목 및 Empty 처리
import CardSlider from '@/pages/List/CardSlider';
import styles from '@/pages/List/CardSliderSection.module.scss';
import EmptyState from '@/pages/List/EmptyState';
import SectionTitle from '@/pages/List/SectionTitle';

function CardSliderSection({ title }) {
  //mock 데이터
  const mockCards = [
    {
      id: 1,
      title: 'sowon',
      backgroundColor: '#FFD700',
      participants: [
        'https://via.placeholder.com/24/FFB6C1',
        'https://via.placeholder.com/24/87CEFA',
        'https://via.placeholder.com/24/90EE90',
        'https://via.placeholder.com/24/FFD700',
      ],
      totalCount: 5,
      emojiReaction: [
        { emoji: '💖', count: 3 },
        { emoji: '🎉', count: 2 },
      ],
    },
    {
      id: 2,
      title: 'jiho',
      backgroundColor: '#ECD9FF',
      participants: [
        'https://via.placeholder.com/24/90EE90',
        'https://via.placeholder.com/24/ADD8E6',
      ],
      totalCount: 2,
      emojiReaction: [
        { emoji: '👍', count: 1 },
        { emoji: '💖', count: 1 },
      ],
    },
    {
      id: 3,
      title: 'haeun',
      backgroundColor: '#D0F5C3',
      participants: [
        'https://via.placeholder.com/24/FFA07A',
        'https://via.placeholder.com/24/9370DB',
        'https://via.placeholder.com/24/20B2AA',
      ],
      totalCount: 3,
      emojiReaction: [{ emoji: '🔥', count: 4 }],
    },
    {
      id: 4,
      title: 'nana',
      backgroundColor: '#E2F5FF',
      participants: ['https://via.placeholder.com/24/FFC0CB'],
      totalCount: 1,
      emojiReaction: [{ emoji: '😊', count: 1 }],
    },
    {
      id: 5,
      title: 'leo',
      backgroundColor: '#FFE2AD',
      participants: [
        'https://via.placeholder.com/24/FFB6C1',
        'https://via.placeholder.com/24/87CEFA',
        'https://via.placeholder.com/24/FFA500',
        'https://via.placeholder.com/24/40E0D0',
      ],
      totalCount: 7,
      emojiReaction: [
        { emoji: '🎁', count: 2 },
        { emoji: '💯', count: 3 },
      ],
    },
  ];

  const hasCards = mockCards.length > 0;

  return (
    <section className={styles.wrapper}>
      <SectionTitle>{title}</SectionTitle>
      {hasCards ? <CardSlider cards={mockCards} /> : <EmptyState />}
    </section>
  );
}

export default CardSliderSection;
