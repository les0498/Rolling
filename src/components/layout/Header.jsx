import { Link, useLocation } from 'react-router-dom';

import Logo from '@/assets/images/logo.png';
import styles from '@/components/layout/Header.module.scss';

export default function Header() {
  const location = useLocation();
  const isHome = location?.pathname === '/';
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to='/' aria-label='홈 화면으로 이동'>
          <img className={styles.logo} src={Logo} alt='Rolling 로고' />
        </Link>
        {isHome && (
          <Link to='/post' aria-label='만들기 화면으로 이동'>
            <button className={styles['button-outlined']}>
              롤링 페이퍼 만들기
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
}
