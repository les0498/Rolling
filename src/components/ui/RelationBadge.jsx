import classNames from 'classnames';

import { MESSAGE_RELATIONSHIP } from '@/api/message';
import styles from '@/components/ui/RelationBadge.module.scss';

export default function RelationBadge({ relationship }) {
  console.log(relationship);
  switch (relationship) {
    case MESSAGE_RELATIONSHIP.가족:
      return (
        <span className={classNames(styles['badge-family'], styles.badge)}>
          가족
        </span>
      );
    case MESSAGE_RELATIONSHIP.동료:
      return (
        <span className={classNames(styles['badge-colleague'], styles.badge)}>
          동료
        </span>
      );
    case MESSAGE_RELATIONSHIP.지인:
      return (
        <span
          className={classNames(styles['badge-acquaintance'], styles.badge)}
        >
          지인
        </span>
      );
    case MESSAGE_RELATIONSHIP.친구:
      return (
        <span className={classNames(styles['badge-friend'], styles.badge)}>
          친구
        </span>
      );
    default:
      return;
  }
}
