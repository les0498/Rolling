import { Link, useParams } from 'react-router-dom';
import bStyle from '@/pages/PostDetail/AddMessageButton.module.scss';
import { useState } from 'react';

function AddMessageButton({ isEdit }) {
  const { id } = useParams();
  const [isDelete, setIsDelete] = useState(false);

  return (
    <>
      {isEdit ? (
        <Link to={`/post/${id}/message`}>
          <button className={bStyle.addCardBox}>+</button>
        </Link>
      ) : (
        <button onClick={() => setIsDelete(true)}></button>
        {isDelete && <Modal setIsDelete={setIsDelete}/>}
      )}
    </>
  );
}

export default AddMessageButton;
