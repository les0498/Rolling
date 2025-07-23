import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '@/pages/List/CardItem.module.scss';

function CardItem({
  id,
  title,
  participants = [],
  totalCount,
  emojiReaction = [],
  backgroundImage,
  backgroundColor,
}) {
  const navigate = useNavigate();
  const cx = classNames.bind(styles);

  const handleClick = () => {
    console.log('navigate to', `/post/${id}`);
    navigate(`/post/${id}`);
  };

  return (
    <div
      className={cx('card', backgroundColor || 'beige')}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleClick();
      }}
      role='button'
      tabIndex={0}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        cursor: 'pointer',
      }}
    >
      {/* 단일 카드 구성 요소 */}
      <div className={styles.thumbnail}>
        <h3 className={styles.title}>To. {title}</h3>
        {/* 참여자 리스트 */}
        <div className={styles.participants}>
          {participants.slice(0, 3).map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`participant-${index}`}
              className={styles.avatar}
            />
          ))}

          {totalCount > 3 && (
            <span className={styles.extra}>+{totalCount - 3}</span>
          )}
        </div>

        <p className={styles.count}>
          <span className={styles.total}>{totalCount}</span>명이 작성했어요!
        </p>
      </div>
      <hr className={styles.divider} />

      <div className={styles.reactions}>
        {emojiReaction.map((reaction, idx) => (
          <div key={idx} className={styles.reaction}>
            <span>{reaction.emoji}</span>
            <span>{reaction.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardItem;
