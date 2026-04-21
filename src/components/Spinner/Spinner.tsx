import { motion } from 'framer-motion';
interface SpinnerProps {
size?: 'sm' | 'md' | 'lg';
color?: string;
}
const sizes = { sm: 16, md: 24, lg: 40 };
export const Spinner: React.FC<SpinnerProps> = ({
size = 'md', color = 'var(--color-primary)',
}) => (
<motion.div
animate={{ rotate: 360 }}
transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
style={{
width: sizes[size],
height: sizes[size],
border: `3px solid ${color}33`,
borderTopColor: color,
borderRadius: '50%',
}}
/>
);