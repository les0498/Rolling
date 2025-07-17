function EditButton({ children, isEdit, setIsEdit }) {
  return (
    <>
      <button onClick={setIsEdit(true)}>{children}</button>
      {isEdit && <button onClick={setIsEdit(false)}>돌아가기</button>}
    </>
  );
}

export default EditButton;
