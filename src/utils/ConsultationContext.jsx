import React, { createContext, useContext, useState } from 'react';

const ConsultationContext = createContext(null);

export const ConsultationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ConsultationContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const ctx = useContext(ConsultationContext);
  if (!ctx) throw new Error('useConsultation must be used inside ConsultationProvider');
  return ctx;
};
