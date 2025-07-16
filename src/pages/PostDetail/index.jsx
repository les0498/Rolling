import PostCardList from '@/pages/PostDetail/PostCardList';
import { getUserById, getMessagesByUserId } from '@/pages/PostDetail/mock';
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { id } = useParams();

  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [user, setUser] = useState(null);
  const limit = 8;
  const isLoadingRef = useRef(false);

  const loadMore = () => {
    if (isLoadingRef.current || !hasMore) return;

    isLoadingRef.current = true;

    const { results, next } = getMessagesByUserId(id, offset, limit);

    setMessages((prev) => [...prev, ...results]);
    setOffset((prev) => prev + limit);
    setHasMore(Boolean(next));

    setTimeout(() => {
      isLoadingRef.current = false;
    }, 100);
  };

  useEffect(() => {
    const userData = getUserById(id);
    if (!userData) return;

    setUser(userData);
    loadMore();
  }, [id]);

  if (!user) return <div>사용자를 찾을 수 없습니다.</div>;

  return (
    <div>
      <PostCardList
        messages={messages}
        backgroundColor={user.backgroundColor}
        loadMore={loadMore}
        hasMore={hasMore}
        loading={isLoadingRef.current}
      />
    </div>
  );
}
