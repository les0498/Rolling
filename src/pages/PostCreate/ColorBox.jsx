import classNames from 'classnames/bind';

import ClickedIcon from '@/assets/icons/enabled.svg';
import styles from '@/pages/PostCreate/Box.module.scss';

export default function ColorBox({ onClick, color, isSelected, name }) {
  const cx = classNames.bind(styles);
  return (
    <button
      onClick={onClick}
      name={name}
      className={cx('box', 'box-color', {
        [color]: true,
      })}
    >
      {isSelected && <ClickedIcon />}
    </button>
  );
}
