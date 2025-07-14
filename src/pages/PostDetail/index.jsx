import PostCardList from '@/pages/PostDetail/PostCardList';
import { getUserById } from '@/pages/PostDetail/mock';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { id } = useParams();
  const user = getUserById(id);

  if (!user) return <div>사용자를 찾을 수 없습니다.</div>;

  return (
    <div>
      <PostCardList
        messages={user.recentMessages}
        backgroundColor={user.backgroundColor}
      />
    </div>
  );
}
