import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@/components/ui/constants';

function EditButton({ isEdit, setIsEdit, setIsMsgEdit = null }) {
  const clickHandler = () => {
    setIsEdit((prev) => !prev);
    setIsMsgEdit(false);
  };
  return (
    <>
      <div>
        <Link to={'/list'}>
          <Button variant={BUTTON_VARIANT.secondary} size={BUTTON_SIZE.small}>
            목록으로
          </Button>
        </Link>
      </div>
      <div>
        <Button size={BUTTON_SIZE.small} onClick={clickHandler}>
          {isEdit ? '돌아가기' : '수정하기'}
        </Button>
      </div>
    </>
  );
}

export default EditButton;
