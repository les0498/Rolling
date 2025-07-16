import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
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
  const cx = classNames.bind(CLStyle);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log('observer triggered');
          loadMore();
        }
      },
      { threshold: 1 } // 전체가 관찰되면 실행됨.
    );

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore, loadMore]);

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

  return (
    <div className={cx('background', `background-${backgroundColor}`)}>
      <div className={CLStyle.cardListContainer}>
        {/* +버튼 카드(항상 첫 번째) */}
        <div className={CStyle.cardBoxAdd}>
          <AddMessageButton />
        </div>
        {/* 메시지 카드들 */}
        {messages.map((msg) => (
          <PostCard key={msg.id} message={msg} />
        ))}
        {/* 무한 스크롤 */}
        <div ref={observerRef} style={{ height: 1 }} />

        {loading && hasMore && <p>로딩중 ...</p>}
      </div>
    </div>
  );
}

export default PostCardList;
