import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import DeleteIcon from '@/assets/icons/delete.svg';
import plusIcon from '@/assets/images/plus.png';
import bStyle from '@/pages/PostDetail/AddMessageButton.module.scss';
import DStyle from '@/pages/PostEdit/DeleteButton.module.scss';

const cx = classNames.bind(bStyle);

function AddMessageButton({ isEdit, onDeleteClick }) {
  const { id } = useParams();

  return (
    <>
      {isEdit ? (
        <>
          <button onClick={onDeleteClick} className={DStyle.btnDelete}>
            <DeleteIcon />
            <span className={DStyle.btnDeleteCopy}>게시판 삭제하기</span>
          </button>
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
