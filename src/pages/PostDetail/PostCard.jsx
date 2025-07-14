import CStyle from '@/pages/PostDetail/PostCard.module.scss';

function formatDate(dateString) {
  return dateString.split('T')[0];
}

function PostCard({ message }) {
  return (
    <div className={CStyle.cardBox}>
      <div className={CStyle.cardTopSection}>
        <section className={CStyle.cardProfile}>
          <img
            src={message.profileImageURL}
            alt='프로필'
            className={CStyle.profileImage}
          />
        </section>
        <section className={CStyle.cardWriterInfo}>
          <div className={CStyle.title}>
            <span className={CStyle.fromLabel}>From.</span>
            <span className={CStyle.writerName}>{message.sender}</span>
          </div>
          <img src={message.relationship} alt='배지' className={CStyle.badge} />
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
