import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Menu settings ⚙️</Button>,
    options: [
      { id: '1', label: 'Edit profile', onClick: () => console.log('Edit') },
      { id: '2', label: 'Change password', onClick: () => console.log('Password') },
      { id: '3', label: 'Exit', onClick: () => console.log('Exit') },
    ],
  },
};