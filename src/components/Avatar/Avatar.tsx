import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md', fallback }) => {
  const sizes = { sm: 32, md: 48, lg: 64 };
  const currentSize = sizes[size];

  return (
    <div style={{
      width: currentSize,
      height: currentSize,
      borderRadius: '50%',
      backgroundColor: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      color: 'white',
      fontWeight: 'bold',
      fontSize: currentSize / 2.5
    }}>
      {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : fallback}
    </div>
  );
};
