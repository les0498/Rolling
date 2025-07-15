import { useEffect } from 'react';

const KAKAO_JS_KEY = '217c3a6ba4f798bddfe248efc83a5917';
// 배포한 자신의 사이트 수정
const realUrl = window.location.href;
// @ts-ignore
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
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          webUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            webUrl: realUrl,
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
