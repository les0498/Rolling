import classNames from 'classnames';

import { MESSAGE_RELATIONSHIP } from '@/api/message';
import styles from '@/components/ui/RelationBadge.module.scss';

export default function RelationBadge({ relationship }) {
  const cx = classNames.bind(styles);
  switch (relationship) {
    case MESSAGE_RELATIONSHIP.가족:
      return <span className={cx('badge-family', 'badge')}>가족</span>;
    case MESSAGE_RELATIONSHIP.동료:
      return <span className={cx('badge-colleague', 'badge')}>동료</span>;
    case MESSAGE_RELATIONSHIP.지인:
      return <span className={cx('badge-acquaintance', 'badge')}>지인</span>;
    case MESSAGE_RELATIONSHIP.친구:
      return <span className={cx('badge-friend', 'badge')}>친구</span>;
    default:
      return;
  }
}
