import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Tooltip: React.FC<{ text: string, children: React.ReactNode }> = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              position: 'absolute',
              bottom: '120%',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '6px 10px',
              backgroundColor: '#333',
              color: '#fff',
              borderRadius: '4px',
              fontSize: '0.75rem',
              whiteSpace: 'nowrap',
              zIndex: 100
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
