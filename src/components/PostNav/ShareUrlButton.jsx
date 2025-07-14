function ShareUrlButton({ className, setIsToast, setIsOpen }) {
  //5초 뒤 토스트 닫힘
  const handleClick = () => {
    setIsToast(true);
    setIsOpen(false);
    setTimeout(() => {
      setIsToast(false);
    }, 5000);
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
