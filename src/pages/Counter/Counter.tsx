// src/pages/ShowCounter.tsx
import React from 'react';
import { useCounter } from '../../context/CounterContext';

const ShowCounter: React.FC = () => {
  const { total, donations } = useCounter();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Donaciones</h1>
      <div className="text-6xl font-extrabold text-green-500 mb-8">${total.toLocaleString()}</div>
      <h2 className="text-2xl font-semibold mb-4">Últimas Donaciones</h2>
      {donations.length === 0 ? (
        <p className="text-gray-600">No hay donaciones aún.</p>
      ) : (
        <ul className="space-y-2">
          {donations.map((donation) => (
            <li key={donation.id} className="border p-2 rounded shadow">
              <span className="font-semibold">${donation.amount.toLocaleString()}</span> -{' '}
              <span className="text-sm text-gray-500">
                {new Date(donation.timestamp).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowCounter;
