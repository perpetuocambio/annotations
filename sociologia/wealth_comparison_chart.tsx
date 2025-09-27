import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScaleType } from 'recharts';

const WealthComparisonChart = () => {
  const [scale, setScale] = useState('log');

  // Datos actualizados 2025 con valores reales en euros
  const wealthData = [
    { category: 'SMI España 2025', amount: 16576, description: '€16.576/año (1.184€/mes)' },
    { category: 'Salario Medio España', amount: 28050, description: '€28.050/año (2.290€/mes)' },
    { category: 'Enfermero/a', amount: 32000, description: '€32.000/año' },
    { category: 'Profesor/a', amount: 38000, description: '€38.000/año' },
    { category: 'Ingeniero', amount: 52000, description: '€52.000/año' },
    { category: 'Médico Especialista', amount: 95000, description: '€95.000/año' },
    { category: 'Director Ejecutivo', amount: 120000, description: '€120.000/año' },
    { category: '1% más rico España', amount: 2500000, description: '€2,5 millones (patrimonio)' },
    { category: 'Juan Roig (Mercadona)', amount: 4200000000, description: '€4.200 millones' },
    { category: 'Rafael del Pino', amount: 4800000000, description: '€4.800 millones' },
    { category: 'Sandra Ortega', amount: 9200000000, description: '€9.200 millones' },
    { category: 'Amancio Ortega', amount: 125000000000, description: '€125.000 millones' },
    { category: 'Warren Buffett', amount: 134000000000, description: '€134.000 millones' },
    { category: 'Bill Gates', amount: 142000000000, description: '€142.000 millones' },
    { category: 'Larry Page (Google)', amount: 158000000000, description: '€158.000 millones' },
    { category: 'Sergey Brin (Google)', amount: 152000000000, description: '€152.000 millones' },
    { category: 'Jensen Huang (Nvidia)', amount: 168000000000, description: '€168.000 millones' },
    { category: 'Jeff Bezos (Amazon)', amount: 215000000000, description: '€215.000 millones' },
    { category: 'Mark Zuckerberg', amount: 261000000000, description: '€261.000 millones' },
    { category: 'Larry Ellison (Oracle)', amount: 363000000000, description: '€363.000 millones' },
    { category: 'Elon Musk (Tesla/X)', amount: 471000000000, description: '€471.000 millones' }
  ];

  const formatNumber = (value) => {
    if (value >= 1000000000) {
      return `€${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
      return `€${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `€${(value / 1000).toFixed(0)}K`;
    } else {
      return `€${value}`;
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg max-w-xs">
          <p className="font-semibold text-gray-800">{label}</p>
          <p className="text-lg font-bold text-blue-600">{data.description}</p>
          <p className="text-sm text-gray-600 mt-1">
            {data.amount >= 1000000 ? 'Patrimonio total' : 'Salario anual'}
          </p>
        </div>
      );
    }
    return null;
  };

  // Añadir colores directamente a los datos
  const getColoredData = () => {
    return wealthData.map((item, index) => ({
      ...item,
      fill: index < 7 ? '#3B82F6' : index < 12 ? '#EF4444' : '#7C3AED'
    }));
  };

  return (
    <div className="w-full p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Desigualdad de Riqueza 2025: La Realidad en Números
        </h1>
        <p className="text-gray-600 mb-4">
          Comparación actualizada entre salarios profesionales en España y el patrimonio de los superricos mundiales
        </p>
        
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setScale('log')}
            className={`px-4 py-2 rounded-lg ${scale === 'log' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Escala Logarítmica
          </button>
          <button
            onClick={() => setScale('linear')}
            className={`px-4 py-2 rounded-lg ${scale === 'linear' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Escala Lineal
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Profesionales España</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>Ricos España</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-600 rounded"></div>
            <span>Superricos Mundiales</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4" style={{ height: '600px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getColoredData()}
            margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="category"
              angle={-45}
              textAnchor="end"
              height={120}
              fontSize={11}
              interval={0}
            />
            <YAxis 
              scale={scale}
              domain={scale === 'log' ? [10000, 'dataMax'] : [0, 'dataMax']}
              tickFormatter={formatNumber}
              fontSize={11}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">Profesionales España</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Salarios anuales típicos</li>
            <li>• Entre €15K - €90K al año</li>
            <li>• Trabajo especializado</li>
          </ul>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-bold text-red-800 mb-2">Millonarios España</h3>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• Grandes empresarios españoles</li>
            <li>• Entre €4.200M - €125.000M</li>
            <li>• Liderado por Amancio Ortega</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800 mb-2">Superricos Mundiales</h3>
          <ul className="text-sm text-purple-700 space-y-1">
            <li>• Tech, AI y e-commerce</li>
            <li>• Entre €134.000M - €471.000M</li>
            <li>• Musk lidera con €471.000M</li>
          </ul>
        </div>
      </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800 mb-2">📊 Datos Impactantes 2025:</h4>
        <div className="text-sm text-yellow-700 space-y-2">
          <p><strong>Diferencia extrema:</strong> Elon Musk tiene un patrimonio 4.9 millones de veces mayor que el salario anual de un médico especialista español.</p>
          <p><strong>SMI vs Musk:</strong> Un trabajador con salario mínimo necesitaría trabajar 28.4 millones de años para alcanzar la fortuna de Musk.</p>
          <p><strong>España:</strong> Para estar en el 1% más rico necesitas €2,5 millones de patrimonio.</p>
          <p><strong>AI Boom:</strong> Jensen Huang (Nvidia) y Larry Ellison han disparado su riqueza gracias a la inteligencia artificial.</p>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>Fuentes: INE España 2025, Forbes Real-Time Billionaires septiembre 2025, BOE SMI 2025</p>
      </div>
    </div>
  );
};

export default WealthComparisonChart;