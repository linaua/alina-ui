import type { Preview } from '@storybook/react';
import '../src/styles/global.css';
import React, { useEffect } from 'react';

const preview: Preview = {
  // ... твої globalTypes залишаються без змін
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

      return (
        <div style={{ 
          padding: 24, 
          backgroundColor: 'var(--color-bg)', 
          minHeight: '100vh',
          color: 'var(--color-text)' 
        }}>
          <Story />
        </div>
      );
    },
  ],
  // ... решта коду
};

export default preview;
