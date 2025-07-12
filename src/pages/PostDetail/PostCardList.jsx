import PostCard from '@/pages/PostDetail/PostCard';
import CLStyle from '@/pages/PostDetail/PostCardList.module.scss';
import AddMessageButton from '@/pages/PostDetail/AddMessageButton';
import CStyle from '@/pages/PostDetail/PostCard.module.scss';

function PostCardList({ messages, backgroundColor }) {
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return (
      <div className={CLStyle.background}>
        <div className={CLStyle.cardListContainer}>
          <div className={CStyle.cardBoxAdd}>
            <AddMessageButton />
          </div>
        </div>
      </div>
    );
  }
  const bgClass = backgroundColor ? `background-${backgroundColor}` : '';

  return (
    <div className={`${CLStyle.background} ${CLStyle[bgClass]}`}>
      <div className={CLStyle.cardListContainer}>
        {/* +버튼 카드(항상 첫 번째) */}
        <div className={CStyle.cardBoxAdd}>
          <AddMessageButton />
        </div>
        {/* 메시지 카드들 */}
        {messages.map((msg) => (
          <PostCard key={msg.id} message={msg} />
        ))}
      </div>
    </div>
  );
}

export default PostCardList;
