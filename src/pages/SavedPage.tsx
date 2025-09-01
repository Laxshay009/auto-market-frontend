import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bookmark, Car, Calendar, Trash2, Eye, Edit, 
  ChevronRight, Plus, Package, Settings, DollarSign
} from 'lucide-react';

interface SavedPageProps {
  isDarkMode?: boolean;
}

interface SavedConfiguration {
  id: number;
  vehicleId: number;
  name: string;
  make: string;
  model: string;
  year: number;
  exterior: string;
  interior: string;
  wheels: string;
  totalPrice: number;
  basePrice: number;
  savedDate: string;
  image: string;
}

const SavedPage: React.FC<SavedPageProps> = ({ isDarkMode = false }) => {
  const [savedConfigs] = useState<SavedConfiguration[]>([
    {
      id: 1,
      vehicleId: 1,
      name: 'Sport Edition',
      make: 'Mercedes-Benz',
      model: 'S-Class',
      year: 2024,
      exterior: 'Crimson Red',
      interior: 'Black Premium Leather',
      wheels: '20" Performance Wheels',
      totalPrice: 147750,
      basePrice: 142000,
      savedDate: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      vehicleId: 2,
      name: 'Luxury Package',
      make: 'BMW',
      model: 'M5',
      year: 2024,
      exterior: 'Champagne Gold',
      interior: 'Tan Nappa Leather',
      wheels: '21" Luxury Wheels',
      totalPrice: 113200,
      basePrice: 108000,
      savedDate: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1555215858-9df5013b7c89?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      vehicleId: 3,
      name: 'Executive Style',
      make: 'Porsche',
      model: '911 Turbo',
      year: 2024,
      exterior: 'Deep Blue',
      interior: 'White Premium Leather',
      wheels: '19" Alloy Wheels',
      totalPrice: 182300,
      basePrice: 179000,
      savedDate: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800'
    },
    {
      id: 4,
      vehicleId: 4,
      name: 'Night Edition',
      make: 'Audi',
      model: 'RS7',
      year: 2024,
      exterior: 'Jet Black',
      interior: 'Red Sport Leather',
      wheels: '22" Black Wheels',
      totalPrice: 122500,
      basePrice: 118000,
      savedDate: '2024-01-03',
      image: 'https://images.unsplash.com/photo-1606664515524-ed618f6bb2b3?auto=format&fit=crop&w=800'
    }
  ]);

  return (
    <div className={`min-h-screen pt-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-bg text-white' : 'bg-light-bg text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className={`py-12 px-6 ${
        isDarkMode ? 'bg-dark-surface' : 'bg-gradient-to-br from-premium-blue/5 to-premium-gold/5'
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bookmark className="text-premium-gold" size={48} />
              <h1 className="text-5xl font-bold">
                Saved Configurations
              </h1>
            </div>
            <p className="text-xl opacity-80 mb-6">
              Your personalized vehicle configurations
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Package className="text-premium-blue" size={20} />
                <span className="font-semibold">{savedConfigs.length} Saved</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="text-premium-emerald" size={20} />
                <span className="font-semibold">
                  ${savedConfigs.reduce((sum, c) => sum + c.totalPrice, 0).toLocaleString()} Total Value
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-premium-orange" size={20} />
                <span className="font-semibold">Last saved {savedConfigs[0]?.savedDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Saved Configurations Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {savedConfigs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedConfigs.map((config, index) => (
                <motion.div
                  key={config.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-premium overflow-hidden group hover:shadow-2xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={config.image}
                      alt={`${config.make} ${config.model}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Config Name Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-premium-gold text-white text-xs font-bold rounded-full">
                      {config.name}
                    </div>
                    
                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Edit size={16} className="text-premium-blue" />
                      </button>
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div>
                    
                    {/* Vehicle Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg">
                        {config.year} {config.make} {config.model}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="p-6">
                    {/* Configuration Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-premium-gray">Exterior</span>
                        <span className="font-medium">{config.exterior}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-premium-gray">Interior</span>
                        <span className="font-medium">{config.interior}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-premium-gray">Wheels</span>
                        <span className="font-medium">{config.wheels}</span>
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="pt-4 border-t border-premium-silver">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-premium-gray">Total Price</span>
                        <span className="text-2xl font-bold text-premium-blue">
                          ${config.totalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-premium-gray">
                        <span>Base: ${config.basePrice.toLocaleString()}</span>
                        <span>Saved {config.savedDate}</span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-2 mt-4">
                      <Link 
                        to={`/vehicle/${config.vehicleId}`}
                        className="btn-premium-outline flex-1 text-center py-2 text-sm flex items-center justify-center gap-1"
                      >
                        <Eye size={16} />
                        View
                      </Link>
                      <Link 
                        to={`/vehicle/${config.vehicleId}`}
                        className="btn-premium flex-1 text-center py-2 text-sm flex items-center justify-center gap-1"
                      >
                        <Settings size={16} />
                        Configure
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Add New Configuration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: savedConfigs.length * 0.1 }}
              >
                <Link
                  to="/catalog"
                  className={`h-full min-h-[400px] rounded-xl border-2 border-dashed flex flex-col items-center justify-center transition-all hover:scale-105 group ${
                    isDarkMode 
                      ? 'border-gray-700 hover:border-premium-gold bg-dark-surface/50' 
                      : 'border-gray-300 hover:border-premium-gold bg-white/50'
                  }`}
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-premium-gold/20 rounded-full blur-xl scale-150 animate-pulse" />
                    <div className="relative p-4 bg-gradient-to-br from-premium-gold to-amber-500 rounded-full">
                      <Plus className="text-white" size={32} />
                    </div>
                  </div>
                  <span className="text-lg font-medium">Add New Configuration</span>
                  <span className="text-sm opacity-70 mt-1">Browse vehicles to customize</span>
                </Link>
              </motion.div>
            </div>
          ) : (
            <div className="text-center py-16">
              <Bookmark className="mx-auto mb-4 text-premium-gray opacity-30" size={64} />
              <h2 className="text-2xl font-bold mb-2">No Saved Configurations</h2>
              <p className="text-premium-gray mb-6">
                Start customizing vehicles and save your favorite configurations here
              </p>
              <Link to="/catalog" className="btn-premium">
                Browse Vehicles
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SavedPage;