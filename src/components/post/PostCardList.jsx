import PostCard from '@/components/post/PostCard';
import PostCardListStyle from '@/components/post/PostCardList.module.scss';
import AddMessageButton from '@/components/post/AddMessageButton';
import PostCardStyle from '@/components/post/PostCard.module.scss';

function PostCardList({ messages }) {
  return (
    <div className={PostCardListStyle.background}>
      <div className={PostCardListStyle.cardListContainer}>
        {/* +버튼 카드(항상 첫 번째) */}
        <div className={PostCardStyle.cardBoxAdd}>
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
