import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import LoadingDots from '@/components/ui/LoadingDots';
import AddMessageButton from '@/pages/PostDetail/AddMessageButton';
import CardDetail from '@/pages/PostDetail/CardDetail';
import CStyle from '@/pages/PostDetail/CardDetail.module.scss';
import Modal from '@/pages/PostDetail/Modal';
import PostCard from '@/pages/PostDetail/PostCard';
import CLStyle from '@/pages/PostDetail/PostCardList.module.scss';
import DeleteModal from '@/pages/PostEdit/DeleteModal';
import EditButton from '@/pages/PostEdit/EditButton';
import MessageEdit from '@/pages/PostEdit/MessageEdit';

function PostCardList({
  messages,
  backgroundColor,
  loadMore,
  hasMore,
  loading,
  setMessages,
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
  const [isMsgEdit, setIsMsgEdit] = useState(false);
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
          {/* Edit 버튼 */}
          <div className={CLStyle.btnEdit}>
            <EditButton isEdit={isEdit} setIsEdit={setIsEdit} />
          </div>
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
        <div className={CLStyle.btnEdit}>
          <EditButton
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setIsMsgEdit={setIsMsgEdit}
          />
        </div>
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
            setIsMsgEdit={setIsMsgEdit}
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
              setMessages={setMessages}
            />
          </Modal>
        )}
        {/* 메시지 수정 모달 */}
        {isEdit && isMsgEdit && msgSelect && (
          <Modal
            isOpen={isMsgEdit}
            onClose={() => setIsMsgEdit(false)}
            isMsgEdit={isMsgEdit}
          >
            <MessageEdit
              messageId={msgSelect.id}
              editMsg={msgSelect}
              setMessages={setMessages}
              onClose={() => setIsMsgEdit(false)}
            />
          </Modal>
        )}

        {/* 무한 스크롤 */}
        <div ref={observerRef} style={{ height: 1 }} />

        {loading && hasMore && <LoadingDots />}
      </div>
    </div>
  );
}

export default PostCardList;
