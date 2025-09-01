import React, { useState } from 'react';
import { X, Plus, Check, Minus, Download, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  category: string;
  engine: string;
  horsepower: number;
  acceleration: string;
  topSpeed: string;
  mpg: { city: number; highway: number; combined: number };
  seats: number;
  transmission: string;
  drivetrain: string;
  fuel: string;
  images: { exterior: string[] };
  features: {
    safety: string[];
    technology: string[];
    comfort: string[];
    entertainment: string[];
  };
}

interface ComparisonToolProps {
  cars: Car[];
  maxCompare?: number;
  isDarkMode?: boolean;
}

const ComparisonTool: React.FC<ComparisonToolProps> = ({ 
  cars, 
  maxCompare = 4, 
  isDarkMode = false 
}) => {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const addToCompare = (car: Car) => {
    if (selectedCars.length < maxCompare && !selectedCars.find(c => c.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const removeFromCompare = (carId: number) => {
    setSelectedCars(selectedCars.filter(c => c.id !== carId));
  };

  const isSelected = (carId: number) => {
    return selectedCars.some(c => c.id === carId);
  };

  const exportComparison = () => {
    // Export as JSON for now, could be PDF later
    const data = JSON.stringify(selectedCars, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'car-comparison.json';
    a.click();
  };

  const shareComparison = () => {
    const url = window.location.href + '?compare=' + selectedCars.map(c => c.id).join(',');
    navigator.clipboard.writeText(url);
    alert('Comparison link copied to clipboard!');
  };

  const specs = [
    { label: 'Price', key: 'price', format: (v: any) => `$${v.toLocaleString()}` },
    { label: 'Engine', key: 'engine' },
    { label: 'Horsepower', key: 'horsepower', format: (v: any) => `${v} hp` },
    { label: 'Acceleration', key: 'acceleration' },
    { label: 'Top Speed', key: 'topSpeed' },
    { label: 'Transmission', key: 'transmission' },
    { label: 'Drivetrain', key: 'drivetrain' },
    { label: 'Fuel Type', key: 'fuel' },
    { label: 'Seats', key: 'seats' },
    { label: 'City MPG', key: 'mpg.city', format: (v: any) => `${v} mpg` },
    { label: 'Highway MPG', key: 'mpg.highway', format: (v: any) => `${v} mpg` },
  ];

  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const getDifference = (values: any[]) => {
    const uniqueValues = [...new Set(values)];
    return uniqueValues.length > 1;
  };

  return (
    <>
      {/* Comparison Bar */}
      <AnimatePresence>
        {selectedCars.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className={`fixed bottom-0 left-0 right-0 z-40 p-4 ${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            } shadow-2xl border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-semibold">
                  Comparing {selectedCars.length} of {maxCompare} vehicles
                </span>
                <div className="flex gap-2">
                  {selectedCars.map(car => (
                    <div
                      key={car.id}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                        isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                      }`}
                    >
                      <span className="text-sm">
                        {car.make} {car.model}
                      </span>
                      <button
                        onClick={() => removeFromCompare(car.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowComparison(true)}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  disabled={selectedCars.length < 2}
                >
                  Compare Now
                </button>
                <button
                  onClick={() => setSelectedCars([])}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <AnimatePresence>
        {showComparison && selectedCars.length >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setShowComparison(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className={`w-full max-w-6xl max-h-[90vh] overflow-auto rounded-2xl ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              } p-6`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Vehicle Comparison</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={exportComparison}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Download size={20} />
                  </button>
                  <button
                    onClick={shareComparison}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Share2 size={20} />
                  </button>
                  <button
                    onClick={() => setShowComparison(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left p-4">Feature</th>
                      {selectedCars.map(car => (
                        <th key={car.id} className="text-center p-4">
                          <img 
                            src={car.images.exterior[0]} 
                            alt={`${car.make} ${car.model}`}
                            className="w-32 h-20 object-cover rounded-lg mx-auto mb-2"
                          />
                          <div className="font-semibold">{car.make}</div>
                          <div className="text-sm opacity-70">{car.model}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec, index) => {
                      const values = selectedCars.map(car => getNestedValue(car, spec.key));
                      const isDifferent = getDifference(values);
                      
                      return (
                        <tr 
                          key={spec.key}
                          className={`border-t ${
                            isDarkMode ? 'border-gray-700' : 'border-gray-200'
                          } ${isDifferent ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''}`}
                        >
                          <td className="p-4 font-medium">{spec.label}</td>
                          {values.map((value, i) => (
                            <td key={i} className="p-4 text-center">
                              {spec.format ? spec.format(value) : value}
                              {isDifferent && i === 0 && (
                                <span className="ml-2 text-green-500">
                                  {values.every((v, idx) => idx === 0 || v <= value) && '✓'}
                                </span>
                              )}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                    
                    {/* Features Comparison */}
                    {Object.keys(selectedCars[0].features).map(category => (
                      <tr key={category} className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="p-4 font-medium capitalize">{category} Features</td>
                        {selectedCars.map(car => (
                          <td key={car.id} className="p-4">
                            <ul className="text-sm space-y-1">
                              {car.features[category as keyof typeof car.features].slice(0, 3).map((feature, i) => (
                                <li key={i} className="flex items-center gap-1">
                                  <Check size={14} className="text-green-500" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add to Compare Buttons (to be used in car cards) */}
      <div className="comparison-buttons">
        {cars.map(car => (
          <button
            key={car.id}
            onClick={() => isSelected(car.id) ? removeFromCompare(car.id) : addToCompare(car)}
            className={`comparison-btn ${
              isSelected(car.id) 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            } px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all`}
            disabled={!isSelected(car.id) && selectedCars.length >= maxCompare}
          >
            {isSelected(car.id) ? (
              <>
                <Check size={16} />
                Added
              </>
            ) : (
              <>
                <Plus size={16} />
                Compare
              </>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default ComparisonTool;