import { motion } from 'motion/react';

import img01 from '@/assets/images/img_01-1.png';
import sectionMotion from '@/pages/Home/sectionMotion';

import '@/pages/Home/MainSection.scss';

export default function MainSection() {
  return (
    <section className='main-section'>
      <motion.div
        className='main-section__left'
        initial={sectionMotion.initial}
        animate={sectionMotion.animate}
        transition={sectionMotion.transition}
      >
        <div className='point-badge'>Point. 01</div>
        <h2>
          <span className='main-section__text-wrap'>
            누구나 손쉽게, 온라인
            <br className='only-pc-break' />
            롤링 페이퍼를 만들 수 있어요
          </span>
        </h2>
        <p>로그인 없이 자유롭게 만들어요.</p>
      </motion.div>
      <motion.div
        className='main-section__image'
        initial={sectionMotion.initial}
        animate={sectionMotion.animate}
        transition={sectionMotion.transition}
      >
        <img src={img01} alt='롤링 페이퍼 이미지' />
      </motion.div>
    </section>
  );
}
