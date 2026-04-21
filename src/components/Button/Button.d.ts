import { default as React } from 'react';
import { HTMLMotionProps } from 'framer-motion';
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
export declare const Button: React.FC<ButtonProps>;
export {};
