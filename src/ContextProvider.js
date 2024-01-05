import React, { useState } from 'react';
import Context from './Context';

// Create the context provider component
const ContextProvider = ({ children }) => {
  // Define state variables for citizenship and age status
  const [isCitizen, setIsCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);

  // Create an object with context values
  const contextValue = {
    isCitizen,
    setIsCitizen,
    isOver21,
    setIsOver21,
  };

  // Provide the context values to the children components
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

// Export the context provider component
export default ContextProvider;