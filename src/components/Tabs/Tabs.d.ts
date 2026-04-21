import { default as React } from 'react';
interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}
export declare const Tabs: React.FC<{
    tabs: Tab[];
}>;
export {};
