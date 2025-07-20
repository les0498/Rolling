import { useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'motion/react';

import ClickedIcon from '@/assets/icons/enabled.svg';
import styles from '@/pages/PostCreate/BackgroundSelect.module.scss';

export default function BackgroundSelect() {
  const [backgroundOption, setBackgroundOption] = useState('컬러');
  const [background, setBackground] = useState('');
  const cx = classNames.bind(styles);
  const handleOptionSelect = (e) => {
    e.preventDefault();
    setBackgroundOption(e.target.name);
  };
  const handleBackgroundSelect = (e) => {
    e.preventDefault();
  };
  const isColorBackgroundOption = backgroundOption === '컬러';
  return (
    <section className={cx('container')}>
      <div className={cx('label-wrapepr')}>
        <h2 className={cx('label')}>배경화면을 선택해 주세요.</h2>
        <p className={cx('caption')}>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </p>
      </div>
      <div className={cx('options-wrapper')}>
        <motion.div
          className={cx('option-indicator')}
          layout
          style={{
            left: isColorBackgroundOption ? '3px' : 'revert',
          }}
        />
        <button
          name='컬러'
          onClick={handleOptionSelect}
          className={cx('option', 'option-color', {
            'option-selected': isColorBackgroundOption,
            'option-left': !isColorBackgroundOption,
          })}
        >
          컬러
        </button>
        <button
          name='이미지'
          onClick={handleOptionSelect}
          className={cx('option', {
            'option-selected': !isColorBackgroundOption,
            'option-right': isColorBackgroundOption,
          })}
        >
          이미지
        </button>
      </div>
      <div className={cx('boxes-wrapper')}>
        {isColorBackgroundOption ? (
          <>
            {Array.from({ length: 4 }, () => 0).map((box, i) => (
              <button key={i} onClick={handleBackgroundSelect}>
                <div className={cx('box', 'box-color')}></div>
              </button>
            ))}
          </>
        ) : (
          <>
            {Array.from({ length: 4 }, () => 0).map((box, i) => (
              <button key={i} onClick={handleBackgroundSelect}>
                <div className={cx('box', 'box-image')}></div>
              </button>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
