// @ts-nocheck
import { motion } from 'motion/react';

import styles from '@/components/ui/LoadingDots.module.scss';

export default function LoadingDots() {
  const dotVariants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      animate='jump'
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className={styles.container}
    >
      <motion.div className={styles.dot} variants={dotVariants} />
      <motion.div className={styles.dot} variants={dotVariants} />
      <motion.div className={styles.dot} variants={dotVariants} />
    </motion.div>
  );
}
