import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EnterDirectionWhenVisible: React.FC<{
  dir: string;
  delay: number;
  className?: string | undefined;
}> = ({ children, dir, delay, className }) => {
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
        visible: { opacity: 1, scale: 1, x: 0 },
        hidden: { opacity: 0, scale: 1, x: dir === 'left' ? -20 : 20 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default EnterDirectionWhenVisible;
