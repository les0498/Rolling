import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

import AnimatedNumber from '@/components/ui/AnimateNumber';
import { PROFILE_ICON_SIZE } from '@/components/ui/constants';
import EmojiBadge from '@/components/ui/EmojiBadge';
import ProfileIcon from '@/components/ui/ProfileIcon';
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

  const handleClick = () => {
    console.log('navigate to', `/post/${id}`);
    navigate(`/post/${id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className={styles.card}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleClick();
      }}
      role='button'
      tabIndex={0}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundColor: backgroundImage ? undefined : backgroundColor,
        cursor: 'pointer',
      }}
    >
      {/* 단일 카드 구성 요소 */}
      <div className={styles.thumbnail}>
        <h3 className={styles.title}>To. {title}</h3>
        {/* 참여자 리스트 */}
        <div className={styles.participants}>
          {participants.slice(0, 3).map((url, index) => (
            <ProfileIcon
              key={index}
              size={PROFILE_ICON_SIZE.small}
              stroke={true}
              src={url}
              alt={`participant-${index}`}
            />
          ))}
          {participants.length > 3 && (
            <span className={styles.extra}>+{participants.length - 3}</span>
          )}
        </div>

        <p className={styles.count}>
          <span className={styles.total}>
            <AnimatedNumber value={totalCount} />
          </span>
          명이 작성했어요!
        </p>
      </div>
      <hr className={styles.divider} />

      <div className={styles.reactions}>
        {emojiReaction.map((reaction, idx) => (
          <EmojiBadge key={idx} count={reaction.count} emoji={reaction.emoji} />
        ))}
      </div>
    </motion.div>
  );
}

export default CardItem;
