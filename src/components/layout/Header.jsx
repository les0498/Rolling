import { useLocation } from 'react-router-dom';

import Logo from '@/assets/images/logo.png';
import styles from '@/components/layout/Header.module.scss';

export default function Header() {
  const location = useLocation();
  const isHome = location?.pathname === '/';
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img className={styles.logo} src={Logo} alt='Rolling 로고' />
        {
          //TODO: Button--outlined-40
          isHome && <button>롤링 페이퍼 만들기</button>
        }
      </nav>
    </header>
  );
}
