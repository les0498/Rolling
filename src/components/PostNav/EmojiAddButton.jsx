import { useRef, useState } from 'react';
import EmojiPicker, { EmojiStyle } from 'emoji-picker-react';

import { createReactionById, getReactionsById } from '@/apis/reactions';
import addIcon from '@/assets/images/addIcon.png';
import lineStyle from '@/components/PostNav/AuthorCount.module.scss';
import styles from '@/components/PostNav/EmojiAddButton.module.scss';
import useIsMobile from '@/hooks/useIsMobile';
import useOutsideClick from '@/hooks/useOutsideClick';

function EmojiAddButton({ setReactions, id }) {
  const isMobile = useIsMobile();

  const [isEmoji, setIsEmoji] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const onEmojiClick = async (emojiObject) => {
    const emoji = emojiObject.emoji;
    if (isClick) return;
    setIsClick(true);
    try {
      await createReactionById({ id, emoji, type: 'increase' });
      const updated = await getReactionsById({ id });
      setReactions({
        ...updated,
        results: [...updated.results],
      });
    } catch (error) {
      console.error('이모지 추가 실패:', error);
    } finally {
      setTimeout(() => {
        setIsClick(false);
      }, 30);
    }
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
