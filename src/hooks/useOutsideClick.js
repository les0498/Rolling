import { useEffect } from 'react';

// ref 이벤트 감지 , handler 실행할 콜백
function useOutsideClick(ref, handler) {
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(e);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}

export default useOutsideClick;
