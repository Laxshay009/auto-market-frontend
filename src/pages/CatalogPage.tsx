import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid, List, ChevronDown, Star, Heart, Eye,
  Fuel, Settings, Users, Calendar, Tag, MapPin, Info, X,
  SlidersHorizontal, Download, Share2, Bookmark, TrendingUp,
  Car, Zap, Gauge, DollarSign, Shield, Award, CheckCircle,
  ArrowUpDown, ChevronRight, Package
} from 'lucide-react';
import { carsDatabase } from '../data/carsDatabase';

interface CatalogPageProps {
  isDarkMode?: boolean;
}

interface FilterState {
  brand: string[];
  priceRange: [number, number];
  fuelType: string[];
  transmission: string[];
  bodyType: string[];
  seatingCapacity: number[];
  features: string[];
  availability: string;
}

interface SortOption {
  id: string;
  label: string;
  icon: React.ElementType;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ isDarkMode = false }) => {
  const [vehicles] = useState(carsDatabase);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(true);
  const [showQuickView, setShowQuickView] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('popularity');
  const [savedVehicles, setSavedVehicles] = useState<number[]>([]);
  
  const [filters, setFilters] = useState<FilterState>({
    brand: [],
    priceRange: [0, 500000],
    fuelType: [],
    transmission: [],
    bodyType: [],
    seatingCapacity: [],
    features: [],
    availability: 'all'
  });

  // Extract unique values for filters
  const filterOptions = useMemo(() => ({
    brands: [...new Set(vehicles.map(v => v.make))].sort(),
    fuelTypes: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid'],
    transmissions: ['Manual', 'Automatic', 'CVT', 'DCT', 'AMT'],
    bodyTypes: ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Pickup'],
    seatingCapacities: [2, 4, 5, 7, 8],
    features: [
      'Sunroof', 'Leather Seats', 'Apple CarPlay', 'Android Auto',
      'Adaptive Cruise Control', '360° Camera', 'Heads-up Display',
      'Wireless Charging', 'Ventilated Seats', 'Premium Audio'
    ]
  }), [vehicles]);

  const sortOptions: SortOption[] = [
    { id: 'popularity', label: 'Most Popular', icon: TrendingUp },
    { id: 'price-low', label: 'Price: Low to High', icon: ArrowUpDown },
    { id: 'price-high', label: 'Price: High to Low', icon: ArrowUpDown },
    { id: 'newest', label: 'Newest First', icon: Calendar },
    { id: 'fuel-efficiency', label: 'Best Fuel Economy', icon: Fuel },
    { id: 'rating', label: 'Highest Rated', icon: Star }
  ];

  // Filter and sort vehicles
  const filteredVehicles = useMemo(() => {
    let filtered = [...vehicles];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(v => 
        v.make.toLowerCase().includes(query) ||
        v.model.toLowerCase().includes(query) ||
        v.type.toLowerCase().includes(query) ||
        v.year.toString().includes(query)
      );
    }

    // Brand filter
    if (filters.brand.length > 0) {
      filtered = filtered.filter(v => filters.brand.includes(v.make));
    }

    // Price range filter
    filtered = filtered.filter(v => 
      v.price >= filters.priceRange[0] && v.price <= filters.priceRange[1]
    );

    // Fuel type filter
    if (filters.fuelType.length > 0) {
      filtered = filtered.filter(v => {
        const fuelType = v.fuel || (v.electricRange ? 'Electric' : 'Petrol');
        return filters.fuelType.some(f => fuelType.toLowerCase().includes(f.toLowerCase()));
      });
    }

    // Transmission filter
    if (filters.transmission.length > 0) {
      filtered = filtered.filter(v => {
        const trans = v.transmission || '';
        return filters.transmission.some(t => trans.toLowerCase().includes(t.toLowerCase()));
      });
    }

    // Body type filter
    if (filters.bodyType.length > 0) {
      filtered = filtered.filter(v => {
        const type = v.category || v.type || '';
        return filters.bodyType.some(b => type.toLowerCase().includes(b.toLowerCase()));
      });
    }

    // Seating capacity filter
    if (filters.seatingCapacity.length > 0) {
      filtered = filtered.filter(v => 
        filters.seatingCapacity.includes(v.seats || v.seatingCapacity || 5)
      );
    }

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
      case 'fuel-efficiency':
        filtered.sort((a, b) => {
          const aEfficiency = a.mpg?.combined || (a.electricRange || 0);
          const bEfficiency = b.mpg?.combined || (b.electricRange || 0);
          return bEfficiency - aEfficiency;
        });
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5));
        break;
      default:
        // Keep original order for popularity
        break;
    }

    return filtered;
  }, [searchQuery, filters, sortBy, vehicles]);

  const handleFilterChange = (filterType: keyof FilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      brand: [],
      priceRange: [0, 500000],
      fuelType: [],
      transmission: [],
      bodyType: [],
      seatingCapacity: [],
      features: [],
      availability: 'all'
    });
    setSearchQuery('');
  };

  const activeFiltersCount = 
    filters.brand.length +
    filters.fuelType.length +
    filters.transmission.length +
    filters.bodyType.length +
    filters.seatingCapacity.length +
    filters.features.length +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 500000 ? 1 : 0);

  const QuickViewModal = ({ vehicle }: { vehicle: typeof vehicles[0] }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay flex items-center justify-center p-4"
      onClick={() => setShowQuickView(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="modal-content max-w-4xl p-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={vehicle.images.exterior[0]} 
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={() => setShowQuickView(null)}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-premium-navy dark:text-white">
                {vehicle.make} {vehicle.model}
              </h2>
              <p className="text-premium-gray">{vehicle.year} • {vehicle.type}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-premium-blue">
                ${vehicle.price.toLocaleString()}
              </p>
              <p className="text-sm text-premium-gray">
                or ${Math.floor(vehicle.price / 60).toLocaleString()}/mo
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="stat-card p-4">
              <Gauge className="text-accent-blue mb-2" size={20} />
              <p className="text-xs text-premium-gray">0-60 mph</p>
              <p className="font-semibold">{vehicle.acceleration || 'N/A'}</p>
            </div>
            <div className="stat-card p-4">
              <Zap className="text-premium-gold mb-2" size={20} />
              <p className="text-xs text-premium-gray">Horsepower</p>
              <p className="font-semibold">{vehicle.horsepower || 0} hp</p>
            </div>
            <div className="stat-card p-4">
              <Fuel className="text-premium-emerald mb-2" size={20} />
              <p className="text-xs text-premium-gray">Fuel Economy</p>
              <p className="font-semibold">
                {vehicle.mpg ? `${vehicle.mpg.combined} mpg` : `${vehicle.electricRange} mi`}
              </p>
            </div>
            <div className="stat-card p-4">
              <Users className="text-accent-purple mb-2" size={20} />
              <p className="text-xs text-premium-gray">Seating</p>
              <p className="font-semibold">{vehicle.seats || vehicle.seatingCapacity || 5} seats</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {vehicle.features.slice(0, 8).map((feature, idx) => (
                <span key={idx} className="badge-premium">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Link to={`/vehicle/${vehicle.id}`} className="btn-premium flex-1">
              View Full Details
            </Link>
            <Link to={`/configure/${vehicle.id}`} className="btn-premium-outline flex-1">
              Configure & Price
            </Link>
            <button className="btn-premium-ghost">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      {/* Header */}
      <div className="px-6 py-8 border-b border-light-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold">
                <span className="text-gradient-premium">Vehicle Catalog</span>
              </h1>
              <p className="text-premium-gray mt-2">
                {filteredVehicles.length} vehicles available • Advanced filtering & sorting
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="btn-premium-ghost flex items-center gap-2">
                <Download size={18} />
                Export
              </button>
              <button className="btn-premium-ghost flex items-center gap-2">
                <Share2 size={18} />
                Share
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-premium-outline flex items-center gap-2"
              >
                <SlidersHorizontal size={18} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="badge-gold ml-1">{activeFiltersCount}</span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-premium-gray" size={20} />
            <input
              type="text"
              placeholder="Search by brand, model, type, or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-premium pl-12 pr-4"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Filters Sidebar */}
        <AnimatePresence>
          {showFilters && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="w-80 border-r border-light-border dark:border-dark-border p-6 overflow-y-auto h-[calc(100vh-theme(spacing.20))] scrollbar-premium"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-accent-blue hover:text-premium-blue"
                >
                  Clear All
                </button>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Brand</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-premium">
                  {filterOptions.brands.map(brand => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.brand.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange('brand', [...filters.brand, brand]);
                          } else {
                            handleFilterChange('brand', filters.brand.filter(b => b !== brand));
                          }
                        }}
                        className="w-4 h-4 text-premium-blue rounded"
                      />
                      <span className="text-sm">{brand}</span>
                      <span className="text-xs text-premium-gray ml-auto">
                        ({vehicles.filter(v => v.make === brand).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={filters.priceRange[0]}
                      onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
                      className="input-premium text-sm"
                      placeholder="Min"
                    />
                    <span className="text-premium-gray">to</span>
                    <input
                      type="number"
                      value={filters.priceRange[1]}
                      onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                      className="input-premium text-sm"
                      placeholder="Max"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="10000"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-premium-gray">
                    <span>${(filters.priceRange[0] / 1000).toFixed(0)}K</span>
                    <span>${(filters.priceRange[1] / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              </div>

              {/* Fuel Type */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Fuel Type</h3>
                <div className="space-y-2">
                  {filterOptions.fuelTypes.map(fuel => (
                    <label key={fuel} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.fuelType.includes(fuel)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange('fuelType', [...filters.fuelType, fuel]);
                          } else {
                            handleFilterChange('fuelType', filters.fuelType.filter(f => f !== fuel));
                          }
                        }}
                        className="w-4 h-4 text-premium-blue rounded"
                      />
                      <span className="text-sm">{fuel}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Body Type */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Body Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  {filterOptions.bodyTypes.map(body => (
                    <label key={body} className="flex items-center gap-1 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={filters.bodyType.includes(body)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange('bodyType', [...filters.bodyType, body]);
                          } else {
                            handleFilterChange('bodyType', filters.bodyType.filter(b => b !== body));
                          }
                        }}
                        className="w-4 h-4 text-premium-blue rounded"
                      />
                      <span>{body}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Seating Capacity */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Seating Capacity</h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.seatingCapacities.map(seats => (
                    <button
                      key={seats}
                      onClick={() => {
                        if (filters.seatingCapacity.includes(seats)) {
                          handleFilterChange('seatingCapacity', filters.seatingCapacity.filter(s => s !== seats));
                        } else {
                          handleFilterChange('seatingCapacity', [...filters.seatingCapacity, seats]);
                        }
                      }}
                      className={`px-3 py-1 rounded-lg border-2 transition-colors ${
                        filters.seatingCapacity.includes(seats)
                          ? 'border-premium-blue bg-premium-blue text-white'
                          : 'border-premium-silver hover:border-premium-blue'
                      }`}
                    >
                      {seats} seats
                    </button>
                  ))}
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-premium py-2 text-sm"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-2 border rounded-lg p-1 border-premium-silver">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-premium-blue text-white' 
                      : 'text-premium-gray hover:text-premium-blue'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-premium-blue text-white' 
                      : 'text-premium-gray hover:text-premium-blue'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            <p className="text-sm text-premium-gray">
              Showing {filteredVehicles.length} of {vehicles.length} vehicles
            </p>
          </div>

          {/* Vehicles Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card-premium p-0 overflow-hidden hover-lift"
                >
                  <div className="relative">
                    <img
                      src={vehicle.images.exterior[0]}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      {vehicle.electricRange && (
                        <span className="badge-success">
                          <Zap size={12} className="mr-1" />
                          Electric
                        </span>
                      )}
                      <button
                        onClick={() => setSavedVehicles(prev => 
                          prev.includes(vehicle.id) 
                            ? prev.filter(id => id !== vehicle.id)
                            : [...prev, vehicle.id]
                        )}
                        className={`p-2 rounded-full transition-colors ${
                          savedVehicles.includes(vehicle.id)
                            ? 'bg-premium-gold text-white'
                            : 'bg-white/90 hover:bg-white'
                        }`}
                      >
                        <Bookmark size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-2">
                      <h3 className="font-semibold text-lg">
                        {vehicle.make} {vehicle.model}
                      </h3>
                      <p className="text-sm text-premium-gray">
                        {vehicle.year} • {vehicle.type}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-2xl font-bold text-premium-blue">
                          ${vehicle.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-premium-gray">
                          Est. ${Math.floor(vehicle.price / 60).toLocaleString()}/mo
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="text-premium-gold" size={16} />
                          <span className="font-medium">{vehicle.rating || 4.5}</span>
                        </div>
                        <p className="text-xs text-premium-gray">
                          {Math.floor(Math.random() * 100) + 50} reviews
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                      <div className="text-center">
                        <Gauge className="mx-auto mb-1 text-premium-gray" size={16} />
                        <p>{vehicle.acceleration || 'N/A'}</p>
                      </div>
                      <div className="text-center">
                        <Fuel className="mx-auto mb-1 text-premium-gray" size={16} />
                        <p>{vehicle.mpg?.combined || vehicle.electricRange} {vehicle.mpg ? 'mpg' : 'mi'}</p>
                      </div>
                      <div className="text-center">
                        <Users className="mx-auto mb-1 text-premium-gray" size={16} />
                        <p>{vehicle.seats || vehicle.seatingCapacity || 5} seats</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowQuickView(vehicle.id)}
                        className="btn-premium-ghost text-sm flex-1"
                      >
                        Quick View
                      </button>
                      <Link
                        to={`/vehicle/${vehicle.id}`}
                        className="btn-premium text-sm flex-1 text-center"
                      >
                        View Details
                      </Link>
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
                  className="card-premium p-4 flex gap-6"
                >
                  <img
                    src={vehicle.images.exterior[0]}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-64 h-40 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-premium-gray">
                          {vehicle.year} • {vehicle.type} • {vehicle.transmission || 'Automatic'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-premium-blue">
                          ${vehicle.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-premium-gray">
                          or ${Math.floor(vehicle.price / 60).toLocaleString()}/mo
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-premium-gray" />
                        <span>{vehicle.location || 'Los Angeles, CA'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-premium-gold" />
                        <span>{(vehicle.rating || 4.5).toFixed(1)}/5</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Package size={14} className="text-premium-emerald" />
                        <span>In Stock</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features.slice(0, 5).map((feature, idx) => (
                        <span key={idx} className="badge-premium text-xs">
                          {feature}
                        </span>
                      ))}
                      {vehicle.features.length > 5 && (
                        <span className="badge-premium text-xs">
                          +{vehicle.features.length - 5} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setShowQuickView(vehicle.id)}
                        className="btn-premium-ghost"
                      >
                        Quick View
                      </button>
                      <Link to={`/vehicle/${vehicle.id}`} className="btn-premium">
                        View Details
                      </Link>
                      <Link to={`/configure/${vehicle.id}`} className="btn-premium-outline">
                        Configure
                      </Link>
                      <button
                        onClick={() => setSavedVehicles(prev => 
                          prev.includes(vehicle.id) 
                            ? prev.filter(id => id !== vehicle.id)
                            : [...prev, vehicle.id]
                        )}
                        className={`ml-auto p-2 rounded-lg transition-colors ${
                          savedVehicles.includes(vehicle.id)
                            ? 'text-premium-gold'
                            : 'text-premium-gray hover:text-premium-blue'
                        }`}
                      >
                        <Bookmark size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <Car className="mx-auto mb-4 text-premium-gray" size={64} />
              <h3 className="text-2xl font-semibold mb-2">No vehicles found</h3>
              <p className="text-premium-gray mb-6">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={clearAllFilters}
                className="btn-premium"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <QuickViewModal 
            vehicle={vehicles.find(v => v.id === showQuickView)!} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatalogPage;