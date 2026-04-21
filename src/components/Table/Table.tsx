import React from 'react';

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

// Додаємо export перед функцією, щоб її бачили історії та index.ts
export function Table<T extends object>({
  columns, data, onRowClick, loading,
}: TableProps<T>) {
  return (
    <div style={{
      overflowX: 'auto',
      borderRadius: '12px',
      border: '1px solid var(--color-border)',
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.875rem',
      }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
            {columns.map((col) => (
              <th key={String(col.key)} style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
                borderBottom: '1px solid var(--color-border)',
                width: col.width,
                whiteSpace: 'nowrap',
              }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={String(col.key)} style={{ padding: '12px 16px' }}>
                    <div className="animate-pulse" style={{
                      height: 16,
                      backgroundColor: 'var(--color-border)',
                      borderRadius: 4,
                    }} />
                  </td>
                ))}
              </tr>
            ))
          ) : (
            data.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                onClick={() => onRowClick?.(row)}
                style={{
                  borderBottom: rowIdx < data.length - 1
                    ? '1px solid var(--color-border)' : 'none',
                  cursor: onRowClick ? 'pointer' : 'default',
                  transition: 'background-color 0.1s ease',
                }}
              >
                {columns.map((col) => (
                  <td key={String(col.key)} style={{ padding: '12px 16px', color: 'var(--color-text)' }}>
                    {col.render
                      ? col.render(row)
                      : String((row as any)[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
