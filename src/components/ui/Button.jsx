import classNames from 'classnames/bind';

import styles from '@/components/ui/Button.module.scss';

export default function Button({
  variant = BUTTON_VARIANT.primary,
  size = BUTTON_SIZE.big,
  text = '',
  onClick = () => {},
  ...rest
}) {
  const cn = classNames.bind(styles);
  return (
    <button
      onClick={onClick}
      className={cn(`button-${size}`, {
        'button-primary': variant === BUTTON_VARIANT.primary,
        'button-secondary': variant === BUTTON_VARIANT.secondary,
      })}
      {...rest}
    >
      {text}
    </button>
  );
}
export const BUTTON_VARIANT = {
  primary: 'primary',
  secondary: 'secondary',
};
export const BUTTON_SIZE = {
  small: 'small',
  big: 'big',
};
