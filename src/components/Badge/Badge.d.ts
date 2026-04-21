import { default as React } from 'react';
type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
interface BadgeProps {
    variant?: BadgeVariant;
    children: React.ReactNode;
    dot?: boolean;
}
export declare const Badge: React.FC<BadgeProps>;
export {};
