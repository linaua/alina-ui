import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {
    children: 'Card Content',
  },
};
