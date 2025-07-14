import styles from '@/components/PostNav/AuthorImage.module.scss';

function AuthorImage({ src, alt }) {
  return <img className={styles.profileImage} src={src} alt={alt} />;
}

export default AuthorImage;
