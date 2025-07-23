import { useRef, useState } from 'react';
import EmojiPicker, { EmojiStyle } from 'emoji-picker-react';

import EmojiAddIcon from '@/assets/icons/emoji_add.svg';
import lineStyle from '@/components/PostNav/AuthorCount.module.scss';
import styles from '@/components/PostNav/EmojiAddButton.module.scss';
import useEmojiClick from '@/components/PostNav/useEmojiClick';
import useIsMobile from '@/hooks/useIsMobile';
import useOutsideClick from '@/hooks/useOutsideClick';

function EmojiAddButton({ setReactions, id }) {
  const isMobile = useIsMobile();

  const [isEmoji, setIsEmoji] = useState(false);

  const emojiClickHandler = useEmojiClick({ setReactions, id });

  const emojiRef = useRef(null);
  useOutsideClick(emojiRef, () => setIsEmoji(false));

  return (
    <div ref={emojiRef} className={styles.flexContainer}>
      <button
        className={styles.btn}
        onClick={() => setIsEmoji((prev) => !prev)}
      >
        <div className={styles.icon}>
          <EmojiAddIcon />
        </div>
        {!isMobile && <span>추가</span>}
      </button>
      {isEmoji && (
        <div className={styles.emojiBox}>
          <EmojiPicker
            onEmojiClick={(emojiObj) => emojiClickHandler(emojiObj.emoji)}
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
