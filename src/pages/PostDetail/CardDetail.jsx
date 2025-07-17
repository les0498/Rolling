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
        <section className={style.cardProfile}>
          <ProfileIcon src={message.profileImageURL} />
        </section>
        <section className={style.cardWriterInfo}>
          <div className={style.title}>
            <span className={style.fromLabel}>From. </span>
            <span className={style.writerName}>{message.sender}</span>
          </div>
          <RelationBadge relationship={message.relationship} />
        </section>
      </div>
      <hr className={style.Hr} />
      <section className={style.cardContent}>
        <p>{message.content}</p>
      </section>
      <section className={style.cardDate}>
        <p>{formatDate(message.createdAt)}</p>
      </section>
    </div>
  );
}

export default CardDetail;
