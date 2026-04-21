import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta;

export const Interactive = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Switch checked={enabled} onChange={setEnabled} />
      <span style={{ color: 'var(--color-text)' }}>{enabled ? 'On' : 'Off'}</span>
    </div>
  );
};
