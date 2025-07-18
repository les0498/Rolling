import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import PostCard from '@/pages/PostDetail/PostCard';
import CLStyle from '@/pages/PostDetail/PostCardList.module.scss';
import AddMessageButton from '@/pages/PostDetail/AddMessageButton';
import CStyle from '@/pages/PostDetail/PostCard.module.scss';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { BUTTON_VARIANT } from '@/components/ui/constants';

function PostCardList({
  messages,
  backgroundColor,
  loadMore,
  hasMore,
  loading,
}) {
  const cx = classNames.bind(CLStyle);

  // Modal 코드
  const [modalOpen, setModalOpen] = useState(false);
  const [msgSelect, setMsgSelect] = useState(null);

  const handleCloseModal = () => setModalOpen(false);

  // observer 코드
  const observerRef = useRef(null);

  // edit 코드
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
            <AddMessageButton isEdit={isEdit} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cx('background', `background-${backgroundColor}`)}>
      {/* Edit 버튼 */}
      <div className={CLStyle.btnEdit}>
        <Link to={'/post'}><Button variant={BUTTON_VARIANT.secondary}>목록으로</Button></Link>
        <button onClick={() => setIsEdit((prev) => !prev)}>
          {isEdit ? '돌아가기' : '수정하기'}
        </button>
      </div>
      <div className={CLStyle.cardListContainer}>
        {/* +버튼 카드(항상 첫 번째) */}
        <div className={CStyle.cardBoxAdd}>
          <AddMessageButton isEdit={isEdit} />
        </div>
        {/* 메시지 카드들 */}
        {messages.map((msg) => (
          <PostCard key={msg.id} message={msg} 
            onClick={() => {
              setMsgSelect(msg);
              setModalOpen(true);
            } isEdit={isEdit} />
        ))}
        {/* 무한 스크롤 */}
        <div ref={observerRef} style={{ height: 1 }} />

        {loading && hasMore && <p>로딩중 ...</p>}
      </div>
    </div>
  );
}

export default PostCardList;
