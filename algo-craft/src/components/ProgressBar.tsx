// src/components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  progress: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div style={{ width: '100%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '10px', marginBottom: '20px' }}>
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#4caf50',
          borderRadius: '10px',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
};

export default ProgressBar;
