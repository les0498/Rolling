import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReactionsById } from '@/apis/reactions';
import AuthorCount from '@/components/PostNav/AuthorCount';
import EmojiAddButton from '@/components/PostNav/EmojiAddButton';
import EmojiBar from '@/components/PostNav/EmojiBar';
import styles from '@/components/PostNav/index.module.scss';
import ShareBar from '@/components/PostNav/ShareButton';
import useAsync from '@/hooks/useAsync';
import useRecipientId from '@/hooks/useRecipientId';

function PostNav() {
  const { id } = useParams();
  const { author, recentMessages, loading, error } = useRecipientId();

  const [topReactions, setTopReactions] = useState([]);
  const [pending, reactionError, fetchReactions] = useAsync(getReactionsById);

  useEffect(() => {
    if (!id) return;

    const loadReactions = async () => {
      const reactionsData = await fetchReactions({ id });
      if (reactionsData) {
        setTopReactions(reactionsData);
      }
    };

    loadReactions();
  }, [id, fetchReactions]);

  const messageCount = author?.messageCount ?? 0;
  const profileURLs = recentMessages.map((msg) => msg.profileImageURL);

  if (loading || pending) return <div>불러오는 중...</div>;
  if (error || reactionError)
    return <div>에러 발생: {(error || reactionError).message}</div>;

  return (
    <nav className={styles.container}>
      <h2 className={styles.recipient}>To.{author?.name}</h2>
      <div className={styles.navRight}>
        <AuthorCount count={messageCount} profileURLs={profileURLs} />
        <EmojiBar topReactions={topReactions} />
        <EmojiAddButton setTopReactions={setTopReactions} id={id} />
        <ShareBar />
      </div>
    </nav>
  );
}

export default PostNav;
