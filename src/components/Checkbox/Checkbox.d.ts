import { default as React } from 'react';
interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
