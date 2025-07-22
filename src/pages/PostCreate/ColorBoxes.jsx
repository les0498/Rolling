import classNames from 'classnames/bind';

import { BACKGROUND_COLOR } from '@/apis/recipients';
import ClickedIcon from '@/assets/icons/enabled.svg';
import styles from '@/pages/PostCreate/Box.module.scss';

export function ColorBox({ onClick, color, isSelected, name }) {
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

export default function ColorBoxes({ onClick, selectedColor }) {
  const backgroundColorList = Object.keys(BACKGROUND_COLOR).slice(1);
  return (
    <>
      {backgroundColorList.map((color, i) => (
        <ColorBox
          key={i}
          onClick={onClick}
          color={color}
          isSelected={selectedColor === color}
          name={color}
        />
      ))}
    </>
  );
}
