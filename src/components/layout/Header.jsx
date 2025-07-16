import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import Logo from '@/assets/images/logo.png';
import DarkModeToggle from '@/components/layout/DarkModeToggle';
import styles from '@/components/layout/Header.module.scss';

export default function Header() {
  const cn = classNames.bind(styles);
  const location = useLocation();
  const isHome = location?.pathname === '/';
  return (
    <header className={cn('header')}>
      <nav className={cn('nav')}>
        <Link to='/' aria-label='홈 화면으로 이동'>
          <img className={cn('logo')} src={Logo} alt='Rolling 로고' />
        </Link>
        <div className={cn('buttons-wrapper')}>
          <DarkModeToggle />
          {isHome && (
            <Link to='/post' aria-label='만들기 화면으로 이동'>
              <button className={cn('button-outlined')}>
                롤링 페이퍼 만들기
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
