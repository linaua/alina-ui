import { default as React } from 'react';
interface CardProps {
    children: React.ReactNode;
    hoverable?: boolean;
    padding?: 'sm' | 'md' | 'lg';
    style?: React.CSSProperties;
}
export declare const Card: React.FC<CardProps>;
export {};
