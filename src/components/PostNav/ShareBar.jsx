import shareIcon from '@/assets/images/shareIcon.png';

function ShareBar() {
  return (
    <div>
      <button>
        <img src={shareIcon} alt='공유 아이콘' />
      </button>
    </div>
  );
}
export default ShareBar;
