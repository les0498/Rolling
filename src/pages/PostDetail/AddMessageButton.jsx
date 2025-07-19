import { Link, useParams } from 'react-router-dom';
import bStyle from '@/pages/PostDetail/AddMessageButton.module.scss';
import classNames from 'classnames/bind';
import plusIcon from '@/assets/images/plus.png';

const cx = classNames.bind(bStyle);

function AddMessageButton() {
  const { id } = useParams();

  return (
    <Link to={`/post/${id}/message`} className={cx('link')}>
      <button className={cx('addCardBox')}>
        <img src={plusIcon} className={cx('plusIcon')} alt='plus' />
      </button>
    </Link>
  );
}

export default AddMessageButton;
