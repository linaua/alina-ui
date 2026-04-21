import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid var(--color-border)', width: '100%' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '16px 0',
          display: 'flex',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          color: 'var(--color-text)',
          cursor: 'pointer',
          fontWeight: 600
        }}
      >
        {title}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>▼</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 0 16px 0', color: 'var(--color-text-muted)' }}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
