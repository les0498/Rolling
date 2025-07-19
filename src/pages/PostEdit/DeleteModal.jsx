import { deleteMessageById } from '@/apis/messages';
import { deleteRecipientById } from '@/apis/recipients';
import DeleteIcon from '@/assets/icons/delete.svg';
import Button from '@/components/ui/Button';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@/components/ui/constants';
import styles from '@/pages/PostEdit/DeleteModal.module.scss';

function DeleteModal({ onClose, isPost, id, messageId }) {
  const handleDelete = async () => {
    try {
      if (isPost) {
        deleteRecipientById(id);
      } else {
        deleteMessageById(messageId);
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
