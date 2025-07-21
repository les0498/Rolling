import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import PostCard from '@/pages/PostDetail/PostCard';
import CLStyle from '@/pages/PostDetail/PostCardList.module.scss';
import AddMessageButton from '@/pages/PostDetail/AddMessageButton';
import CStyle from '@/pages/PostDetail/CardDetail.module.scss';
import Modal from '@/pages/PostDetail/Modal';
import CardDetail from '@/pages/PostDetail/CardDetail';

import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@/components/ui/constants';
import DeleteModal from '@/pages/PostEdit/DeleteModal';

function PostCardList({
  messages,
  backgroundColor,
  loadMore,
  hasMore,
  loading,
}) {
  const cx = classNames.bind(CLStyle);
  const cn = classNames.bind(CStyle);

  // Modal 코드
  const [modalOpen, setModalOpen] = useState(false);
  const [msgSelect, setMsgSelect] = useState(null);

  const handleCloseModal = () => setModalOpen(false);

  // observer 코드
  const observerRef = useRef(null);

  // edit 코드
  const [isEdit, setIsEdit] = useState(false);
  // 메세지 삭제 모달
  const [isDelMessage, setIsDeleteMessage] = useState(false);
  const deleteCloseHandler = () => {
    setIsDeleteMessage(false);
  };

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

  {
    /* 메시지가 없을 때 */
  }
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return (
      <div className={cx('background', `background-${backgroundColor}`)}>
        <div className={cx('cardListContainer')}>
          <div className={cn('cardBoxAdd')}>
            <AddMessageButton isEdit={isEdit} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cx('background', `background-${backgroundColor}`)}>
      <div className={CLStyle.cardListContainer}>
        {/* Edit 버튼 */}
        <ol className={CLStyle.btnEdit}>
          <li>
            <Link to={'/list'}>
              <Button
                variant={BUTTON_VARIANT.secondary}
                size={BUTTON_SIZE.small}
              >
                목록으로
              </Button>
            </Link>
          </li>
          <li>
            <Button
              size={BUTTON_SIZE.small}
              onClick={() => setIsEdit((prev) => !prev)}
            >
              {isEdit ? '돌아가기' : '수정하기'}
            </Button>
          </li>
        </ol>
        {/* +버튼 카드(항상 첫 번째) */}
        <div className={CStyle.cardBoxAdd}>
          <AddMessageButton isEdit={isEdit} />
        </div>
        {/* 메시지 카드들 */}
        {messages.map((msg) => (
          <PostCard
            key={msg.id}
            message={msg}
            onClick={() => {
              setMsgSelect(msg);
              setModalOpen(true);
            }}
            isEdit={isEdit}
            onDeleteClick={() => {
              setMsgSelect(msg);
              setIsDeleteMessage(true);
            }}
          />
        ))}
        {/* 모달 */}
        {modalOpen && msgSelect && (
          <Modal isOpen={modalOpen} onClose={handleCloseModal}>
            <CardDetail message={msgSelect} variant='modal' />
          </Modal>
        )}
        {/* 메시지 삭제 모달 */}
        {isDelMessage && msgSelect && (
          <Modal
            isOpen={isDelMessage}
            onClose={deleteCloseHandler}
            isDelete={true}
          >
            <DeleteModal
              onClose={deleteCloseHandler}
              messageId={msgSelect.id}
            />
          </Modal>
        )}

        {/* 무한 스크롤 */}
        <div ref={observerRef} style={{ height: 1 }} />

        {loading && hasMore && <p>로딩중 ...</p>}
      </div>
    </div>
  );
}

export default PostCardList;
