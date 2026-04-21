import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion'; // Додай HTMLMotionProps

// Зміни React.InputHTMLAttributes на HTMLMotionProps<'input'>
interface InputProps extends HTMLMotionProps<'input'> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  id,
  style,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: error ? '#ef4444' : 'var(--color-text)',
          }}
        >
          {label}
        </label>
      )}

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {leftIcon && (
          <span style={{ position: 'absolute', left: 12, color: 'var(--color-text-muted)' }}>
            {leftIcon}
          </span>
        )}

        <motion.input
          id={inputId}
          animate={{
            borderColor: error ? '#ef4444' : focused ? 'var(--color-primary)' : 'var(--color-border)',
            boxShadow: focused
              ? error
                ? '0 0 0 3px rgba(239,68,68,0.15)'
                : '0 0 0 3px rgba(59,130,246,0.15)'
              : 'none',
          }}
          transition={{ duration: 0.15 }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: leftIcon ? '10px 12px 10px 38px' : '10px 12px',
            paddingRight: rightIcon ? '38px' : '12px',
            fontSize: '1rem',
            fontFamily: 'inherit',
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
            border: '1.5px solid var(--color-border)',
            borderRadius: '8px',
            outline: 'none',
            transition: 'all 0.15s ease',
            ...style,
          }}
          {...props}
        />

        {rightIcon && (
          <span style={{ position: 'absolute', right: 12, color: 'var(--color-text-muted)' }}>
            {rightIcon}
          </span>
        )}
      </div>

      {(helperText || error) && (
        <span style={{
          fontSize: '0.8rem',
          color: error ? '#ef4444' : 'var(--color-text-muted)',
        }}>
          {error || helperText}
        </span>
      )}
    </div>
  );
};
