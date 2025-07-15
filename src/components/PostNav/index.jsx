import { useParams } from 'react-router-dom';

import AuthorCount from '@/components/PostNav/AuthorCount';
import EmojiAddButton from '@/components/PostNav/EmojiAddButton';
import EmojiBar from '@/components/PostNav/EmojiBar';
import styles from '@/components/PostNav/index.module.scss';
//목데이터 삭제
import postdata from '@/components/PostNav/mock.json';
import ShareBar from '@/components/PostNav/ShareButton';

function PostNav() {
  const { id } = useParams();
  const targetId = Number(id);
  const author = postdata.find((p) => p.id === targetId);
  const { recentMessages = [], topReactions = [] } = author ?? {};
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
