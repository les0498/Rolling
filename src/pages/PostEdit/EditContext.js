//props로 떨구는게 좋을거 같지만 context를 사용해보고 싶어 사용해봅니다.

import { createContext, useContext, useState } from 'react';

const EditContext = createContext();

function EditProvider({ children }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <EditContext.Provider value={{ isEdit, setIsEdit }}>
      {children}
    </EditContext.Provider>
  );
}

function useEditState() {
  const value = useContext(EditContext);

  if (value === undefined) {
    throw new Error(
      'useEditState는 EditProvider로 감싸진 컴포넌트에서만 사용해야 합니다.'
    );
  }

  return value;
}

export { EditProvider, useEditState };
