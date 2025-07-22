import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMessagesById } from '@/apis/messages';
import { BACKGROUND_COLOR, getRecipientById } from '@/apis/recipients';
import LoadingDots from '@/components/ui/LoadingDots';
import useAsync from '@/hooks/useAsync';
import PostCardList from '@/pages/PostDetail/PostCardList';

export default function PostDetail() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [user, setUser] = useState([]);
  const limit = 8;

  const [pending, error, fetchMessages] = useAsync(getMessagesById);

  useEffect(() => {
    if (!id) return;

    getRecipientById(id).then((res) => {
      if (!id) return;
      setUser(res);
    });
  }, [id]);

  useEffect(() => {
    if (!id) return;
    fetchMessages({ id, offset: 0, limit }).then((res) => {
      setMessages(res?.results || []);
      setOffset(limit);
      setHasMore(Boolean(res.next));
    });
  }, [id, fetchMessages]);

  const loadMore = useCallback(() => {
    fetchMessages({ id, offset, limit }).then((res) => {
      setMessages((prev) => [...prev, ...(res?.results || [])]);
      setOffset((prev) => prev + limit);
      setHasMore(Boolean(res.next));
    });
  }, [id, offset, limit, fetchMessages]);

  if (pending && messages.length === 0) return <LoadingDots />;
  if (error) return <div>에러 발생!</div>;

  return (
    <div>
      <PostCardList
        messages={messages}
        backgroundColor={BACKGROUND_COLOR[user.backgroundColor]}
        loadMore={loadMore}
        hasMore={hasMore}
        loading={pending}
        setMessages={setMessages}
      />
    </div>
  );
}
