// src/context/CounterContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Donation {
  id: number;
  amount: number;
  timestamp: string; // Cambiado a string para facilitar la serialización
}

interface CounterContextType {
  total: number;
  donations: Donation[];
  addDonation: (amount: number) => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

interface CounterProviderProps {
  children: ReactNode;
}

const CHANNEL_NAME = 'donation_channel';

export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [total, setTotal] = useState<number>(0);
  const [donations, setDonations] = useState<Donation[]>([]);

  // Inicializar BroadcastChannel
  useEffect(() => {
    const channel = new BroadcastChannel(CHANNEL_NAME);

    // Listener para recibir mensajes de donaciones
    channel.onmessage = (event) => {
      const { amount, id, timestamp } = event.data;
      setTotal((prev) => prev + amount);
      setDonations((prev) => {
        const newDonation: Donation = { id, amount, timestamp };
        const updatedDonations = [newDonation, ...prev];
        return updatedDonations.slice(0, 3); // Mantiene solo las últimas 3 donaciones
      });
    };

    // Cleanup al desmontar el componente
    return () => {
      channel.close();
    };
  }, []);

  const addDonation = (amount: number) => {
    setTotal((prev) => prev + amount);
    const newDonation: Donation = {
      id: Date.now(),
      amount,
      timestamp: new Date().toISOString(),
    };
    setDonations((prev) => [newDonation, ...prev].slice(0, 3));

    // Enviar la donación a través del canal
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.postMessage(newDonation);
    channel.close();
  };

  return (
    <CounterContext.Provider value={{ total, donations, addDonation }}>
      {children}
    </CounterContext.Provider>
  );
};
