import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
const meta: Meta<typeof Button> = {
title: 'Components/Button',
component: Button,
parameters: {
layout: 'centered',
docs: {
description: {
component: 'A flexible button component with multiple variants, sizes, and states.',
},
},
},
argTypes: {
variant: {
control: 'select',
options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
},
size: {
control: 'select',
options: ['sm', 'md', 'lg'],
},
isLoading: { control: 'boolean' },
fullWidth: { control: 'boolean' },
disabled: { control: 'boolean' },
},
tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
args: { children: 'Button', variant: 'primary' },
};
export const AllVariants: Story = {
render: () => (
<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
{(['primary','secondary','outline','ghost','danger'] as const).map(v => (
<Button key={v} variant={v}>{v}</Button>
))}
</div>
),
};
export const AllSizes: Story = {
render: () => (
<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
{(['sm','md','lg'] as const).map(s => (
<Button key={s} size={s}>Size {s}</Button>
))}
</div>
),
};
export const Loading: Story = {
args: { children: 'Loading...', isLoading: true },
};
export const Disabled: Story = {
args: { children: 'Disabled', disabled: true },
};