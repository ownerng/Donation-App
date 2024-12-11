import React, { useState } from 'react';
import { useCounter } from '../../context/CounterContext';

const DataCounter: React.FC = () => {
  const { addDonation } = useCounter();
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) {
      setError('Por favor, ingresa una cantidad válida mayor que 0.');
      return;
    }
    addDonation(value);
    setAmount('');
    setError('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Ingresar Donación</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-gray-700 mb-2">
            Cantidad ($):
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Ej. 50"
            min="0"
            step="0.01"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Agregar Donación
        </button>
      </form>
    </div>
  );
};

export default DataCounter;
