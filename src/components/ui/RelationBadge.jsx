import classNames from 'classnames/bind';

import { MESSAGE_RELATIONSHIP } from '@/api/message';
import styles from '@/components/ui/RelationBadge.module.scss';

export default function RelationBadge({ relationship }) {
  const cn = classNames.bind(styles);
  switch (relationship) {
    case MESSAGE_RELATIONSHIP.가족:
      return <span className={cn('badge-family', 'badge')}>가족</span>;
    case MESSAGE_RELATIONSHIP.동료:
      return <span className={cn('badge-colleague', 'badge')}>동료</span>;
    case MESSAGE_RELATIONSHIP.지인:
      return <span className={cn('badge-acquaintance', 'badge')}>지인</span>;
    case MESSAGE_RELATIONSHIP.친구:
      return <span className={cn('badge-friend', 'badge')}>친구</span>;
    default:
      return;
  }
}
