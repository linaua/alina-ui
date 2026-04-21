import React from 'react';
import { motion } from 'framer-motion';
interface SwitchProps {
checked: boolean;
onChange: (checked: boolean) => void;
label?: string;
disabled?: boolean;
}
export const Switch: React.FC<SwitchProps> = ({
checked, onChange, label, disabled,
}) => (
<label style={{
display: 'inline-flex',
alignItems: 'center',
gap: '10px',
cursor: disabled ? 'not-allowed' : 'pointer',
opacity: disabled ? 0.5 : 1,
}}>
<motion.div
onClick={() => !disabled && onChange(!checked)}
animate={{ backgroundColor: checked ? 'var(--color-primary)' : '#cbd5e1' }}
style={{
width: 44,
height: 24,
borderRadius: '9999px',
padding: 2,
display: 'flex',
alignItems: 'center',
cursor: disabled ? 'not-allowed' : 'pointer',
}}
>
<motion.div
animate={{ x: checked ? 20 : 0 }}
transition={{ type: 'spring', stiffness: 500, damping: 30 }}
style={{
width: 20, height: 20,
borderRadius: '50%',
backgroundColor: '#ffffff',
boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
}}
/>
</motion.div>
{label && <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{label}</span>}
</label>
);