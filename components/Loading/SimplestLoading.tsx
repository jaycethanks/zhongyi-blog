import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SimplestLoading = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const _dots = dots < 3 ? dots + 1 : 0;
      setDots(_dots);
    }, 100);

    return () => clearInterval(timer);
  }, [dots]);

  return (
    <motion.span transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}>
      Load{'.'.repeat(dots)}
    </motion.span>
  );
};
export default SimplestLoading;
