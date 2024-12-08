import React, { createContext } from 'react';
import { experienceData, certificates, projects,technologies } from './Mydata.js';

// Initialize context
export const ContextAPI = createContext();

export default function MyContextAPI({ children }) {
  const value = { experienceData, certificates, projects,technologies };

  return (
    <ContextAPI.Provider value={value}>
      {children}
    </ContextAPI.Provider>
  );
}
