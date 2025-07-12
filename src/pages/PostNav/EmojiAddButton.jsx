import addIcon from '@/assets/images/addIcon.png';
import lineStyle from '@/pages/PostNav/AuthorCount.module.scss';
import styles from '@/pages/PostNav/EmojiShareButton.module.scss';

function EmojiAddButton() {
  return (
    <div className={styles.flexContainer}>
      <button className={styles.btn}>
        <img className={styles.icon} src={addIcon} alt='이모지추가아이콘' />
        추가
      </button>
      <div className={`${lineStyle.divider} ${lineStyle['dividerEmoji']}`} />
    </div>
  );
}

export default EmojiAddButton;
