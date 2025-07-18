import MessageForm from '@/pages/Message/MessageForm';
import styles from '@/pages/Message/MessagePage.module.scss';

function MessagePage() {
  return (
    <main className={styles.wrapper}>
      <MessageForm />
    </main>
  );
}

export default MessagePage;
