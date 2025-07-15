import classNames from 'classnames/bind';

import styles from '@/components/PostNav/AuthorCount.module.scss';
import AuthorImage from '@/components/PostNav/AuthorImage';

function AuthorCount({ count = 0, profileURLs }) {
  const cn = classNames.bind(styles);

  return (
    <div className={styles.authorContainer}>
      <ul className={styles.profileWrapper}>
        {profileURLs && (
          <>
            {profileURLs.slice(0, 3).map((url, index) => {
              return (
                <li key={index} className={styles.author}>
                  <AuthorImage src={url} alt={`프로필 이미지 ${index + 1}`} />
                </li>
              );
            })}
            {count > 3 && (
              <li className={cn('author', 'authorRestCount')}>
                <span>+{count - 3}</span>
              </li>
            )}
          </>
        )}
      </ul>
      <span className={styles.allCountAuthor}>{count}명이 작성했어요!</span>
      <div className={`${styles.divider} ${styles['dividerCount']}`} />
    </div>
  );
}
export default AuthorCount;
