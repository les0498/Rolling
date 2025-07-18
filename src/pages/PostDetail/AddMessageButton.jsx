import { Link, useParams } from 'react-router-dom';
import bStyle from '@/pages/PostDetail/AddMessageButton.module.scss';
import classNames from 'classnames/bind';
import plusIcon from '@/assets/images/plus.png';

import { useState } from 'react';
import Modal from '@/pages/PostDetail/Modal';

const cx = classNames.bind(bStyle);

function AddMessageButton({ isEdit }) {
  const { id } = useParams();
  const [isDelete, setIsDelete] = useState(false);

  return (
    <>
      {isEdit ? (
        <Link to={`/post/${id}/message`} className={cx('link')}>
          <button className={cx('addCardBox')}>
            <img src={plusIcon} className={cx('plusIcon')} alt='plus' />
          </button>
        </Link>
      ) : (
        <button onClick={() => setIsDelete(true)}></button>
        // {isDelete && <Modal setIsDelete={setIsDelete}/>}
      )}
    </>
  );
}

export default AddMessageButton;
