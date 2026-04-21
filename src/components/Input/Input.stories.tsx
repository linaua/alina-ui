import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    label: 'Електронна пошта',
    placeholder: 'example@mail.com',
    helperText: 'Ми ніколи не ділимося вашою поштою.',
  },
};

export const WithError: StoryObj<typeof Input> = {
  args: {
    label: 'Пароль',
    error: 'Пароль занадто короткий',
    type: 'password',
  },
};