import { Link, useParams } from 'react-router-dom';
import bStyle from '@/pages/PostDetail/AddMessageButton.module.scss';

function AddMessageButton() {
  const { id } = useParams();

  return (
    <Link to={`/post/${id}/message`}>
      <button className={bStyle.addCardBox}>+</button>
    </Link>
  );
}

export default AddMessageButton;
