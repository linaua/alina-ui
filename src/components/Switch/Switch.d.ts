import { default as React } from 'react';
interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
}
export declare const Switch: React.FC<SwitchProps>;
export {};
