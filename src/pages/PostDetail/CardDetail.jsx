import ProfileIcon from '@/components/ui/ProfileIcon';
import RelationBadge from '@/components/ui/RelationBadge';
import CStyle from '@/pages/PostDetail/CardDetail.module.scss';
import MStyle from '@/pages/PostDetail/Modal.module.scss';

function formatDate(dateString) {
  return dateString.split('T')[0];
}

function CardDetail({ message, variant = 'card' }) {
  if (!message) return null;

  const style = variant === 'modal' ? MStyle : CStyle;

  return (
    <div className={style.cardBox}>
      <div className={style.cardTopSection}>
        <div className={style.cardProfile}>
          <ProfileIcon src={message.profileImageURL} />
        </div>
        <div className={style.cardWriterInfo}>
          <div className={style.title}>
            <span className={style.fromLabel}>From. </span>
            <span className={style.writerName}>{message.sender}</span>
          </div>
          <RelationBadge relationship={message.relationship} />
        </div>
      </div>
      <hr className={style.Hr} />
      <div className={style.cardContent}>
        <p>{message.content}</p>
      </div>
      <div className={style.cardDate}>
        <p>{formatDate(message.createdAt)}</p>
      </div>
    </div>
  );
}

export default CardDetail;
