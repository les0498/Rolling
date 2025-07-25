import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'motion/react';

import LoadingDots from '@/components/ui/LoadingDots';
import AddMessageButton from '@/pages/PostDetail/AddMessageButton';
import CardDetail from '@/pages/PostDetail/CardDetail';
import CStyle from '@/pages/PostDetail/CardDetail.module.scss';
import Modal from '@/pages/PostDetail/Modal';
import CLStyle from '@/pages/PostDetail/PostCardList.module.scss';
import DeleteModal from '@/pages/PostEdit/DeleteModal';
import EditButton from '@/pages/PostEdit/EditButton';
import MessageEdit from '@/pages/PostEdit/MessageEdit';

const PostCard = lazy(() => import('@/pages/PostDetail/PostCard'));

function PostCardList({
  messages,
  backgroundColor,
  backgroundImage,
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
  const [isDeletePost, setIsDeletePost] = useState(false);
  const deleteCloseHandler = () => {
    setIsDeleteMessage(false);
  };
  const onDelClick = () => {
    setIsDeletePost(true);
  };

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

  {
    /* 메시지가 없을 때 */
  }
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return (
      <div
        className={cx('background', `background-${backgroundColor}`)}
        style={
          backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
        }
      >
        <div className={cx('cardListContainer')}>
          {/* Edit 버튼 */}
          <div className={CLStyle.btnEdit}>
            <EditButton isEdit={isEdit} setIsEdit={setIsEdit} />
          </div>
          <div className={cn('cardBoxAdd')}>
            <AddMessageButton isEdit={isEdit} onDeleteClick={onDelClick} />
          </div>

          {/* 게시판 삭제 모달 */}
          {isEdit && isDeletePost && (
            <Modal
              isOpen={isDeletePost}
              onClose={() => setIsDeletePost(false)}
              isDelete
            >
              <DeleteModal
                onClose={() => setIsDeletePost(false)}
                isPost={true}
              />
            </Modal>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cx('background', `background-${backgroundColor}`)}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
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
        <motion.div
          className={CStyle.cardBoxAdd}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        >
          <AddMessageButton isEdit={isEdit} onDeleteClick={onDelClick}/>
        </motion.div>
        {/* 메시지 카드들 */}
        {messages.map((msg) => (
          <Suspense
            key={msg.id}
            fallback={<div className={cn('cardBox', 'cardSkeleton')} />}
          >
            <PostCard
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
              editClick={() => {
                setMsgSelect(msg);
                setIsMsgEdit(true);
              }}
            />
          </Suspense>
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
              setMessages={setMessages}
              onClose={() => setIsMsgEdit(false)}
            />
          </Modal>
        )}
        {/* 게시판 삭제 모달 */}
        {isEdit && isDeletePost && (
          <Modal
            isOpen={isDeletePost}
            onClose={() => setIsDeletePost(false)}
            isDelete
          >
            <DeleteModal onClose={() => setIsDeletePost(false)} isPost={true} />
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
