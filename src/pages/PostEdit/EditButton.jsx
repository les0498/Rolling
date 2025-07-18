//context 테스트 파일 (파일삭제 바람)
import { useEditState } from '@/pages/PostEdit/EditContext';

function EditButton() {
  const [isEdit, setIsEdit] = useEditState();

  return (
    <>
      <button onClick={() => setIsEdit((prev) => !prev)}>
        {isEdit ? '돌아가기' : '수정하기'}
      </button>
    </>
  );
}

export default EditButton;
