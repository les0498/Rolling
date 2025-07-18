import classNames from 'classnames/bind';

import styles from '@/components/PostNav/AuthorCount.module.scss';
import ProfileIcon from '@/components/ui/ProfileIcon';

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
                  <ProfileIcon src={url} />
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
