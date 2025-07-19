import DeleteIcon from '@/assets/icons/delete.svg';
import CardDetail from '@/pages/PostDetail/CardDetail';
import DStyle from '@/pages/PostEdit/DeleteButton.module.scss';

function PostCard({ message, onClick, isEdit, onDeleteClick }) {
  return (
    <div className={DStyle.cardWrapper}>
      {isEdit && (
        <button className={DStyle.btnPostDelete} onClick={onDeleteClick}>
          <DeleteIcon />
        </button>
      )}
      <div onClick={onClick}>
        <CardDetail message={message} variant='card' />
      </div>
    </div>
  );
}
export default PostCard;
