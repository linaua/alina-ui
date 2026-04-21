import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
variant?: ButtonVariant;
size?: ButtonSize;
isLoading?: boolean;
leftIcon?: React.ReactNode;
rightIcon?: React.ReactNode;
fullWidth?: boolean;
}
const styles: Record<string, React.CSSProperties> = {
base: {
display: 'inline-flex',
alignItems: 'center',
justifyContent: 'center',
gap: '8px',
border: 'none',
borderRadius: '8px',
fontFamily: 'inherit',
fontWeight: 600,
cursor: 'pointer',
transition: 'all 0.15s ease',
outline: 'none',
textDecoration: 'none',
},
};
const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
primary: {
backgroundColor: 'var(--color-primary)',
color: '#ffffff',
},
secondary: {
backgroundColor: 'var(--color-bg-subtle)',
color: 'var(--color-text)',
border: '1px solid var(--color-border)',
},
outline: {
backgroundColor: 'transparent',
color: 'var(--color-primary)',
border: '2px solid var(--color-primary)',
},
ghost: {
backgroundColor: 'transparent',
color: 'var(--color-text)',
},
danger: {
backgroundColor: '#ef4444',
color: '#ffffff',
},
};
const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
sm: { padding: '6px 12px', fontSize: '0.875rem', minHeight: '32px' },
md: { padding: '8px 16px', fontSize: '1rem', minHeight: '40px' },
lg: { padding: '12px 24px', fontSize: '1.125rem', minHeight: '48px' },
};
export const Button: React.FC<ButtonProps> = ({
variant = 'primary',
size = 'md',
isLoading = false,
leftIcon,
rightIcon,
fullWidth = false,
children,
disabled,
style,
...props
}) => {
return (
<motion.button
whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
style={{
...styles.base,
...variantStyles[variant],
...sizeStyles[size],
width: fullWidth ? '100%' : undefined,
opacity: disabled || isLoading ? 0.6 : 1,
cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
...style,
}}
disabled={disabled || isLoading}
{...props}
>
{isLoading ? (
<Spinner size="sm" />
) : (
<>
{leftIcon && leftIcon}
{children}
{rightIcon && rightIcon}
</>
)}
</motion.button>
);
};
const Spinner = ({ size }: { size: 'sm' }) => (
<motion.div
animate={{ rotate: 360 }}
transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
style={{
width: size === 'sm' ? 16 : 20,
height: size === 'sm' ? 16 : 20,
border: '2px solid rgba(255,255,255,0.3)',
borderTopColor: '#ffffff',
borderRadius: '50%',
}}
/>
);