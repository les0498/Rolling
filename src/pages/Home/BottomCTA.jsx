import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';
import { BUTTON_VARIANT } from '@/components/ui/constants';

import '@/pages/Home/BottomCTA.scss';

export default function BottomCTA() {
  return (
    <section className='bottom-cta'>
      <div className='button-wrapper'>
        <Link to='/list'>
          <Button variant={BUTTON_VARIANT.primary}>구경해보기</Button>
        </Link>
      </div>
    </section>
  );
}
