import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

export const Interactive = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Відкрити модальне вікно</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Підтвердження дії">
        <p style={{ color: 'var(--color-text)' }}>
          Ви впевнені, що хочете зберегти ці зміни? Цю дію неможливо буде скасувати.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Скасувати</Button>
          <Button onClick={() => setIsOpen(false)}>Підтвердити</Button>
        </div>
      </Modal>
    </>
  );
};