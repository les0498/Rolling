import styles from '@/pages/List/CardItem.module.scss';

function CardItem({
  title,
  participants = [],
  totalCount,
  emojiReaction = [],
  backgroundImage,
  backgroundColor,
}) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundColor: backgroundImage ? undefined : backgroundColor,
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
          {participants.length > 3 && (
            <span className={styles.extra}>+{participants.length - 3}</span>
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
