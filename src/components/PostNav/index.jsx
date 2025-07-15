import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReactionsById } from '@/apis/reactions';
import { getRecipientById } from '@/apis/recipients';
import AuthorCount from '@/components/PostNav/AuthorCount';
import EmojiAddButton from '@/components/PostNav/EmojiAddButton';
import EmojiBar from '@/components/PostNav/EmojiBar';
import styles from '@/components/PostNav/index.module.scss';
import ShareBar from '@/components/PostNav/ShareButton';

function PostNav() {
  const { id } = useParams();

  const [author, setAuthor] = useState(null);
  const [recentMessages, setRecentMessages] = useState([]);
  const [topReactions, setTopReactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        //메세지 대상자
        const recipientData = await getRecipientById(id);
        setAuthor(recipientData);
        //메세지
        setRecentMessages(recipientData.recentMessages);

        //리액션
        const reactionData = await getReactionsById({ id: id });
        setTopReactions(reactionData);
      } catch (error) {
        console.error('데이터 가져오기 실피', error);
      }
    }
    fetchData();
  }, [id]);

  const messageCount = author?.messageCount ?? 0;
  const profileURLs = recentMessages.map((msg) => msg.profileImageURL);

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
