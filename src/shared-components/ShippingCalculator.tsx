import React, { useState, useEffect } from 'react';
import { Ship, Truck, Plane, MapPin, Calculator, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface ShippingCalculatorProps {
  carPrice: number;
  isDarkMode?: boolean;
}

interface Port {
  id: string;
  name: string;
  country: string;
  region: string;
  distance: number; // in km from origin
}

const ShippingCalculator: React.FC<ShippingCalculatorProps> = ({ carPrice, isDarkMode = false }) => {
  const [selectedPort, setSelectedPort] = useState<Port | null>(null);
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express' | 'premium'>('standard');
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [includeDoorDelivery, setIncludeDoorDelivery] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Sample ports data (in real app, this would come from API)
  const ports: Port[] = [
    { id: 'nyc', name: 'New York', country: 'USA', region: 'North America', distance: 0 },
    { id: 'la', name: 'Los Angeles', country: 'USA', region: 'North America', distance: 4500 },
    { id: 'london', name: 'London', country: 'UK', region: 'Europe', distance: 5500 },
    { id: 'dubai', name: 'Dubai', country: 'UAE', region: 'Middle East', distance: 11000 },
    { id: 'tokyo', name: 'Tokyo', country: 'Japan', region: 'Asia', distance: 11000 },
    { id: 'sydney', name: 'Sydney', country: 'Australia', region: 'Oceania', distance: 16000 },
    { id: 'mumbai', name: 'Mumbai', country: 'India', region: 'Asia', distance: 12000 },
    { id: 'singapore', name: 'Singapore', country: 'Singapore', region: 'Asia', distance: 15000 },
  ];

  const shippingRates = {
    standard: { baseRate: 0.5, timeWeeks: '6-8', name: 'Standard Shipping' },
    express: { baseRate: 0.8, timeWeeks: '3-4', name: 'Express Shipping' },
    premium: { baseRate: 1.2, timeWeeks: '1-2', name: 'Premium Air Freight' },
  };

  const calculateShipping = () => {
    if (!selectedPort) return;

    // Base shipping cost calculation
    const baseShipping = selectedPort.distance * shippingRates[shippingMethod].baseRate;
    
    // Insurance (2% of car value)
    const insurance = includeInsurance ? carPrice * 0.02 : 0;
    
    // Door delivery ($500-$2000 based on distance)
    const doorDelivery = includeDoorDelivery ? 500 + (selectedPort.distance * 0.1) : 0;
    
    // Calculate shipping cost
    const shipping = baseShipping + insurance + doorDelivery;
    
    // Import duties and taxes (varies by country, simplified here)
    const importDuty = carPrice * getImportDutyRate(selectedPort.country);
    const vat = (carPrice + shipping) * getVATRate(selectedPort.country);
    const totalTaxes = importDuty + vat;
    
    setShippingCost(shipping);
    setTaxes(totalTaxes);
    setTotalCost(carPrice + shipping + totalTaxes);
  };

  const getImportDutyRate = (country: string): number => {
    const rates: { [key: string]: number } = {
      'USA': 0.025,
      'UK': 0.10,
      'UAE': 0.05,
      'Japan': 0.0,
      'Australia': 0.05,
      'India': 0.125,
      'Singapore': 0.0,
    };
    return rates[country] || 0.10;
  };

  const getVATRate = (country: string): number => {
    const rates: { [key: string]: number } = {
      'USA': 0.0875, // Average sales tax
      'UK': 0.20,
      'UAE': 0.05,
      'Japan': 0.10,
      'Australia': 0.10,
      'India': 0.28,
      'Singapore': 0.08,
    };
    return rates[country] || 0.15;
  };

  useEffect(() => {
    calculateShipping();
  }, [selectedPort, shippingMethod, includeInsurance, includeDoorDelivery]);

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    } shadow-xl`}>
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Ship className="text-blue-500" />
        Shipping Calculator
      </h3>

      {/* Destination Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          <MapPin size={16} className="inline mr-1" />
          Select Destination Port
        </label>
        <select
          value={selectedPort?.id || ''}
          onChange={(e) => setSelectedPort(ports.find(p => p.id === e.target.value) || null)}
          className={`w-full p-3 rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-gray-50 border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <option value="">Choose a destination...</option>
          {ports.map(port => (
            <option key={port.id} value={port.id}>
              {port.name}, {port.country} - {port.region}
            </option>
          ))}
        </select>
      </div>

      {/* Shipping Method */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Shipping Method</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Object.entries(shippingRates).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setShippingMethod(key as any)}
              className={`p-4 rounded-lg border-2 transition-all ${
                shippingMethod === key
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                  : isDarkMode
                    ? 'border-gray-600 hover:border-gray-500'
                    : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-center mb-2">
                {key === 'standard' && <Ship size={24} />}
                {key === 'express' && <Truck size={24} />}
                {key === 'premium' && <Plane size={24} />}
              </div>
              <div className="font-semibold">{value.name}</div>
              <div className="text-sm opacity-70">{value.timeWeeks} weeks</div>
            </button>
          ))}
        </div>
      </div>

      {/* Additional Options */}
      <div className="mb-6 space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={includeInsurance}
            onChange={(e) => setIncludeInsurance(e.target.checked)}
            className="w-5 h-5 rounded text-blue-500"
          />
          <span>Include Shipping Insurance (2% of vehicle value)</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={includeDoorDelivery}
            onChange={(e) => setIncludeDoorDelivery(e.target.checked)}
            className="w-5 h-5 rounded text-blue-500"
          />
          <span>Door-to-Door Delivery Service</span>
        </label>
      </div>

      {/* Cost Breakdown */}
      {selectedPort && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}
        >
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Calculator size={18} />
            Cost Breakdown
          </h4>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Vehicle Price:</span>
              <span className="font-semibold">${carPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Cost:</span>
              <span className="font-semibold">${Math.round(shippingCost).toLocaleString()}</span>
            </div>
            {includeInsurance && (
              <div className="flex justify-between text-sm opacity-70">
                <span className="ml-4">• Insurance:</span>
                <span>${Math.round(carPrice * 0.02).toLocaleString()}</span>
              </div>
            )}
            {includeDoorDelivery && (
              <div className="flex justify-between text-sm opacity-70">
                <span className="ml-4">• Door Delivery:</span>
                <span>${Math.round(500 + selectedPort.distance * 0.1).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Import Duties & Taxes:</span>
              <span className="font-semibold">${Math.round(taxes).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm opacity-70">
              <span className="ml-4">• Import Duty ({(getImportDutyRate(selectedPort.country) * 100).toFixed(1)}%):</span>
              <span>${Math.round(carPrice * getImportDutyRate(selectedPort.country)).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm opacity-70">
              <span className="ml-4">• VAT/Tax ({(getVATRate(selectedPort.country) * 100).toFixed(1)}%):</span>
              <span>${Math.round((carPrice + shippingCost) * getVATRate(selectedPort.country)).toLocaleString()}</span>
            </div>
            
            <div className="pt-3 mt-3 border-t border-gray-300 dark:border-gray-600">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Landed Cost:</span>
                <span className="text-blue-500">${Math.round(totalCost).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm opacity-70 mt-1">
                <span>Estimated Delivery:</span>
                <span>{shippingRates[shippingMethod].timeWeeks} weeks</span>
              </div>
            </div>
          </div>

          <div className={`mt-4 p-3 rounded-lg flex items-start gap-2 ${
            isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'
          }`}>
            <Info size={16} className="text-blue-500 mt-0.5" />
            <p className="text-sm">
              This is an estimate. Final costs may vary based on current exchange rates, 
              customs regulations, and additional local fees.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ShippingCalculator;