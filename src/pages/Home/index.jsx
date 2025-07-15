import Button, { BUTTON_VARIANT } from '@/components/ui/Button';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '350px',
        margin: '150px 150px',
      }}
    >
      <Button text={'확인'} size='small' variant={BUTTON_VARIANT.primary} />
      <Button text={'확인'} size='big' variant={BUTTON_VARIANT.primary} />

      <Button text={'확인'} size='small' variant={BUTTON_VARIANT.secondary} />
      <Button text={'확인'} size='big' variant={BUTTON_VARIANT.secondary} />
    </div>
  );
}
