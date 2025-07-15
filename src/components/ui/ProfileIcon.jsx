import classNames from 'classnames/bind';

import DefaultProfile from '@/assets/images/default_profile.png';
import styles from '@/components/ui/ProfileIcon.module.scss';

export default function ProfileIcon({
  src = '',
  size = PROFILE_ICON_SIZE.big,
  stroke = false,
  ...rest
}) {
  const cn = classNames.bind(styles);
  const onErrorImg = (e) => {
    e.target.src = DefaultProfile;
  };

  return src === '' ? (
    <div className={cn('profile', `profile-${size}`, { stroke })} {...rest}>
      <img src={DefaultProfile} alt='기본 프로필 이미지' />
    </div>
  ) : (
    <div className={cn('profile', `profile-${size}`, { stroke })} {...rest}>
      <img
        className={cn('img')}
        src={src}
        onError={onErrorImg}
        alt='사용자 프로필 이미지'
      />
    </div>
  );
}
export const PROFILE_ICON_SIZE = {
  small: 'small',
  big: 'big',
};
