import { useEffect, useState } from 'react';

function useErrorToast() {
  const [isToast, setIsToast] = useState(false);

  useEffect(() => {
    const showToast = sessionStorage.getItem('showToast');
    if (showToast === 'true') {
      setIsToast(true);

      const timer = setTimeout(() => {
        setIsToast(false);
        sessionStorage.removeItem('showToast');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return { isToast, setIsToast };
}

export default useErrorToast;
