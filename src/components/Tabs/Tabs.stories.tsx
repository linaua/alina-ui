import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Tabs> = {
  args: {
    tabs: [
      { id: 'tab1', label: 'General', content: 'General settings content' },
      { id: 'tab2', label: 'Security', content: 'Here are the security settings' },
      { id: 'tab3', label: 'Notification', content: 'Message management' },
    ],
  },
};