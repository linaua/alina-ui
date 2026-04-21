import { default as React } from 'react';
interface DropdownOption {
    id: string;
    label: string;
    onClick: () => void;
}
interface DropdownProps {
    trigger: React.ReactNode;
    options: DropdownOption[];
}
export declare const Dropdown: React.FC<DropdownProps>;
export {};
