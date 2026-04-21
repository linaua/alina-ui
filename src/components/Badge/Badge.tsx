import React from 'react';
type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
interface BadgeProps {
variant?: BadgeVariant;
children: React.ReactNode;
dot?: boolean;
}
const badgeColors: Record<BadgeVariant, { bg: string; color: string }> = {
default: { bg: '#e2e8f0', color: '#334155' },
success: { bg: '#d1fae5', color: '#065f46' },
warning: { bg: '#fef3c7', color: '#92400e' },
error: { bg: '#fee2e2', color: '#991b1b' },
info: { bg: '#dbeafe', color: '#1e40af' },
};
export const Badge: React.FC<BadgeProps> = ({
variant = 'default', children, dot = false,
}) => {
const { bg, color } = badgeColors[variant];
return (
<span style={{
display: 'inline-flex',
alignItems: 'center',
gap: '6px',
padding: '3px 10px',
borderRadius: '9999px',
fontSize: '0.75rem',
fontWeight: 600,
backgroundColor: bg,
color,
}}>
{dot && (
<span style={{
width: 6, height: 6,
borderRadius: '50%',
backgroundColor: color,
}} />
)}
{children}
</span>
);
};