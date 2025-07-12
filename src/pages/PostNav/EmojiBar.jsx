import { useState } from 'react';

import styles from '@/pages/PostNav/EmojiBar.module.scss';
import EmojiList from '@/pages/PostNav/EmojiList';

function EmojiBar({ topReactions }) {
  //화살표 회전 애니메이션
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const emojiCount = topReactions?.map((reaction) => reaction.count);

  return (
    <div className={styles.iconContainer}>
      <ol
        className={styles.iconWrapper}
        style={
          emojiCount.length > 0 && emojiCount.length < 4
            ? { marginRight: '28px' }
            : {}
        }
      >
        <EmojiList topReactions={topReactions} limit={3} />
      </ol>
      {emojiCount.length > 3 && (
        <button
          onClick={toggleOpen}
          className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`}
        />
      )}
      {isOpen ? (
        <ul className={styles.emojiCountBox}>
          <EmojiList topReactions={topReactions} limit={8} />
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EmojiBar;
