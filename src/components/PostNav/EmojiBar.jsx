import { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '@/components/PostNav/EmojiBar.module.scss';
import EmojiBadges from '@/components/ui/EmojiBadges';
import useOutsideClick from '@/hooks/useOutsideClick';

function EmojiBar({ reactions }) {
  const cn = classNames.bind(styles);

  const topReactions = reactions?.results ?? [];
  const count = reactions?.count ?? 0;

  //화살표 회전 애니메이션
  const [isOpen, setIsOpen] = useState(false);
  //화살표 클릭시 토글
  const toggleOpen = () => setIsOpen((prev) => !prev);
  //카운트 순으로 배열
  const sortedReactions = [...topReactions].sort((a, b) => b.count - a.count);

  //내부 영역
  const buttonRef = useRef(null);

  useOutsideClick(buttonRef, () => setIsOpen(false));

  const reactionCount = count < 4;

  return (
    <div ref={buttonRef} className={styles.iconContainer}>
      <div
        className={cn('iconWrapper', {
          iconWrapperMargin: reactionCount,
        })}
      >
        <EmojiBadges topReactions={sortedReactions} />
      </div>
      {!reactionCount && (
        <button
          onClick={toggleOpen}
          className={cn('arrow', { rotate: isOpen })}
        />
      )}
      {isOpen && (
        <div className={styles.reactionsBox}>
          <EmojiBadges topReactions={sortedReactions} limit={8} />
        </div>
      )}
    </div>
  );
}

export default EmojiBar;
