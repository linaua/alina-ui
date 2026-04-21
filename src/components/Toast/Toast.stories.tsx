import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Toast } from './Toast';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta;

export const Interactive = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ height: '150px' }}>
      <Button onClick={() => setShow(true)}>show message</Button>
      <Toast 
        message="Data saved successfully!" 
        type="success" 
        isVisible={show} 
        onClose={() => setShow(false)} 
      />
    </div>
  );
};