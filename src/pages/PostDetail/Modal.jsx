import classNames from 'classnames/bind';

import Button from '@/components/ui/Button';
import styles from '@/pages/PostDetail/Modal.module.scss';
import EditStyle from '@/pages/PostEdit/MessageEdit.module.scss';

function Modal({
  isOpen,
  onClose,
  children,
  isDelete = false,
  isMsgEdit = false,
}) {
  if (!isOpen) return;
  const style = isMsgEdit ? EditStyle : styles;

  const cn = classNames.bind(styles);

  return (
    <div className={cn('modalBackdrop')} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <div className={cn('modalButton')}>
          {!isDelete && !isMsgEdit && <Button onClick={onClose}>확인</Button>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
