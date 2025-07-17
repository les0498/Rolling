import { useRef, useState } from 'react';
import EmojiPicker, { EmojiStyle } from 'emoji-picker-react';

import { createReactionById } from '@/apis/reactions';
import { getRecipientById } from '@/apis/recipients';
import addIcon from '@/assets/images/addIcon.png';
import lineStyle from '@/components/PostNav/AuthorCount.module.scss';
import styles from '@/components/PostNav/EmojiAddButton.module.scss';
import useIsMobile from '@/hooks/useIsMobile';
import useOutsideClick from '@/hooks/useOutsideClick';

function EmojiAddButton({ setTopReactions, id }) {
  const isMobile = useIsMobile();

  const [isEmoji, setIsEmoji] = useState(false);

  const onEmojiClick = async (emojiObject) => {
    const emoji = emojiObject.emoji;

    try {
      await createReactionById({ id, emoji, type: 'increase' });
    } catch (error) {
      console.error('이모지 추가 실패:', error);
    }

    const updated = await getRecipientById(id);
    setTopReactions(updated.topReactions);
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
