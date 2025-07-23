import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import DeleteIcon from '@/assets/icons/delete.svg';
import plusIcon from '@/assets/images/plus.png';
import bStyle from '@/pages/PostDetail/AddMessageButton.module.scss';
import Modal from '@/pages/PostDetail/Modal';
import DStyle from '@/pages/PostEdit/DeleteButton.module.scss';
import DeleteModal from '@/pages/PostEdit/DeleteModal';

const cx = classNames.bind(bStyle);

function AddMessageButton({ isEdit }) {
  const { id } = useParams();

  const [isDelete, setIsDelete] = useState(false);

  const onCloseHandler = () => {
    setIsDelete(false);
  };

  return (
    <>
      {isEdit ? (
        <>
          <button
            onClick={() => setIsDelete(true)}
            className={DStyle.btnDelete}
          >
            <DeleteIcon />
            <span className={DStyle.btnDeleteCopy}>게시판 삭제하기</span>
          </button>
          {isDelete && (
            <Modal isOpen={isDelete} onClose={onCloseHandler} isDelete={true}>
              <DeleteModal onClose={onCloseHandler} isPost={true} />
            </Modal>
          )}
        </>
      ) : (
        <Link to={`/post/${id}/message`} className={cx('link')}>
          <button className={cx('addCardBox')}>
            <img src={plusIcon} className={cx('plusIcon')} alt='plus' />
          </button>
        </Link>
      )}
    </>
  );
}

export default AddMessageButton;
