import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  const userColorTheme = localStorage.getItem('color-theme');
  useEffect(() => {
    if (userColorTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [userColorTheme]);
  return <Outlet />;
}
