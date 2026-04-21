import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info', isVisible, onClose }) => {
  const colors = {
    success: '#10b981',
    error: '#ef4444',
    info: '#3b82f6',
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              borderLeft: `4px solid ${colors[type]}`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minWidth: '200px'
            }}
          >
            <span>{message}</span>
            <button 
              onClick={onClose}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
