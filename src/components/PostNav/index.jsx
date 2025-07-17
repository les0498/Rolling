import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReactionsById } from '@/apis/reactions';
import AuthorCount from '@/components/PostNav/AuthorCount';
import EmojiAddButton from '@/components/PostNav/EmojiAddButton';
import EmojiBar from '@/components/PostNav/EmojiBar';
import styles from '@/components/PostNav/index.module.scss';
import ShareBar from '@/components/PostNav/ShareButton';
import useAsync from '@/hooks/useAsync';

function PostNav({ author, recentMessages, loading }) {
  const { id } = useParams();

  const [topReactions, setTopReactions] = useState([]);
  const [pending, , fetchReactions] = useAsync(getReactionsById);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      const reactionsData = await getReactionsById({ id, limit: 8 });

      if (reactionsData) {
        setTopReactions(reactionsData.results || []);
      }
    }

    fetchData();
  }, [id, fetchReactions]);

  const messageCount = author?.messageCount ?? 0;
  const profileURLs = recentMessages?.map((msg) => msg.profileImageURL);

  if (loading || pending) return <div>불러오는 중...</div>;

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
