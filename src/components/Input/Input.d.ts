import { default as React } from 'react';
import { HTMLMotionProps } from 'framer-motion';
interface InputProps extends HTMLMotionProps<'input'> {
    label?: string;
    helperText?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
export declare const Input: React.FC<InputProps>;
export {};
