import { default as React } from 'react';
interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (row: T) => React.ReactNode;
    width?: string;
}
interface TableProps<T extends object> {
    columns: Column<T>[];
    data: T[];
    onRowClick?: (row: T) => void;
    loading?: boolean;
}
export declare function Table<T extends object>({ columns, data, onRowClick, loading, }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
