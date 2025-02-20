import React, { createContext, useContext, useState } from 'react';

interface ProgressContextType {
  progress: number;
  setProgress: (value: number) => void;
  incrementProgress: (value: number) => void;
  decrementProgress: (value: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};

export const ProgressProvider = ({ children }: any) => {
  const [progress, setProgress] = useState(0); 

  const incrementProgress = (value: number) => {
    setProgress(prevProgress => Math.min(prevProgress + value, 1)); 
  };

  const decrementProgress = (value: number) => {
    setProgress(prevProgress => Math.max(prevProgress - value, 0)); 
  };

  return (
    <ProgressContext.Provider value={{ progress, setProgress, incrementProgress, decrementProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
