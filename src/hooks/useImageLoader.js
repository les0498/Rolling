import { useCallback, useState } from 'react';

export const useImageLoader = (fallbackImage) => {
  const [isLoading, setIsLoading] = useState(true);

  // 이미지가 오고 isLoading false로 변경
  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // 이미지를 불러올 때 오류가 발생했다면 기본 이미지로 변경
  const onError = useCallback(
    (e) => {
      e.currentTarget.src = fallbackImage;
    },
    [fallbackImage]
  );

  return { isLoading, onLoad, onError };
};
