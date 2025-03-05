import { motion } from 'framer-motion';

const ScrollAnimation = ({ children, className, delay = 0, direction = 'up' }) => {
  const animations = {
    up: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -50 },
      whileInView: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      {...animations[direction]}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 