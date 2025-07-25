import { MESSAGE_FONT } from '@/apis/messages';
import ProfileIcon from '@/components/ui/ProfileIcon';
import RelationBadge from '@/components/ui/RelationBadge';
import CStyle from '@/pages/PostDetail/CardDetail.module.scss';
import MStyle from '@/pages/PostDetail/Modal.module.scss';

function formatDate(dateString) {
  return dateString.split('T')[0];
}

function CardDetail({ message, variant = 'card' }) {
  if (!message) return null;

  const style = variant === 'modal' ? MStyle : CStyle;

  const fontClassMap = {
    [MESSAGE_FONT['Noto Sans']]: style['font-noto-sans'],
    [MESSAGE_FONT['Pretendard']]: style['font-pretendard'],
    [MESSAGE_FONT['나눔명조']]: style['font-nanum-myeongjo'],
    [MESSAGE_FONT['나눔손글씨 손편지체']]: style['font-nanum-pen'],
  };

  function getFontClass(font) {
    return fontClassMap[font] || style['font-noto-sans'];
  }

  return (
    <div className={style.cardBox}>
      <div className={style.cardTopSection}>
        <div className={style.cardProfile}>
          <ProfileIcon src={message.profileImageURL} />
        </div>
        <div className={style.cardWriterInfo}>
          <div className={style.title}>
            <span className={style.fromLabel}>From. </span>
            <span className={style.writerName}>{message.sender}</span>
          </div>
          <RelationBadge relationship={message.relationship} />
        </div>
      </div>
      <hr className={style.Hr} />
      <div
        className={`${style.cardContent} ${getFontClass(message.font)}`}
        dangerouslySetInnerHTML={{ __html: message.content }}
      />
      <div className={style.cardDate}>
        <p>{formatDate(message.createdAt)}</p>
      </div>
    </div>
  );
}

export default CardDetail;
