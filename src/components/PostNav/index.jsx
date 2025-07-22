import { lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReactionsById } from '@/apis/reactions';
import EmojiAddButton from '@/components/PostNav/EmojiAddButton';
import styles from '@/components/PostNav/index.module.scss';
import ShareBar from '@/components/PostNav/ShareButton';
import useAsync from '@/hooks/useAsync';
import useRecipientId from '@/hooks/useRecipientId';

const AuthorName = lazy(() => import('@/components/PostNav/AuthorName'));
const AuthorCount = lazy(() => import('@/components/PostNav/AuthorCount'));
const EmojiBar = lazy(() => import('@/components/PostNav/EmojiBar'));

function PostNav() {
  const { id } = useParams();
  //recipirent API
  const { author, topMessage, loading } = useRecipientId(id);

  //reaction API
  const [reactions, setReactions] = useState(null);
  const [, , fetchReactions] = useAsync(getReactionsById);

  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      const reactionsData = await getReactionsById({ id });

      if (reactionsData) {
        setReactions(reactionsData);
      }
    }

    fetchData();
  }, [id, fetchReactions]);

  //recipient
  const messageCount = author?.messageCount ?? 0;
  const profileURLs = topMessage?.map((msg) => msg.profileImageURL);

  return (
    <nav className={styles.container}>
      <Suspense fallback={<div className={styles.authorCountSkeleton} />}>
        <AuthorName name={author?.name} />
      </Suspense>
      <div className={styles.navRight}>
        <Suspense fallback={<div className={styles.authorCountSkeleton} />}>
          <AuthorCount count={messageCount} profileURLs={profileURLs} />
        </Suspense>
        <Suspense fallback={<div className={styles.emojiBarSkeleton} />}>
          <EmojiBar reactions={reactions} setReactions={setReactions} id={id} />
        </Suspense>
        <EmojiAddButton setReactions={setReactions} id={id} />
        <ShareBar />
      </div>
    </nav>
  );
}

export default PostNav;
