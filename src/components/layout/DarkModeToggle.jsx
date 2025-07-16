import { useState } from 'react';
import classNames from 'classnames/bind';

import DarkModeIcon from '@/assets/icons/dark_mode.svg';
import LightModeIcon from '@/assets/icons/light_mode.svg';
import styles from '@/components/layout/DarkModeToggle.module.scss';

export default function DarkModeToggle() {
  const cn = classNames.bind(styles);
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };
  return (
    <>
      <div className={cn('toggle')}>
        {checked ? <DarkModeIcon /> : <LightModeIcon />}
        <input
          className={cn('toggle-input')}
          type='checkbox'
          id='switch'
          name='mode'
          onChange={onChange}
        />
        <label className={cn('toggle-label')} htmlFor='switch'>
          Toggle
        </label>
      </div>
    </>
  );
}
