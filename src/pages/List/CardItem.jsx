import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { motion } from 'motion/react';

import PatternBeige from '@/assets/images/pattern_beige.svg';
import PatternBlue from '@/assets/images/pattern_blue.svg';
import PatternGreen from '@/assets/images/pattern_green.svg';
import PatternPurple from '@/assets/images/pattern_purple.svg';
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
  const cx = classNames.bind(styles);
  const handleClick = () => {
    navigate(`/post/${id}`);
  };
  const hasBackgroundImage = backgroundImage !== null;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleClick();
      }}
      role='button'
      tabIndex={0}
      className={cx('card', {
        [backgroundColor]: !hasBackgroundImage,
      })}
    >
      {hasBackgroundImage && (
        <>
          <img
            className={styles.overlay}
            src={backgroundImage}
            alt='배경 이미지'
          />
        </>
      )}

      {/* 단일 카드 구성 요소 */}
      <div className={styles.thumbnail}>
        <h3
          className={cx('title', {
            white: hasBackgroundImage,
          })}
        >
          To. {title}
        </h3>
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

          {totalCount > 3 && (
            <span className={styles.extra}>+{totalCount - 3}</span>
          )}
        </div>

        <p
          className={cx('count', {
            white: hasBackgroundImage,
          })}
        >
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
      {/* color pattern */}
      <div className={styles.pattern}>
        {!hasBackgroundImage && (
          <>
            {backgroundColor === 'green' && <PatternGreen />}
            {backgroundColor === 'blue' && <PatternBlue />}
            {backgroundColor === 'beige' && <PatternBeige />}
            {backgroundColor === 'purple' && <PatternPurple />}
          </>
        )}
      </div>
    </motion.div>
  );
}

export default CardItem;
