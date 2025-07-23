import styles from '@/pages/List/SectionTitle.module.scss';

function SectionTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}

export default SectionTitle;
