import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

export const Default: StoryObj<typeof Spinner> = {
  args: {
    size: 'md',
    color: 'var(--color-primary)',
  },
};