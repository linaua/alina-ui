import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', marginBottom: '16px' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 20px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              position: 'relative',
              color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-muted)'
            }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTab" 
                style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: '2px', backgroundColor: 'var(--color-primary)' }} 
              />
            )}
          </button>
        ))}
      </div>
      <div>{tabs.find(t => t.id === activeTab)?.content}</div>
    </div>
  );
};
