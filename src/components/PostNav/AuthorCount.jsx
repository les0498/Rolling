import styles from '@/components/PostNav/AuthorCount.module.scss';
import AuthorImage from '@/components/PostNav/AuthorImage';

function AuthorCount({ count = 0, hiddenCount = 0 }) {
  return (
    <div>
      <ul>
        <li className={styles.author}>
          <AuthorImage src='' alt='' />
        </li>
        <li className={styles.author}>
          <AuthorImage src='' alt='' />
        </li>
        <li className={styles.author}>
          <AuthorImage src='' alt='' />
        </li>
        <li className={`${styles.author} ${styles['author--count']}`}>
          <span>+{hiddenCount}</span>
        </li>
        <span className={styles.allCountAuthor}>{count}명이 작성했어요!</span>
      </ul>
      <div className={styles.divider} />
    </div>
  );
}
export default AuthorCount;
