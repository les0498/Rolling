import { useEffect, useState } from 'react';

const useIsMobile = (mobileBreakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    setIsMobile(media.matches);

    const handleMediaChange = () => setIsMobile(media.matches);
    media.addEventListener('change', handleMediaChange);
    return () => media.removeEventListener('change', handleMediaChange);
  }, [mobileBreakpoint]);

  return isMobile;
};
export default useIsMobile;
