import React from 'react';
import { motion } from 'framer-motion';
interface CardProps {
children: React.ReactNode;
hoverable?: boolean;
padding?: 'sm' | 'md' | 'lg';
style?: React.CSSProperties;
}
export const Card: React.FC<CardProps> = ({
children, hoverable = false, padding = 'md', style,
}) => {
const paddingValues = { sm: '12px', md: '20px', lg: '32px' };
return (
    <motion.div
whileHover={hoverable ? { y: -4, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' } : {}}
transition={{ duration: 0.2 }}
style={{
backgroundColor: 'var(--color-bg)',
border: '1px solid var(--color-border)',
borderRadius: '12px',
padding: paddingValues[padding],
boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
...style,
}}
>
{children}
</motion.div>
);
};