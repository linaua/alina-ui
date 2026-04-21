import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

interface User {
  id: number;
  name: string;
  role: string;
  status: string;
}

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table<User>>;

export const Default: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', width: '200px' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    data: [
      { id: 1, name: 'Alina Gordiy', role: 'Frontend Developer', status: 'Active' },
      { id: 2, name: 'Oleksandr K.', role: 'Designer', status: 'Inactive' },
    ],
  },
};

