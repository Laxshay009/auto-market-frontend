import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Star, Shield, Zap, Battery, Gauge, Settings,
  Calendar, Phone, MessageCircle, Heart, Share2, Download,
  ChevronRight, ChevronLeft, Play, Pause, RotateCw, Camera,
  Package, DollarSign, Info, Check, X, MapPin, Clock,
  Fuel, Users, Award, Eye, Bookmark, Car, Globe, Ship, GitCompare
} from 'lucide-react';
import { carsDatabase } from '../data/carsDatabase';

// Lazy load heavy components
const CarViewer3D = lazy(() => import('../shared-components/CarViewer3D'));
const ShippingCalculator = lazy(() => import('../shared-components/ShippingCalculator'));

interface VehicleDetailPageProps {
  isDarkMode?: boolean;
}

interface ColorOption {
  name: string;
  hex: string;
  price?: number;
  type: 'standard' | 'metallic' | 'pearl' | 'matte';
}

interface InteriorOption {
  name: string;
  material: string;
  color: string;
  hex: string;
  price?: number;
}

interface WheelOption {
  name: string;
  size: string;
  style: string;
  price?: number;
  image: string;
}

const VehicleDetailPage: React.FC<VehicleDetailPageProps> = ({ isDarkMode = false }) => {
  const { id } = useParams();
  const vehicle = carsDatabase.find(v => v.id === parseInt(id || '0'));
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'specs' | 'features' | 'customize' | 'shipping'>('overview');
  const [showGallery, setShowGallery] = useState(false);
  const [is360Loading, setIs360Loading] = useState(true);
  const [savedVehicle, setSavedVehicle] = useState(false);
  const [savedBookmarks, setSavedBookmarks] = useState([
    {
      id: 1,
      name: 'Sport Edition',
      exterior: 'Crimson Red',
      interior: 'Black Premium Leather',
      wheels: '20" Performance Wheels',
      price: 83750,
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Luxury Package',
      exterior: 'Champagne Gold',
      interior: 'Tan Nappa Leather',
      wheels: '21" Luxury Wheels',
      price: 87200,
      date: '2024-01-10'
    },
    {
      id: 3,
      name: 'Executive Style',
      exterior: 'Deep Blue',
      interior: 'White Premium Leather',
      wheels: '19" Alloy Wheels',
      price: 82300,
      date: '2024-01-05'
    }
  ]);
  const [showShareModal, setShowShareModal] = useState(false);
  
  // Customization states
  const [selectedColor, setSelectedColor] = useState<ColorOption>({
    name: 'Arctic White',
    hex: '#FFFFFF',
    type: 'standard'
  });
  
  const [selectedInterior, setSelectedInterior] = useState<InteriorOption>({
    name: 'Black Premium Leather',
    material: 'Leather',
    color: 'Black',
    hex: '#000000'
  });
  
  const [selectedWheel, setSelectedWheel] = useState<WheelOption>({
    name: '19" Alloy Wheels',
    size: '19"',
    style: 'Sport',
    price: 0,
    image: ''
  });

  // Sample color options
  const colorOptions: ColorOption[] = [
    { name: 'Arctic White', hex: '#FFFFFF', type: 'standard', price: 0 },
    { name: 'Jet Black', hex: '#000000', type: 'standard', price: 0 },
    { name: 'Space Gray', hex: '#52527A', type: 'metallic', price: 500 },
    { name: 'Deep Blue', hex: '#002B5C', type: 'metallic', price: 500 },
    { name: 'Crimson Red', hex: '#DC143C', type: 'pearl', price: 750 },
    { name: 'British Racing Green', hex: '#004225', type: 'metallic', price: 500 },
    { name: 'Champagne Gold', hex: '#D4AF37', type: 'pearl', price: 1000 },
    { name: 'Matte Gray', hex: '#808080', type: 'matte', price: 2000 },
  ];

  const interiorOptions: InteriorOption[] = [
    { name: 'Black Premium Leather', material: 'Leather', color: 'Black', hex: '#000000', price: 0 },
    { name: 'Tan Nappa Leather', material: 'Nappa Leather', color: 'Tan', hex: '#D2691E', price: 1500 },
    { name: 'Red Sport Leather', material: 'Sport Leather', color: 'Red', hex: '#8B0000', price: 1200 },
    { name: 'White Premium Leather', material: 'Premium Leather', color: 'White', hex: '#F5F5DC', price: 1800 },
  ];

  const wheelOptions: WheelOption[] = [
    { name: '19" Alloy Wheels', size: '19"', style: 'Sport', price: 0, image: '' },
    { name: '20" Performance Wheels', size: '20"', style: 'Performance', price: 1200, image: '' },
    { name: '21" Luxury Wheels', size: '21"', style: 'Luxury', price: 2500, image: '' },
  ];

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Car className="mx-auto mb-4 text-premium-gray" size={64} />
          <h2 className="text-3xl font-bold text-premium-navy dark:text-white mb-4">Vehicle not found</h2>
          <p className="text-premium-gray mb-6">The vehicle you're looking for doesn't exist.</p>
          <Link to="/catalog" className="btn-premium">
            Browse Catalog
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [
    ...vehicle.images.exterior,
    ...vehicle.images.interior
  ];

  const calculateTotalPrice = () => {
    let total = vehicle.price;
    if (selectedColor.price) total += selectedColor.price;
    if (selectedInterior.price) total += selectedInterior.price;
    if (selectedWheel.price) total += selectedWheel.price;
    return total;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${vehicle.make} ${vehicle.model}`,
        text: `Check out this ${vehicle.year} ${vehicle.make} ${vehicle.model}!`,
        url: window.location.href,
      });
    } else {
      setShowShareModal(true);
    }
  };

  const specs = [
    { label: 'Engine', value: vehicle.engine || 'N/A', icon: Settings },
    { label: 'Horsepower', value: `${vehicle.horsepower || 0} hp`, icon: Zap },
    { label: 'Torque', value: vehicle.torque ? `${vehicle.torque} lb-ft` : 'N/A', icon: Gauge },
    { label: '0-60 mph', value: vehicle.acceleration || 'N/A', icon: Gauge },
    { label: 'Top Speed', value: vehicle.topSpeed || 'N/A', icon: Gauge },
    { label: 'Transmission', value: vehicle.transmission || 'N/A', icon: Settings },
    { label: 'Drivetrain', value: vehicle.drivetrain || 'N/A', icon: Car },
    { label: 'Fuel Economy', value: vehicle.mpg ? `${vehicle.mpg.combined} mpg` : 'N/A', icon: Fuel },
    { label: 'Seating', value: `${vehicle.seats || vehicle.seatingCapacity || 5} passengers`, icon: Users },
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-light-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/catalog" className="flex items-center text-premium-gray hover:text-premium-blue transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Catalog
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSavedVehicle(!savedVehicle)}
                className={`p-2 rounded-lg transition-colors ${
                  savedVehicle 
                    ? 'bg-premium-gold text-white' 
                    : 'bg-premium-pearl dark:bg-dark-hover text-premium-gray'
                }`}
              >
                <Bookmark size={20} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-premium-pearl dark:bg-dark-hover text-premium-gray hover:text-premium-blue transition-colors"
              >
                <Share2 size={20} />
              </button>
              <button className="p-2 rounded-lg bg-premium-pearl dark:bg-dark-hover text-premium-gray hover:text-premium-blue transition-colors">
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Images/360 View */}
          <div>
            {/* Vehicle Header (Mobile) */}
            <div className="lg:hidden mb-6">
              <h1 className="text-3xl font-bold text-premium-navy dark:text-white mb-2">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <div className="flex items-center gap-4 text-sm text-premium-gray">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {vehicle.location || vehicle.dealer?.location || 'Location N/A'}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-premium-gold" />
                  {vehicle.rating || 4.5}/5
                </span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-premium">
              {['overview', 'specs', 'features', 'customize', 'shipping'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab as any)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedTab === tab
                      ? 'bg-premium-blue text-white'
                      : 'bg-premium-pearl dark:bg-dark-surface text-premium-gray hover:text-premium-blue'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="card-premium p-0 overflow-hidden">
              {selectedTab === 'overview' && (
                <div>
                  <div className="relative">
                    <img
                      src={allImages[selectedImageIndex]}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="w-full h-[400px] object-cover cursor-pointer"
                      onClick={() => setShowGallery(true)}
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <div className="flex gap-2">
                        {allImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              idx === selectedImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedImageIndex((prev) => (prev + 1) % allImages.length)}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-6 gap-2">
                    {allImages.slice(0, 6).map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                          idx === selectedImageIndex 
                            ? 'border-premium-blue' 
                            : 'border-transparent hover:border-premium-silver'
                        }`}
                      >
                        <img src={img} alt={`View ${idx + 1}`} className="w-full h-16 object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'specs' && (
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {specs.map((spec, idx) => {
                      const Icon = spec.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon className="text-premium-blue mt-1" size={20} />
                          <div>
                            <p className="text-sm text-premium-gray">{spec.label}</p>
                            <p className="font-semibold">{spec.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {selectedTab === 'features' && (
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6">Standard Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {(Array.isArray(vehicle.features) ? vehicle.features : 
                      Object.values(vehicle.features || {}).flat()
                    ).slice(0, 12).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-premium-emerald" size={16} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {selectedTab === 'customize' && (
                <div className="space-y-6">
                  {/* Header with In Stock Status */}
                  <div className="p-6 border-b border-premium-silver">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Customize Your {vehicle.make} {vehicle.model}</h3>
                      <div className="flex items-center gap-2">
                        <Package className="text-premium-emerald" size={20} />
                        <span className="text-premium-emerald font-semibold">In Stock</span>
                        <span className="text-sm text-premium-gray">• Ready for delivery</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="p-6 pt-0">
                    <div className="space-y-6">
                        {/* Exterior Section */}
                        <div className="card-premium p-4">
                          <h5 className="font-semibold mb-4 text-lg">Exterior Customization</h5>
                          
                          {/* Exterior Color Palette */}
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2">Select Color</p>
                            <div className="flex gap-2 flex-wrap">
                              {colorOptions.map((color) => (
                                <button
                                  key={color.name}
                                  onClick={() => setSelectedColor(color)}
                                  className={`relative group ${
                                    selectedColor.name === color.name
                                      ? 'ring-2 ring-premium-blue ring-offset-2'
                                      : ''
                                  }`}
                                >
                                  <div 
                                    className="w-14 h-14 rounded-lg border border-premium-silver hover:scale-110 transition-transform"
                                    style={{ backgroundColor: color.hex }}
                                    title={color.name}
                                  />
                                  {selectedColor.name === color.name && (
                                    <Check className="absolute -top-1 -right-1 text-premium-blue bg-white rounded-full p-0.5" size={16} />
                                  )}
                                </button>
                              ))}
                            </div>
                            <div className="mt-2 text-xs">
                              <span className="font-medium">{selectedColor.name}</span>
                              <span className="text-premium-gray"> • {selectedColor.type}</span>
                              {selectedColor.price > 0 && (
                                <span className="text-premium-blue font-semibold"> • +${selectedColor.price.toLocaleString()}</span>
                              )}
                            </div>
                          </div>
                          
                          {/* Exterior 360 View */}
                          <div className="relative h-[300px] bg-gradient-to-br from-premium-pearl to-white dark:from-dark-surface dark:to-dark-bg rounded-xl overflow-hidden">
                            <Suspense fallback={
                              <div className="flex items-center justify-center h-full">
                                <RotateCw className="animate-spin text-premium-blue" size={32} />
                              </div>
                            }>
                              <CarViewer3D 
                                color={selectedColor.hex}
                                autoRotate={true}
                                showControls={true}
                                environmentPreset="studio"
                              />
                            </Suspense>
                          </div>
                        </div>
                      
                        {/* Interior Section */}
                        <div className="card-premium p-4">
                          <h5 className="font-semibold mb-4 text-lg">Interior Customization</h5>
                          
                          {/* Interior Color Palette */}
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2">Select Interior</p>
                            <div className="grid grid-cols-2 gap-2">
                              {interiorOptions.map((interior) => (
                                <button
                                  key={interior.name}
                                  onClick={() => setSelectedInterior(interior)}
                                  className={`flex items-center gap-2 p-2 rounded-lg border hover:bg-premium-pearl dark:hover:bg-dark-hover transition-colors ${
                                    selectedInterior.name === interior.name
                                      ? 'border-premium-gold bg-premium-pearl dark:bg-dark-hover'
                                      : 'border-premium-silver'
                                  }`}
                                >
                                  <div 
                                    className="w-10 h-10 rounded border border-premium-silver"
                                    style={{ backgroundColor: interior.hex }}
                                  />
                                  <div className="flex-1 text-left">
                                    <p className="text-xs font-medium">{interior.name}</p>
                                    <p className="text-xs text-premium-gray">{interior.material}</p>
                                  </div>
                                  {interior.price > 0 && (
                                    <span className="text-xs text-premium-blue font-semibold">+${interior.price.toLocaleString()}</span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          {/* Interior 360 View */}
                          <div className="relative h-[300px] bg-gradient-to-br from-premium-slate to-premium-navy dark:from-dark-surface dark:to-dark-bg rounded-xl overflow-hidden">
                            <Suspense fallback={
                              <div className="flex items-center justify-center h-full">
                                <RotateCw className="animate-spin text-premium-gold" size={32} />
                              </div>
                            }>
                              <CarViewer3D 
                                color={selectedInterior.hex}
                                autoRotate={false}
                                showControls={true}
                                environmentPreset="apartment"
                              />
                            </Suspense>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'shipping' && (
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6">Shipping & Delivery</h3>
                  <Suspense fallback={
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <Ship className="animate-pulse mx-auto mb-4 text-premium-blue" size={48} />
                        <p className="text-premium-gray">Loading shipping calculator...</p>
                      </div>
                    </div>
                  }>
                    <ShippingCalculator 
                      carPrice={calculateTotalPrice()}
                      isDarkMode={isDarkMode}
                    />
                  </Suspense>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Details & Actions */}
          <div>
            {/* Vehicle Header (Desktop) */}
            <div className="hidden lg:block mb-6">
              <div className="flex items-center gap-2 text-sm text-premium-gray mb-2">
                <span className="badge-success">
                  <Check size={12} className="mr-1" />
                  In Stock
                </span>
                {vehicle.electricRange && (
                  <span className="badge-premium">
                    <Zap size={12} className="mr-1" />
                    Electric
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold text-premium-navy dark:text-white mb-2">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <div className="flex items-center gap-4 text-sm text-premium-gray">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {vehicle.location || vehicle.dealer?.location || 'Location N/A'}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-premium-gold" />
                  {vehicle.rating || 4.5}/5 ({vehicle.reviews || Math.floor(Math.random() * 200) + 50} reviews)
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={14} />
                  {Math.floor(Math.random() * 1000) + 500} views
                </span>
              </div>
            </div>

            {/* Final Preview - Always visible above pricing */}
            <div className="card-premium p-4 mb-4">
              <h5 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="text-premium-gold" size={18} />
                Final Preview
              </h5>
              <div className="relative h-48 bg-gradient-to-br from-premium-blue/10 to-premium-gold/10 dark:from-dark-surface dark:to-dark-bg rounded-xl overflow-hidden">
                <Suspense fallback={
                  <div className="flex items-center justify-center h-full">
                    <RotateCw className="animate-spin text-premium-blue" size={32} />
                  </div>
                }>
                  <CarViewer3D 
                    color={selectedColor.hex}
                    autoRotate={true}
                    showControls={false}
                    environmentPreset="sunset"
                  />
                </Suspense>
              </div>
              <p className="text-xs text-center mt-2 text-premium-gray">
                {selectedColor.name} Exterior • {selectedInterior.name} Interior
              </p>
            </div>

            {/* Current Configuration */}
            <div className="card-premium p-4 mb-6">
              <h5 className="font-semibold mb-3 flex items-center gap-2">
                <Settings className="text-premium-blue" size={18} />
                Current Configuration
              </h5>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-premium-gray">Exterior:</span>
                  <p className="font-medium">{selectedColor.name}</p>
                </div>
                <div>
                  <span className="text-premium-gray">Interior:</span>
                  <p className="font-medium">{selectedInterior.name}</p>
                </div>
                <div>
                  <span className="text-premium-gray">Wheels:</span>
                  <p className="font-medium">{selectedWheel.name}</p>
                </div>
                <div>
                  <span className="text-premium-gray">Options:</span>
                  <p className="font-medium text-premium-blue">
                    +${(selectedColor.price + selectedInterior.price + selectedWheel.price).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <button 
                  onClick={() => setSelectedTab('customize')}
                  className="btn-premium-outline flex-1 text-sm py-2"
                >
                  Customize
                </button>
                <button 
                  onClick={() => {
                    const newBookmark = {
                      id: savedBookmarks.length + 1,
                      name: `Custom ${savedBookmarks.length + 1}`,
                      exterior: selectedColor.name,
                      interior: selectedInterior.name,
                      wheels: selectedWheel.name,
                      price: calculateTotalPrice(),
                      date: new Date().toISOString().split('T')[0]
                    };
                    setSavedBookmarks([newBookmark, ...savedBookmarks]);
                    setSavedVehicle(true);
                  }}
                  className="btn-premium flex-1 text-sm py-2"
                >
                  <Bookmark size={14} className="mr-1" />
                  Save
                </button>
              </div>
            </div>

            {/* Pricing */}
            <div className="card-premium p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-premium-gray mb-1">Total Price</p>
                  <p className="text-4xl font-bold text-premium-blue">
                    ${calculateTotalPrice().toLocaleString()}
                  </p>
                  <p className="text-sm text-premium-gray mt-1">
                    or ${Math.floor(calculateTotalPrice() / 60).toLocaleString()}/mo for 60 months
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-premium-gray">Base Price</p>
                  <p className="text-xl font-semibold">${vehicle.price.toLocaleString()}</p>
                </div>
              </div>

              {/* Price Breakdown */}
              {(selectedColor.price > 0 || selectedInterior.price > 0 || selectedWheel.price > 0) && (
                <div className="pt-4 border-t border-premium-silver">
                  <p className="text-sm font-semibold mb-2">Customization Options</p>
                  <div className="space-y-1 text-sm">
                    {selectedColor.price > 0 && (
                      <div className="flex justify-between">
                        <span className="text-premium-gray">{selectedColor.name}</span>
                        <span>+${selectedColor.price.toLocaleString()}</span>
                      </div>
                    )}
                    {selectedInterior.price > 0 && (
                      <div className="flex justify-between">
                        <span className="text-premium-gray">{selectedInterior.name}</span>
                        <span>+${selectedInterior.price.toLocaleString()}</span>
                      </div>
                    )}
                    {selectedWheel.price > 0 && (
                      <div className="flex justify-between">
                        <span className="text-premium-gray">{selectedWheel.name}</span>
                        <span>+${selectedWheel.price.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Key Features */}
            <div className="card-premium p-6 mb-6">
              <h3 className="font-semibold mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Settings className="text-premium-navy" size={20} />
                  <div>
                    <p className="text-xs text-premium-gray">Engine</p>
                    <p className="font-semibold text-xs">{vehicle.engine || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="text-premium-blue" size={20} />
                  <div>
                    <p className="text-xs text-premium-gray">0-60 mph</p>
                    <p className="font-semibold">{vehicle.acceleration || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="text-premium-gold" size={20} />
                  <div>
                    <p className="text-xs text-premium-gray">Power</p>
                    <p className="font-semibold">{vehicle.horsepower || 0} hp</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="text-premium-emerald" size={20} />
                  <div>
                    <p className="text-xs text-premium-gray">Economy</p>
                    <p className="font-semibold">
                      {vehicle.mpg ? `${vehicle.mpg.combined} mpg` : `${vehicle.electricRange} mi`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-accent-purple" size={20} />
                  <div>
                    <p className="text-xs text-premium-gray">Capacity</p>
                    <p className="font-semibold">{vehicle.seats || vehicle.seatingCapacity || 5} seats</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="text-premium-gray" size={20} />
                  <div>
                    <p className="text-xs text-premium-gray">Drivetrain</p>
                    <p className="font-semibold">{vehicle.drivetrain || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dealer Info */}
            <div className="card-premium p-6 mb-6">
              <h3 className="font-semibold mb-4">Dealer Information</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-premium-gray">Dealer</span>
                  <span className="font-medium">{vehicle.dealership || vehicle.dealer?.name || 'AutoMarket Dealer'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-premium-gray">Location</span>
                  <span className="font-medium">{vehicle.location || vehicle.dealer?.location || 'Location N/A'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-premium-gray">Rating</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(vehicle.rating || 4.5) 
                          ? 'text-premium-gold fill-premium-gold' 
                          : 'text-premium-silver'
                        } 
                      />
                    ))}
                    <span className="ml-1 font-medium">{vehicle.rating || 4.5}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-premium-gray">Contact</span>
                  <span className="font-medium">{vehicle.phone || vehicle.dealer?.phone || '1-800-CARS'}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Link to="/checkout" className="btn-premium-gold w-full text-center">
                Purchase Now
              </Link>
              <Link to={`/configure/${vehicle.id}`} className="btn-premium w-full text-center">
                Advanced Configuration
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <button className="btn-premium-outline flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  Schedule Test Drive
                </button>
                <button className="btn-premium-outline flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Contact Dealer
                </button>
              </div>
              <button className="btn-premium-ghost w-full flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay flex items-center justify-center p-4"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="modal-content p-6 max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Share Vehicle</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="p-2 hover:bg-premium-pearl rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-premium-gray mb-4">
                Share this {vehicle.year} {vehicle.make} {vehicle.model} with others
              </p>
              <div className="flex gap-3">
                <button className="btn-premium-ghost flex-1">Copy Link</button>
                <button className="btn-premium-ghost flex-1">Email</button>
                <button className="btn-premium flex-1">Share</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setShowGallery(false)}
          >
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
            >
              <X size={24} className="text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
              }}
              className="absolute left-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <img
              src={allImages[selectedImageIndex]}
              alt={`${vehicle.make} ${vehicle.model}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
              }}
              className="absolute right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedImageIndex + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VehicleDetailPage;