import BottomCTA from '@/pages/Home/BottomCTA';
import EmojiSection from '@/pages/Home/EmojiSection';
import styles from '@/pages/Home/index.module.scss';
import MainSection from '@/pages/Home/MainSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <MainSection />
      <EmojiSection />
      <BottomCTA />
    </div>
  );
}
