import { useParams } from 'react-router-dom';

import AuthorCount from '@/pages/PostNav/AuthorCount';
import EmojiAddButton from '@/pages/PostNav/EmojiAddButton';
import EmojiBar from '@/pages/PostNav/EmojiBar';
import styles from '@/pages/PostNav/index.module.scss';
//목데이터 삭제
import postdata from '@/pages/PostNav/mock.json';
import ShareBar from '@/pages/PostNav/ShareButton';

function PostNav() {
  const { id } = useParams();
  const targetId = Number(id);
  const author = postdata.find((p) => p.id === targetId);
  const { recentMessages, topReactions } = author ?? {};
  const postCount = recentMessages.length;
  const profileURL = recentMessages?.map((post) => post.profileImageURL);

  return (
    <nav className={styles.container}>
      <h2 className={styles.recipient}>To.{author?.name}</h2>
      <div className={styles.navRight}>
        <AuthorCount count={postCount} profileURLs={profileURL} />
        <EmojiBar topReactions={topReactions} />
        <EmojiAddButton />
        <ShareBar />
      </div>
    </nav>
  );
}

export default PostNav;
