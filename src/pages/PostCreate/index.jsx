import styles from '@/pages/PostCreate/index.module.scss';
import PostCreateForm from '@/pages/PostCreate/PostCreateForm';

export default function PostCreate() {
  return <main className={styles.wrapper}>{<PostCreateForm />}</main>;
}
