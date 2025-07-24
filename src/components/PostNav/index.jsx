import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReactionsById } from '@/apis/reactions';
import AuthorCount from '@/components/PostNav/AuthorCount';
import EmojiAddButton from '@/components/PostNav/EmojiAddButton';
import EmojiBar from '@/components/PostNav/EmojiBar';
import styles from '@/components/PostNav/index.module.scss';
import ShareBar from '@/components/PostNav/ShareButton';
import useAsync from '@/hooks/useAsync';
import { useTopMessage } from '@/layouts/PostPageLayout';

function PostNav() {
  const { id } = useParams();

  //reaction API
  const [reactions, setReactions] = useState(null);
  const [, , fetchReactions] = useAsync(getReactionsById);

  const { author, topMessage } = useTopMessage();
  useEffect(() => {
    console.log('topMessage changed in PostNav:', topMessage, author);
  }, [author, topMessage]);

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
      <h2 className={styles.recipient}>To.{author?.name}</h2>
      <div className={styles.navRight}>
        <AuthorCount count={messageCount} profileURLs={profileURLs} />
        <EmojiBar reactions={reactions} setReactions={setReactions} id={id} />
        <EmojiAddButton setReactions={setReactions} id={id} />
        <ShareBar />
      </div>
    </nav>
  );
}

export default PostNav;
