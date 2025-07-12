import PostCardStyle from '@/components/post/PostCard.module.scss';

function PostCard({ message }) {
  return (
    <div className={PostCardStyle.cardBox}>
      <div className={PostCardStyle.cardTopSection}>
        <section className={PostCardStyle.cardProfile}>
          <img
            src={message.profileImg}
            alt='프로필'
            className={PostCardStyle.profileImage}
          />
        </section>
        <section className={PostCardStyle.cardWriterInfo}>
          <div className={PostCardStyle.title}>
            <span className={PostCardStyle.fromLabel}>From.</span>
            <span className={PostCardStyle.writerName}>{message.from}</span>
          </div>
          <img src={message.badge} alt='배지' className={PostCardStyle.badge} />
        </section>
      </div>
      <hr className={PostCardStyle.Hr} />
      <section className={PostCardStyle.cardContent}>
        <p>{message.content}</p>
      </section>
      <section className={PostCardStyle.cardDate}>
        <p>{message.createdAt}</p>
      </section>
    </div>
  );
}

export default PostCard;
