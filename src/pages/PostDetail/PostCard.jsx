import RelationBadge from '@/components/ui/RelationBadge';
import CStyle from '@/pages/PostDetail/PostCard.module.scss';
import ProfileIcon from '@/components/ui/ProfileIcon';

function formatDate(dateString) {
  return dateString.split('T')[0];
}

function PostCard({ message }) {
  return (
    <div className={CStyle.cardBox}>
      <div className={CStyle.cardTopSection}>
        <section className={CStyle.cardProfile}>
          <ProfileIcon src={message.profileImageURL} />
        </section>
        <section className={CStyle.cardWriterInfo}>
          <div className={CStyle.title}>
            <span className={CStyle.fromLabel}>From. </span>
            <span className={CStyle.writerName}>{message.sender}</span>
          </div>
          <RelationBadge relationship={message.relationship} />
        </section>
      </div>
      <hr className={CStyle.Hr} />
      <section className={CStyle.cardContent}>
        <p>{message.content}</p>
      </section>
      <section className={CStyle.cardDate}>
        <p>{formatDate(message.createdAt)}</p>
      </section>
    </div>
  );
}

export default PostCard;
