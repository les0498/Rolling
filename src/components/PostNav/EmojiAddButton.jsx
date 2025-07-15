import { useRef, useState } from 'react';
import EmojiPicker, { EmojiStyle } from 'emoji-picker-react';

import addIcon from '@/assets/images/addIcon.png';
import lineStyle from '@/components/PostNav/AuthorCount.module.scss';
import styles from '@/components/PostNav/EmojiAddButton.module.scss';
import useIsMobile from '@/hooks/useIsMobile';
import useOutsideClick from '@/hooks/useOutsideClick';

//api로 데이터 내보내기 생성해야함
function EmojiAddButton({ setTopReactions }) {
  const isMobile = useIsMobile();

  const [isEmoji, setIsEmoji] = useState(false);

  const onEmojiClick = (emojiObject) => {
    const emoji = emojiObject.emoji;

    setTopReactions((prev) => {
      const found = prev.find((p) => p.emoji === emoji);

      if (found) {
        return prev.map((p) =>
          p.emoji === emoji ? { ...p, count: p.count + 1 } : p
        );
      } else {
        const newEmojiId = prev.length
          ? Math.max(...prev.map((p) => p.id)) + 1
          : 1;
        return [...prev, { id: newEmojiId, emoji: emoji, count: 1 }];
      }
    });
  };

  const emojiRef = useRef(null);
  useOutsideClick(emojiRef, () => setIsEmoji(false));

  return (
    <div ref={emojiRef} className={styles.flexContainer}>
      <button
        className={styles.btn}
        onClick={() => setIsEmoji((prev) => !prev)}
      >
        <img className={styles.icon} src={addIcon} alt='이모지추가아이콘' />
        {!isMobile && <span>추가</span>}
      </button>
      {isEmoji && (
        <div className={styles.emojiBox}>
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            emojiStyle={EmojiStyle.NATIVE}
            width={290}
          />
        </div>
      )}
      <div className={`${lineStyle.divider} ${lineStyle['dividerEmoji']}`} />
    </div>
  );
}

export default EmojiAddButton;
