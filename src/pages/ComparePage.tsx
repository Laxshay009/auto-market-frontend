import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, X, Check, Minus, Star, TrendingUp, Users, 
  Zap, Shield, Award, Heart, Share2, MessageCircle,
  ChevronRight, Eye, ArrowRight
} from 'lucide-react';
import { carsDatabase } from '../data/carsDatabase';

interface ComparePageProps {
  isDarkMode?: boolean;
}

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  type: string;
  images: {
    exterior: string[];
    interior: string[];
  };
  specs: {
    engine: string;
    horsepower: number;
    torque: number;
    acceleration: string;
    topSpeed: number;
    transmission: string;
    drivetrain: string;
  };
  features: {safety:string[]};
  mpg?: {
    city: number;
    highway: number;
    combined: number;
  };
  electricRange?: number;
  seatingCapacity: number;
  dealer: {
    name: string;
    location: string;
    rating: number;
  };
}

const ComparePage: React.FC<ComparePageProps> = ({ isDarkMode = false }) => {
  const [selectedVehicles, setSelectedVehicles] = useState<Vehicle[]>([]);
  const [showSelector, setShowSelector] = useState(false);
  const [activeComparisons, setActiveComparisons] = useState(247);

  // Simulate active comparisons
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveComparisons(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const addVehicle = (vehicle: any) => {
    if (selectedVehicles.length < 4 && !selectedVehicles.find(v => v.id === vehicle.id)) {
      // Map the vehicle data to match the expected structure
      const mappedVehicle: Vehicle = {
        ...vehicle,
        specs: {
          engine: vehicle.engine || 'N/A',
          horsepower: vehicle.horsepower || 0,
          torque: vehicle.torque || 0,
          acceleration: vehicle.acceleration || 'N/A',
          topSpeed: vehicle.topSpeed || 0,
          transmission: vehicle.transmission || 'Automatic',
          drivetrain: vehicle.drivetrain || 'N/A'
        }
      };
      setSelectedVehicles([...selectedVehicles, mappedVehicle]);
      setShowSelector(false);
    }
  };

  const removeVehicle = (vehicleId: number) => {
    setSelectedVehicles(selectedVehicles.filter(v => v.id !== vehicleId));
  };

  const comparisonFeatures = [
    { key: 'price', label: 'Starting Price', format: (v: Vehicle) => `$${v.price.toLocaleString()}`, highlight: true },
    { key: 'type', label: 'Vehicle Type', format: (v: Vehicle) => v.type || v.category || 'N/A' },
    { key: 'year', label: 'Model Year', format: (v: Vehicle) => v.year.toString() },
    { key: 'engine', label: 'Engine', format: (v: Vehicle) => v.engine || 'N/A' },
    { key: 'acceleration', label: '0-60 mph', format: (v: Vehicle) => v.acceleration || 'N/A', highlight: true },
    { key: 'topSpeed', label: 'Top Speed', format: (v: Vehicle) => v.topSpeed || 'N/A' },
    { key: 'horsepower', label: 'Horsepower', format: (v: Vehicle) => `${v.horsepower || 0} hp`, highlight: true },
    { key: 'torque', label: 'Torque', format: (v: Vehicle) => v.torque || 'N/A' },
    { key: 'mpg', label: 'Fuel Economy', format: (v: Vehicle) => v.mpg ? `${v.mpg.combined} mpg` : v.electricRange ? `${v.electricRange} mi range` : 'N/A' },
    { key: 'transmission', label: 'Transmission', format: (v: Vehicle) => v.transmission || 'Automatic' },
    { key: 'drivetrain', label: 'Drivetrain', format: (v: Vehicle) => v.drivetrain || 'N/A' },
    { key: 'seating', label: 'Seating', format: (v: Vehicle) => `${v.seats || v.seatingCapacity || 5} passengers` },
    { key: 'dealer', label: 'Dealer Rating', format: (v: Vehicle) => `⭐ ${v.rating || 4.5}/5` },
  ];

  const getWinner = (feature: string) => {
    if (selectedVehicles.length < 2) return null;
    
    switch(feature) {
      case 'price':
        return selectedVehicles.reduce((min, v) => v.price < min.price ? v : min).id;
      case 'horsepower':
        return selectedVehicles.reduce((max, v) => (v.horsepower || 0) > (max.horsepower || 0) ? v : max).id;
      case 'acceleration':
        return selectedVehicles.reduce((min, v) => {
          const aTime = parseFloat(v.acceleration || '999');
          const minTime = parseFloat(min.acceleration || '999');
          return aTime < minTime ? v : min;
        }).id;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen pt-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-bg text-white' : 'bg-light-bg text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Live Badge */}
            <div className="live-indicator inline-flex mx-auto mb-6">
              <span className="live-dot" />
              <span className="text-modern-pink font-medium">LIVE • {activeComparisons} active comparisons</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Compare & Decide
            </h1>
            <p className="text-xl opacity-80 mb-8">
              Side-by-side comparison made simple • Community insights included
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
              <div className="card-modern p-4">
                <Users className="text-modern-blue mb-2 mx-auto" size={24} />
                <div className="font-bold">12.4K</div>
                <div className="text-sm opacity-70">Users Compared</div>
              </div>
              <div className="card-modern p-4">
                <TrendingUp className="text-modern-orange mb-2 mx-auto" size={24} />
                <div className="font-bold">Top Pick</div>
                <div className="text-sm opacity-70">BMW M5</div>
              </div>
              <div className="card-modern p-4">
                <Award className="text-modern-green mb-2 mx-auto" size={24} />
                <div className="font-bold">98%</div>
                <div className="text-sm opacity-70">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Compare Up to 4 Cars</h2>
            <p className="text-opacity-70">Select vehicles to see detailed side-by-side comparison</p>
          </div>
          
          {/* Vehicle Slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, index) => {
              const vehicle = selectedVehicles[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {vehicle ? (
                    <div className="card-modern p-0 overflow-hidden group">
                      {/* Remove Button */}
                      <button
                        onClick={() => removeVehicle(vehicle.id)}
                        className="absolute top-4 right-4 z-10 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X size={16} />
                      </button>
                      
                      {/* Vehicle Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={vehicle.images.exterior[0]}
                          alt={`${vehicle.make} ${vehicle.model}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      
                      {/* Vehicle Info */}
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">
                          {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-sm opacity-70 mb-2">{vehicle.year}</p>
                        <p className="text-2xl font-bold text-modern-blue">
                          ${vehicle.price.toLocaleString()}
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="flex items-center gap-2 mt-3 text-xs">
                          <span className="flex items-center gap-1">
                            <Eye size={12} />
                            {Math.floor(Math.random() * 1000) + 500}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart size={12} />
                            {Math.floor(Math.random() * 200) + 100}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowSelector(true)}
                      className={`w-full h-[200px] rounded-xl flex flex-col items-center justify-center transition-all hover:scale-[1.02] group relative ${
                        isDarkMode 
                          ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-modern-blue' 
                          : 'bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-modern-blue'
                      }`}
                    >
                      {/* Subtle animated gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-modern-blue/0 to-modern-purple/0 group-hover:from-modern-blue/5 group-hover:to-modern-purple/5 transition-all duration-500 rounded-xl" />
                      
                      {/* Sleek Plus icon */}
                      <div className="relative mb-4">
                        <div className="p-3 rounded-full border-2 border-dashed border-gray-400 group-hover:border-modern-blue transition-colors">
                          <Plus className="text-gray-400 group-hover:text-modern-blue transition-colors" size={24} />
                        </div>
                      </div>
                      
                      {/* Text content */}
                      <span className="text-lg font-medium text-gray-600 dark:text-gray-300 group-hover:text-modern-blue transition-colors">
                        Add Vehicle
                      </span>
                      <span className="text-xs text-gray-400 mt-1">Click to select</span>
                      
                      {/* Minimal slot indicator */}
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="text-xs text-gray-400">Slot {index + 1}</span>
                      </div>
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Comparison Table */}
          {selectedVehicles.length >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-modern overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-modern-blue to-modern-purple">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Shield size={24} />
                  Detailed Comparison
                </h2>
                <p className="text-white/80 mt-1">Best values highlighted automatically</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={isDarkMode ? 'bg-dark-surface' : 'bg-gray-50'}>
                    <tr>
                      <th className="text-left p-4 font-medium">Feature</th>
                      {selectedVehicles.map(vehicle => (
                        <th key={vehicle.id} className="text-center p-4 font-medium">
                          {vehicle.make} {vehicle.model}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => {
                      const winner = getWinner(feature.key);
                      return (
                        <tr 
                          key={feature.key} 
                          className={`border-t ${
                            isDarkMode ? 'border-gray-700' : 'border-gray-200'
                          } ${index % 2 === 0 ? (isDarkMode ? 'bg-dark-bg' : 'bg-gray-50/50') : ''}`}
                        >
                          <td className="p-4 font-medium">
                            {feature.highlight && <Zap className="inline mr-2 text-modern-orange" size={16} />}
                            {feature.label}
                          </td>
                          {selectedVehicles.map(vehicle => (
                            <td 
                              key={vehicle.id} 
                              className={`text-center p-4 ${
                                winner === vehicle.id && feature.highlight
                                  ? 'bg-modern-green/10 text-modern-green font-bold' 
                                  : ''
                              }`}
                            >
                              {feature.format(vehicle)}
                              {winner === vehicle.id && feature.highlight && (
                                <Award className="inline ml-2 text-modern-green" size={16} />
                              )}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              {/* Feature Comparison */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-4">Standard Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {selectedVehicles.map(vehicle => (
                    <div key={vehicle.id}>
                      <h4 className="font-medium mb-2 text-sm opacity-70">
                        {vehicle.make} {vehicle.model}
                      </h4>
                      <ul className="space-y-1">
                        {vehicle.features?.safety?.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-1">
                            <Check className="text-modern-green mt-0.5" size={14} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 bg-gradient-to-r from-modern-blue/10 to-modern-purple/10 flex flex-wrap gap-4 justify-center">
                <button className="btn-modern flex items-center gap-2">
                  <Share2 size={18} />
                  Share Comparison
                </button>
                <button className="btn-vibrant flex items-center gap-2">
                  <MessageCircle size={18} />
                  Ask Community
                </button>
                <Link 
                  to="/showroom"
                  className="btn-modern-outline flex items-center gap-2"
                >
                  Add More Vehicles
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Vehicle Selector Modal */}
          {showSelector && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`w-full max-w-4xl max-h-[80vh] overflow-auto rounded-2xl p-6 ${
                  isDarkMode ? 'bg-dark-surface' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Select a Vehicle</h2>
                  <button
                    onClick={() => setShowSelector(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {carsDatabase.map(vehicle => (
                    <button
                      key={vehicle.id}
                      onClick={() => addVehicle(vehicle as any)}
                      disabled={selectedVehicles.find(v => v.id === vehicle.id) !== undefined}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedVehicles.find(v => v.id === vehicle.id)
                          ? 'border-gray-300 opacity-50 cursor-not-allowed'
                          : 'border-modern-blue hover:bg-modern-blue/10 hover:scale-105'
                      }`}
                    >
                      <img
                        src={vehicle.images.exterior[0]}
                        alt={`${vehicle.make} ${vehicle.model}`}
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <h3 className="font-bold">{vehicle.make} {vehicle.model}</h3>
                      <p className="text-sm opacity-70">{vehicle.year}</p>
                      <p className="text-modern-blue font-bold">
                        ${vehicle.price.toLocaleString()}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ComparePage;