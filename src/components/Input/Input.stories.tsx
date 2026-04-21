import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    label: 'E-mail',
    placeholder: 'example@mail.com',
    helperText: 'We never share your mail.',
  },
};

export const WithError: StoryObj<typeof Input> = {
  args: {
    label: 'Password',
    error: 'Password is too short',
    type: 'password',
  },
};