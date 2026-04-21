import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

export const AllVariants: StoryObj<typeof Badge> = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};