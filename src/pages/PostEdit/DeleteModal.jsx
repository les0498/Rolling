import { useNavigate, useParams } from 'react-router-dom';

import { deleteMessageById, getMessagesById } from '@/apis/messages';
import { deleteRecipientById, getRecipientById } from '@/apis/recipients';
import DeleteIcon from '@/assets/icons/delete.svg';
import Button from '@/components/ui/Button';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@/components/ui/constants';
import { useTopMessage } from '@/layouts/PostPageLayout';
import styles from '@/pages/PostEdit/DeleteModal.module.scss';

function DeleteModal({
  onClose,
  isPost = false,
  messageId = null,
  setMessages = null,
}) {
  //postId
  const { id } = useParams();
  const navigate = useNavigate();

  const { setAuthor, setTopMessage } = useTopMessage();

  const handleDelete = async () => {
    try {
      // 게시판이 아니면 메세지 아이디가 없으면 안된다.
      if (!isPost && !messageId) {
        console.error('messageId가 필요합니다!');
        return;
      }

      if (isPost) {
        await deleteRecipientById(id);
        navigate('/list');
      } else {
        await deleteMessageById(messageId);
        onClose();
        const update = await getMessagesById({ id });
        setMessages(update?.results || []);
        const updateMsg = await getRecipientById(id);
        setTopMessage([...(updateMsg?.recentMessages || [])]);
        setAuthor(updateMsg);
      }
    } catch (error) {
      console.error('삭제 실패: ', error);
    }
  };

  return (
    <div className={styles.deletePost}>
      <DeleteIcon />
      <p className={styles.yesDelete}>
        {isPost ? '정말 게시판을 삭제할까요?' : '정말 메시지를 삭제할까요?'}
      </p>
      <div className={styles.deletePostBtn}>
        <Button size={BUTTON_SIZE.small} onClick={handleDelete}>
          삭제
        </Button>
        <Button
          size={BUTTON_SIZE.small}
          variant={BUTTON_VARIANT.secondary}
          onClick={onClose}
        >
          취소
        </Button>
      </div>
    </div>
  );
}

export default DeleteModal;
