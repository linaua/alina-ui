import { default as React } from 'react';
interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
    fallback: string;
}
export declare const Avatar: React.FC<AvatarProps>;
export {};
