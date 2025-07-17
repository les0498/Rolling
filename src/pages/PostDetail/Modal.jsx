import Button from '@/components/ui/Button';
import styles from '@/pages/PostDetail/Modal.module.scss';
import classNames from 'classnames/bind';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return;

  const cn = classNames.bind(styles);

  return (
    <div className={cn('modalBackdrop')} onClick={onClose}>
      <div className={cn('modalContent')}>
        {children}
        <Button onClick={onClose}>확인</Button>
      </div>
    </div>
  );
}

export default Modal;
