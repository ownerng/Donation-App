import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast"



import React, { useState } from 'react';
import { useCounter } from '../../context/CounterContext';

const DataCounter: React.FC = () => {
  const { addDonation } = useCounter();
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) {
      setError('Por favor, ingresa una cantidad válida mayor que 0.');
      return;
    }
    addDonation(value);
    setAmount('');
    toast({
      title: "Donación agregada",
      description: "la donación se ha agregado correctamente",
    })
    setError('');
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-md mx-auto h-screen">

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-6 text-center">Ingresar Donación</CardTitle>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <Label htmlFor="amount">Cantidad ($):</Label>
        <Input 
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Ej. 50"
        min="0"
        step="10"
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
        </CardContent>
      </Card>
      
    </div>
  );
};

export default DataCounter;
