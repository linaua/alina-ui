import { default as React } from 'react';
export type ToastType = 'success' | 'error' | 'info';
interface ToastProps {
    message: string;
    type?: ToastType;
    isVisible: boolean;
    onClose: () => void;
}
export declare const Toast: React.FC<ToastProps>;
export {};
