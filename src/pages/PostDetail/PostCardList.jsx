import classNames from 'classnames';
import { useRef } from 'react';
import PostCard from '@/pages/PostDetail/PostCard';
import CLStyle from '@/pages/PostDetail/PostCardList.module.scss';
import AddMessageButton from '@/pages/PostDetail/AddMessageButton';
import CStyle from '@/pages/PostDetail/PostCard.module.scss';

function PostCardList({
  messages,
  backgroundColor,
  loadMore,
  hasMore,
  loading,
}) {
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return (
      <div className={CLStyle.background}>
        <div className={CLStyle.cardListContainer}>
          <div className={CStyle.cardBoxAdd}>
            <AddMessageButton />
          </div>
        </div>
      </div>
    );
  }
  const bgClass = backgroundColor ? `background-${backgroundColor}` : '';
  const cx = classNames.bind(CLStyle);

  return (
    <div className={cx('background', bgClass)}>
      <div className={CLStyle.cardListContainer}>
        {/* +버튼 카드(항상 첫 번째) */}
        <div className={CStyle.cardBoxAdd}>
          <AddMessageButton />
        </div>
        {/* 메시지 카드들 */}
        {messages.map((msg) => (
          <PostCard key={msg.id} message={msg} />
        ))}
      </div>
    </div>
  );
}

export default PostCardList;
