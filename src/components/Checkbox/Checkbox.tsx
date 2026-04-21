import React from 'react';
import { motion } from 'framer-motion';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <div style={{ position: 'relative', width: '20px', height: '20px' }}>
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={(e) => onChange(e.target.checked)}
          style={{ opacity: 0, position: 'absolute', cursor: 'pointer' }} 
        />
        <motion.div
          animate={{
            backgroundColor: checked ? 'var(--color-primary)' : 'transparent',
            borderColor: checked ? 'var(--color-primary)' : 'var(--color-border)'
          }}
          style={{
            width: '20px',
            height: '20px',
            border: '2px solid',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {checked && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ color: 'white', fontSize: '12px' }}>✓</motion.span>}
        </motion.div>
      </div>
      {label && <span style={{ color: 'var(--color-text)' }}>{label}</span>}
    </label>
  );
};
