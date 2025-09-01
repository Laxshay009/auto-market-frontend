import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Grid, List, ChevronDown, Star, Heart, Share2, 
  Eye, MessageCircle, TrendingUp, Zap, Users, Award, Clock,
  DollarSign, Fuel, Settings, MapPin, Calendar, Tag
} from 'lucide-react';
import { carsDatabase } from '../data/carsDatabase';

interface ShowroomPageProps {
  isDarkMode?: boolean;
}

const ShowroomPage: React.FC<ShowroomPageProps> = ({ isDarkMode = false }) => {
  const [vehicles, setVehicles] = useState(carsDatabase);
  const [filteredVehicles, setFilteredVehicles] = useState(carsDatabase);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [likedVehicles, setLikedVehicles] = useState<number[]>([]);
  const [activeViewers, setActiveViewers] = useState<{[key: number]: number}>({});

  // Simulate active viewers
  useEffect(() => {
    const interval = setInterval(() => {
      const newViewers: {[key: number]: number} = {};
      vehicles.forEach(vehicle => {
        newViewers[vehicle.id] = Math.floor(Math.random() * 50) + 5;
      });
      setActiveViewers(newViewers);
    }, 5000);
    return () => clearInterval(interval);
  }, [vehicles]);

  // Filter vehicles
  useEffect(() => {
    let filtered = [...vehicles];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(v => 
        v.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Make filter
    if (selectedMake !== 'all') {
      filtered = filtered.filter(v => v.make === selectedMake);
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(v => v.type === selectedType);
    }

    // Price filter
    filtered = filtered.filter(v => v.price >= priceRange[0] && v.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.year - a.year);
        break;
      case 'popular':
      default:
        // Keep original order for popular
        break;
    }

    setFilteredVehicles(filtered);
  }, [searchQuery, selectedMake, selectedType, priceRange, sortBy, vehicles]);

  const handleLike = (vehicleId: number) => {
    setLikedVehicles(prev => 
      prev.includes(vehicleId) 
        ? prev.filter(id => id !== vehicleId)
        : [...prev, vehicleId]
    );
  };

  const uniqueMakes = [...new Set(vehicles.map(v => v.make))];
  const uniqueTypes = [...new Set(vehicles.map(v => v.type))];

  const stats = [
    { icon: TrendingUp, label: 'Trending Now', value: '24 cars', color: 'text-modern-orange' },
    { icon: Users, label: 'Active Shoppers', value: '1.2K', color: 'text-modern-blue' },
    { icon: Award, label: 'Top Rated', value: '8 cars', color: 'text-modern-green' },
    { icon: Clock, label: 'New Arrivals', value: '5 today', color: 'text-modern-purple' }
  ];

  return (
    <div className={`min-h-screen pt-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-bg text-white' : 'bg-light-bg text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="live-indicator inline-flex mx-auto mb-4">
              <span className="live-dot" />
              <span className="text-modern-pink font-medium">LIVE • {Object.values(activeViewers).reduce((a, b) => a + b, 0)} people viewing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Discover Your Dream Car
            </h1>
            <p className="text-xl opacity-80 mb-8">
              {filteredVehicles.length} vehicles available • Join the community shopping experience
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card-modern p-4 text-center">
                  <Icon className={`${stat.color} mb-2 mx-auto`} size={24} />
                  <div className="font-bold text-lg">{stat.value}</div>
                  <div className="text-sm opacity-70">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className={`sticky top-20 z-30 py-4 px-6 border-b ${
        isDarkMode 
          ? 'bg-dark-surface/95 border-gray-800 backdrop-blur-md' 
          : 'bg-white/95 border-gray-200 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by make, model, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-full border transition-all ${
                  isDarkMode 
                    ? 'bg-dark-bg border-gray-700 text-white focus:border-modern-blue' 
                    : 'bg-white border-gray-300 focus:border-modern-blue'
                }`}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  showFilters 
                    ? 'bg-modern-blue text-white' 
                    : isDarkMode
                      ? 'bg-dark-bg text-white border border-gray-700'
                      : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                <Filter size={20} />
                Filters
                {(selectedMake !== 'all' || selectedType !== 'all') && (
                  <span className="bg-modern-orange text-white text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                )}
              </button>

              <div className={`flex gap-2 border rounded-full p-1 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-300'
              }`}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-modern-blue text-white' 
                      : 'text-gray-500 hover:text-modern-blue'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-modern-blue text-white' 
                      : 'text-gray-500 hover:text-modern-blue'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4"
            >
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-dark-bg border-gray-700 text-white' 
                    : 'bg-white border-gray-300'
                }`}
              >
                <option value="all">All Makes</option>
                {uniqueMakes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-dark-bg border-gray-700 text-white' 
                    : 'bg-white border-gray-300'
                }`}
              >
                <option value="all">All Types</option>
                {uniqueTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-dark-bg border-gray-700 text-white' 
                    : 'bg-white border-gray-300'
                }`}
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>

              <div className="flex items-center gap-2">
                <span className="text-sm opacity-70">Price:</span>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
                <span className="text-sm font-medium">
                  ${(priceRange[1] / 1000).toFixed(0)}K
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Vehicles Grid/List */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card-modern p-0 overflow-hidden group"
                >
                  {/* Hot Badge */}
                  {index < 3 && (
                    <div className="absolute top-4 left-4 z-10 badge-hot">
                      <Zap size={14} />
                      HOT
                    </div>
                  )}

                  {/* Live Viewers */}
                  {activeViewers[vehicle.id] > 20 && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-modern-pink/90 text-white text-xs rounded-full backdrop-blur-sm animate-pulse">
                      <Eye size={12} className="inline mr-1" />
                      {activeViewers[vehicle.id]} viewing
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={vehicle.images.exterior[0]}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        isDarkMode ? 'bg-dark-bg' : 'bg-gray-100'
                      }`}>
                        {vehicle.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">
                      {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-sm opacity-70 mb-3">{vehicle.year}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-modern-blue">
                        ${vehicle.price.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="text-modern-orange fill-modern-orange" size={16} />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>

                    {/* Social Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleLike(vehicle.id)}
                          className={`btn-like ${
                            likedVehicles.includes(vehicle.id)
                              ? 'bg-modern-pink text-white'
                              : isDarkMode
                                ? 'bg-dark-surface text-white/70'
                                : 'bg-light-surface text-gray-600'
                          }`}
                        >
                          <Heart 
                            size={18} 
                            className={likedVehicles.includes(vehicle.id) ? 'fill-current' : ''}
                          />
                        </button>
                        <button className={`btn-share ${
                          isDarkMode
                            ? 'bg-dark-surface text-white/70'
                            : 'bg-light-surface text-gray-600'
                        }`}>
                          <Share2 size={18} />
                        </button>
                        <button className={`btn-comment ${
                          isDarkMode
                            ? 'bg-dark-surface text-white/70'
                            : 'bg-light-surface text-gray-600'
                        }`}>
                          <MessageCircle size={18} />
                        </button>
                      </div>
                      <Link 
                        to={`/vehicle/${vehicle.id}`}
                        className="text-modern-blue font-medium hover:text-electric-blue transition-colors"
                      >
                        View →
                      </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3 text-xs opacity-70">
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {Math.floor(Math.random() * 1000) + 100}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {Math.floor(Math.random() * 500) + 50}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={12} />
                        {Math.floor(Math.random() * 100) + 10}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card-modern p-4 flex flex-col md:flex-row gap-6"
                >
                  {/* Image */}
                  <div className="relative w-full md:w-64 h-48 md:h-40 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={vehicle.images.exterior[0]}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="w-full h-full object-cover"
                    />
                    {activeViewers[vehicle.id] > 20 && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-modern-pink/90 text-white text-xs rounded-full backdrop-blur-sm">
                        <Eye size={12} className="inline mr-1" />
                        {activeViewers[vehicle.id]} viewing
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-sm opacity-70 mb-2">{vehicle.year} • {vehicle.type}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-modern-blue" />
                            {vehicle.dealer.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} className="text-modern-green" />
                            Available Now
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-modern-blue">
                          ${vehicle.price.toLocaleString()}
                        </div>
                        <div className="text-sm opacity-70">
                          or ${Math.floor(vehicle.price / 60).toLocaleString()}/mo
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features.slice(0, 4).map((feature, idx) => (
                        <span 
                          key={idx}
                          className={`text-xs px-3 py-1 rounded-full ${
                            isDarkMode ? 'bg-dark-bg' : 'bg-gray-100'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                      {vehicle.features.length > 4 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-modern-blue/10 text-modern-blue">
                          +{vehicle.features.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleLike(vehicle.id)}
                            className={`btn-like ${
                              likedVehicles.includes(vehicle.id)
                                ? 'bg-modern-pink text-white'
                                : isDarkMode
                                  ? 'bg-dark-surface text-white/70'
                                  : 'bg-light-surface text-gray-600'
                            }`}
                          >
                            <Heart 
                              size={18} 
                              className={likedVehicles.includes(vehicle.id) ? 'fill-current' : ''}
                            />
                          </button>
                          <button className={`btn-share ${
                            isDarkMode
                              ? 'bg-dark-surface text-white/70'
                              : 'bg-light-surface text-gray-600'
                          }`}>
                            <Share2 size={18} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3 text-sm opacity-70">
                          <span className="flex items-center gap-1">
                            <Eye size={14} />
                            {Math.floor(Math.random() * 1000) + 100}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart size={14} />
                            {Math.floor(Math.random() * 500) + 50}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link 
                          to={`/configure/${vehicle.id}`}
                          className="px-4 py-2 bg-modern-blue/10 text-modern-blue rounded-lg font-medium hover:bg-modern-blue/20 transition-colors"
                        >
                          Configure
                        </Link>
                        <Link 
                          to={`/vehicle/${vehicle.id}`}
                          className="px-4 py-2 bg-modern-blue text-white rounded-lg font-medium hover:bg-electric-blue transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-2">No vehicles found</h3>
              <p className="opacity-70">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShowroomPage;