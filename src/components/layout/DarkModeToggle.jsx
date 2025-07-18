import { useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'motion/react';

import DarkModeIcon from '@/assets/icons/dark_mode.svg';
import LightModeIcon from '@/assets/icons/light_mode.svg';
import styles from '@/components/layout/DarkModeToggle.module.scss';

export default function DarkModeToggle() {
  const cn = classNames.bind(styles);
  const userColorTheme = localStorage.getItem('color-theme') || 'light';
  const isLightTheme = userColorTheme === 'light';
  const [checked, setChecked] = useState(isLightTheme);

  const onChange = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('color-theme', 'dark');
    }
  };
  return (
    <>
      <div className={cn('toggle')}>
        <div
          className={cn('toggle-indicator', {
            'toggle-indicator__dark': !checked,
          })}
        >
          {checked ? <LightModeIcon /> : <DarkModeIcon />}
        </div>
        <input
          className={cn('toggle-input')}
          type='checkbox'
          id='switch'
          checked={checked}
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
