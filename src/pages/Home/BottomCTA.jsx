import { useNavigate } from 'react-router-dom';
import '@/pages/home/BottomCTA.scss';

export default function BottomCTA() {
  const navigate = useNavigate();

  return (
    <section className='bottom-cta'>
      <button className='bottom-cta__button' onClick={() => navigate('/list')}>
        구경해보기
      </button>
    </section>
  );
}
