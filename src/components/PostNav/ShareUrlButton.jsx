function ShareUrlButton({ className, setIsToast, setIsOpen }) {
  //5초 뒤 토스트 닫힘
  const handleClick = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setIsToast(true);
        setIsOpen(false);
        setTimeout(() => {
          setIsToast(false);
        }, 5000);
      })
      .catch((error) => {
        console.log('URL 복사 실패', error);
      });
  };

  return (
    <>
      <button className={className} onClick={handleClick}>
        URL 공유
      </button>
    </>
  );
}

export default ShareUrlButton;
