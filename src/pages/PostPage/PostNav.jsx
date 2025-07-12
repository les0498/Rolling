import AuthorCount from '@/components/PostNav/AuthorCount';
import EmojiBar from '@/components/PostNav/EmojiBar';
import EmojiDropdown from '@/components/PostNav/EmojiDropdown';
import ShareBar from '@/components/PostNav/ShareBar';
import styles from '@/pages/PaperMessagesPage/PostNav.module.scss';

function PostNav({ toUserName = '' }) {
  return (
    <div>
      <h2 className={styles.recipient}>To.{toUserName}</h2>
      <div className={styles.headerRight}>
        <AuthorCount />
        <EmojiBar />
        <EmojiDropdown />
        <ShareBar />
      </div>
    </div>
  );
}

export default PostNav;
