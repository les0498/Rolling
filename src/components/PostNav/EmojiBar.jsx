import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '@/components/PostNav/EmojiBar.module.scss';
import EmojiList from '@/components/PostNav/EmojiList';
import useOutsideClick from '@/hooks/useOutsideClick';

function EmojiBar({ topReactions }) {
  const cn = classNames.bind(styles);
  //화살표 회전 애니메이션
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const [sortedReactions, setSortedReactions] = useState([]);

  useEffect(() => {
    if (topReactions && topReactions.length > 0) {
      const sorted = [...topReactions].sort((a, b) => b.count - a.count);
      setSortedReactions(sorted);
    }
  }, [topReactions]);

  const buttonRef = useRef(null);

  useOutsideClick(buttonRef, () => setIsOpen(false));

  return (
    <div ref={buttonRef} className={styles.iconContainer}>
      <ol
        className={cn('iconWrapper', {
          iconWrapperMargin:
            sortedReactions.length > 0 && sortedReactions.length < 4,
        })}
      >
        <EmojiList topReactions={sortedReactions} limit={3} />
      </ol>
      {sortedReactions.length > 3 && (
        <button
          onClick={toggleOpen}
          className={cn('arrow', { rotate: isOpen })}
        />
      )}
      {isOpen && (
        <ul className={styles.reactionsBox}>
          <EmojiList topReactions={sortedReactions} limit={8} />
        </ul>
      )}
    </div>
  );
}

export default EmojiBar;
