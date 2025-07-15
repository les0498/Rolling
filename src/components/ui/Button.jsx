import classNames from 'classnames/bind';

import styles from '@/components/ui/Button.module.scss';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@/components/ui/constants';

export default function Button({
  variant = BUTTON_VARIANT.primary,
  size = BUTTON_SIZE.big,
  onClick = () => {},
  children,
  ...rest
}) {
  const cn = classNames.bind(styles);
  return (
    <button
      onClick={onClick}
      className={cn(
        {
          'button-big': size === BUTTON_SIZE.big,
          'button-small': size === BUTTON_SIZE.small,
        },
        {
          'button-primary': variant === BUTTON_VARIANT.primary,
          'button-secondary': variant === BUTTON_VARIANT.secondary,
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
