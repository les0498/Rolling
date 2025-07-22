import { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

export default function AnimatedNumber({ value }) {
  let spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  let display = useTransform(spring, (current) =>
    Math.round(Number(current)).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}
