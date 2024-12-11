import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { CounterProvider } from './context/CounterContext';
import ShowCounter from './pages/Counter/Counter';
import DataCounter from './pages/DataCounter/DataCounter';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <CounterProvider>
      <Router>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/show-counter" replace />} />
            <Route path="/show-counter" element={<ShowCounter />} />
            <Route path="/data-counter" element={<DataCounter />} />
            {/* Ruta 404 */}
            <Route path="*" element={<div className="text-center text-xl">Página no encontrada</div>} />
          </Routes>
        </div>
      </Router>
    </CounterProvider>
  );
};

export default App;
