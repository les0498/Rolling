import styles from '@/components/PostNav/index.module.scss';

export default function AuthorName({ name }) {
  return <h2 className={styles.recipient}>To.{name}</h2>;
}
