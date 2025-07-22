import { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '@/components/PostNav/EmojiBar.module.scss';
import useEmojiClick from '@/components/PostNav/useEmojiClick';
import EmojiBadge from '@/components/ui/EmojiBadge';
import useOutsideClick from '@/hooks/useOutsideClick';

function EmojiBar({ reactions, setReactions, id }) {
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

  //조건: 리액션 3개까지
  const reactionCount = count < 4;

  const emojiClickHandler = useEmojiClick({ setReactions, id });

  return (
    <div ref={buttonRef} className={styles.iconContainer}>
      <div
        className={cn('iconWrapper', {
          iconWrapperMargin: reactionCount,
        })}
      >
        {sortedReactions.slice(0, 3).map((icon) => (
          <EmojiBadge key={icon.id} emoji={icon.emoji} count={icon.count} />
        ))}
      </div>
      {!reactionCount && (
        <button
          onClick={toggleOpen}
          className={cn('arrow', { rotate: isOpen })}
        />
      )}
      {isOpen && (
        <div className={styles.reactionsBox}>
          {sortedReactions.slice(0, 8).map((icon) => (
            <EmojiBadge
              key={icon.id}
              emoji={icon.emoji}
              count={icon.count}
              onClick={() => emojiClickHandler(icon.emoji)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default EmojiBar;
