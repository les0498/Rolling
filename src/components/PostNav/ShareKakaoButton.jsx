import { useEffect } from 'react';

const KAKAO_JS_KEY = '217c3a6ba4f798bddfe248efc83a5917';
const homeUrl = 'https://rolling-vert.vercel.app/';
const realUrl = window.location.href;

const { Kakao } = window;

function ShareKakaoButton({ className, setIsOpen }) {
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(KAKAO_JS_KEY);
  }, []);

  const shareKakao = () => {
    if (!Kakao) return;

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '💌 롤 링 💌',
        description: '✨ 당신의 메세지를 남겨주세요!',
        imageUrl:
          'https://rolling-vert.vercel.app/assets/images/previewImg.png',
        link: {
          webUrl: realUrl,
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 작성 하러가기',
          link: {
            webUrl: realUrl,
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <button
        className={className}
        onClick={() => {
          shareKakao();
          setIsOpen(false);
        }}
      >
        카카오톡 공유
      </button>
    </>
  );
}

export default ShareKakaoButton;
