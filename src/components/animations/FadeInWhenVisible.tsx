import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInWhenVisible: React.FC<{
  delay: number;
  className?: string | undefined;
}> = ({ children, className, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className={className}
      initial="hidden"
      transition={{ duration: 0.5, delay: delay, ease: 'easeInOut' }}
      variants={{
        visible: { opacity: 1, y: 10 },
        hidden: { opacity: 0, y: -10 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
