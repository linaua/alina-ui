import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
interface User {
    id: number;
    name: string;
    role: string;
    status: string;
}
declare const meta: Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof Table<User>>;
export declare const Default: Story;
