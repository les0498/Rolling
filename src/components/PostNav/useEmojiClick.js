import { useState } from 'react';

import { createReactionById, getReactionsById } from '@/apis/reactions';

function useEmojiClick({ setReactions, id }) {
  const [isClick, setIsClick] = useState(false);

  const emojiClick = async (emoji) => {
    if (!emoji && isClick) return;
    setIsClick(true);

    try {
      await createReactionById({ id, emoji, type: 'increase' });
      const updated = await getReactionsById({ id });
      setReactions(updated);
    } catch (error) {
      console.error('이모지 추가 실패:', error);
    } finally {
      setTimeout(() => {
        setIsClick(false);
      }, 30);
    }
  };
  return emojiClick;
}

export default useEmojiClick;
