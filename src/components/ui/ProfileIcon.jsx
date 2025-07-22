import classNames from 'classnames/bind';

import DefaultProfile from '@/assets/images/default_profile.png';
import { PROFILE_ICON_SIZE } from '@/components/ui/constants';
import styles from '@/components/ui/ProfileIcon.module.scss';
import { useImageLoader } from '@/hooks/useImageLoader';

export default function ProfileIcon({
  src = '',
  size = PROFILE_ICON_SIZE.big,
  stroke = false,
  ...rest
}) {
  const { isLoading, onLoad, onError } = useImageLoader(DefaultProfile);
  const cn = classNames.bind(styles);
  const isEmptySrc = src === '';
  return isEmptySrc ? (
    <div className={cn('profile', `profile-${size}`, { stroke })} {...rest}>
      <img src={DefaultProfile} alt='기본 프로필 이미지' />
    </div>
  ) : (
    <div className={cn('profile', `profile-${size}`, { stroke })} {...rest}>
      {isLoading && (
        <div className={cn(`profile-${size}`, 'profile-skeleton')} />
      )}
      <img
        className={cn('img')}
        src={src}
        onLoad={onLoad}
        onError={onError}
        alt='사용자 프로필 이미지'
      />
    </div>
  );
}
