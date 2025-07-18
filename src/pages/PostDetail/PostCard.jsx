import DeleteIcon from '@/assets/icons/delete.svg';
import CardDetail from '@/pages/PostDetail/CardDetail';
import DStyle from '@/pages/PostEdit/DeleteButton.module.scss';

function PostCard({ message, onClick, isEdit }) {
  return (
    <div onClick={onClick} className={DStyle.cardWrapper}>
      {isEdit && (
        <button className={DStyle.btnDelete}>
          <DeleteIcon />
        </button>
      )}
      <CardDetail message={message} variant='card' />
    </div>
  );
}
export default PostCard;
