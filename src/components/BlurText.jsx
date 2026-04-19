import { motion, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';

export default function BlurText({
  text,
  delay = 100,
  direction = 'bottom',
  className = '',
  // eslint-disable-next-line
  as: Component = 'h1',
}) {
  const words = text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    console.log('BlurText in view:', isInView);
  }, [isInView]);

  const variants = {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'bottom' ? 50 : -50,
    },
    visible: (i) => ({
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        delay: i * (delay / 1000),
        duration: 0.35,
      },
    }),
  };

  return (
    <Component ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          className="inline-block whitespace-nowrap"
          style={{ display: 'inline-block' }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Component>
  );
}
