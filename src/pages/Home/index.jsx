import Button from '@/components/ui/Button';
import { BUTTON_VARIANT } from '@/components/ui/constants';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '120px',
        margin: '150px 150px',
      }}
    >
      <Button size='small' variant={BUTTON_VARIANT.primary}>
        확인
      </Button>
      <Button size='big' variant={BUTTON_VARIANT.primary}>
        확인
      </Button>

      <Button size='small' variant={BUTTON_VARIANT.secondary}>
        확인
      </Button>
      <Button size='big' variant={BUTTON_VARIANT.secondary}>
        확인
      </Button>
    </div>
  );
}
