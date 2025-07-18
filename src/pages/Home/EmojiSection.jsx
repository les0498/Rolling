import img02 from '@/assets/images/img_02-2.png';

import '@/pages/Home/EmojiSection.scss';

export default function EmojiSection() {
  return (
    <section className='emoji-section'>
      <div className='emoji-section__image'>
        <img src={img02} alt='이모지 예시' />
      </div>
      <div className='emoji-section__left'>
        <div className='point-badge'>Point. 02</div>
        <div className='text-block'>
          <h2>
            서로에게 이모지로 감정을
            <br />
            표현해보세요
          </h2>
          <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
        </div>
      </div>
    </section>
  );
}
