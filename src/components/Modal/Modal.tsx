import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface ModalProps {
isOpen: boolean;
onClose: () => void;
title?: string;
children: React.ReactNode;
size?: 'sm' | 'md' | 'lg';
}
const modalSizes = {
sm: '400px',
md: '560px',
lg: '800px',
};
export const Modal: React.FC<ModalProps> = ({
isOpen, onClose, title, children, size = 'md',
}) => {
// Закривати по Escape
useEffect(() => {
const handleKeyDown = (e: KeyboardEvent) => {
if (e.key === 'Escape') onClose();
};
if (isOpen) document.addEventListener('keydown', handleKeyDown);
return () => document.removeEventListener('keydown', handleKeyDown);
}, [isOpen, onClose]);
// Блокувати scroll коли відкрито
useEffect(() => {
document.body.style.overflow = isOpen ? 'hidden' : '';
return () => { document.body.style.overflow = ''; };
}, [isOpen]);
return (
<AnimatePresence>
{isOpen && (
<>
{/* Backdrop */}
<motion.div
key="backdrop"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.2 }}
onClick={onClose}
style={{
position: 'fixed', inset: 0,
backgroundColor: 'rgba(0,0,0,0.5)',
backdropFilter: 'blur(4px)',
zIndex: 1000,
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
padding: '16px',
}}
>
{/* Modal Panel */}
<motion.div
key="modal"
initial={{ opacity: 0, scale: 0.95, y: 10 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.95, y: 10 }}
transition={{ type: 'spring', stiffness: 300, damping: 30 }}
onClick={(e) => e.stopPropagation()}
style={{
width: '100%',
maxWidth: modalSizes[size],
backgroundColor: 'var(--color-bg)',
borderRadius: '16px',
boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
overflow: 'hidden',
zIndex: 1001,
}}
>
{/* Header */}
{title && (
<div style={{
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
padding: '20px 24px',
borderBottom: '1px solid var(--color-border)',
}}>
<h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{title}</h2>
<button
onClick={onClose}
style={{
    background: 'none', border: 'none',
cursor: 'pointer', fontSize: '1.25rem',
color: 'var(--color-text-muted)',
padding: '4px',
}}
>
✕
</button>
</div>
)}
{/* Body */}
<div style={{ padding: '24px' }}>
{children}
</div>
</motion.div>
</motion.div>
</>
)}
</AnimatePresence>
);
};