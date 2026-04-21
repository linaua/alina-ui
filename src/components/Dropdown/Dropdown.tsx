import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownOption {
  id: string;
  label: string;
  onClick: () => void;
}

interface DropdownProps {
  trigger: React.ReactNode;
  options: DropdownOption[];
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '8px',
              minWidth: '160px',
              backgroundColor: 'var(--color-bg)',
              border: '1.5px solid var(--color-border)',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              zIndex: 1000,
              padding: '4px'
            }}
          >
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => { option.onClick(); setIsOpen(false); }}
                style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  color: 'var(--color-text)',
                  fontSize: '0.875rem'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-border)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {option.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
