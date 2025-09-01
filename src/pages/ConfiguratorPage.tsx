import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Check, Info } from 'lucide-react';
import { luxuryVehicles } from '../data/vehicles';

const ConfiguratorPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = luxuryVehicles.find(v => v.id === id);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [configuration, setConfiguration] = useState({
    color: vehicle?.colors?.[0] || null,
    interior: null,
    packages: [] as any[],
    financing: 'cash',
    tradeIn: false,
  });

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-luxury-pearl mb-4">Vehicle not found</h2>
        </div>
      </div>
    );
  }

  const steps = [
    { id: 'exterior', label: 'Exterior', icon: '🎨' },
    { id: 'interior', label: 'Interior', icon: '🪑' },
    { id: 'packages', label: 'Packages', icon: '📦' },
    { id: 'financing', label: 'Financing', icon: '💳' },
    { id: 'summary', label: 'Summary', icon: '✅' },
  ];

  const calculateTotal = () => {
    let total = vehicle.price;
    if (configuration.color?.price) total += configuration.color.price;
    return total;
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-serif font-bold text-luxury-pearl mb-2">
            Configure Your <span className="text-gradient-luxury">{vehicle.name}</span>
          </h1>
          <p className="text-luxury-pearl/60">Customize every detail to your preference</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => index <= currentStep && setCurrentStep(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                    index === currentStep
                      ? 'bg-luxury-gold text-luxury-black'
                      : index < currentStep
                      ? 'bg-luxury-gold/20 text-luxury-gold cursor-pointer'
                      : 'bg-black/20 text-luxury-pearl/40'
                  }`}
                >
                  <span className="text-xl">{step.icon}</span>
                  <span className="hidden md:inline text-sm font-medium">{step.label}</span>
                </button>
                {index < steps.length - 1 && (
                  <ChevronRight className={`w-4 h-4 ${
                    index < currentStep ? 'text-luxury-gold' : 'text-luxury-pearl/20'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Configuration Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Configuration Area */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-luxury rounded-3xl p-8"
            >
              {/* Exterior Step */}
              {currentStep === 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-luxury-pearl mb-6">
                    Choose Exterior Color
                  </h2>
                  
                  <div className="mb-8">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {vehicle.colors?.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setConfiguration({ ...configuration, color })}
                        className={`glass-luxury rounded-xl p-4 transition-all ${
                          configuration.color?.name === color.name
                            ? 'ring-2 ring-luxury-gold'
                            : 'hover:bg-luxury-gold/10'
                        }`}
                      >
                        <div
                          className="w-full h-16 rounded-lg mb-3"
                          style={{ backgroundColor: color.hex }}
                        />
                        <p className="text-sm font-medium text-luxury-pearl">{color.name}</p>
                        {color.price > 0 && (
                          <p className="text-xs text-luxury-gold mt-1">
                            +${color.price.toLocaleString()}
                          </p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Interior Step */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-luxury-pearl mb-6">
                    Select Interior
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-luxury rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-luxury-pearl mb-4">
                        Premium Leather
                      </h3>
                      <div className="space-y-3">
                        {['Black', 'Cognac', 'Ivory'].map((color) => (
                          <label key={color} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="interior"
                              className="w-4 h-4 text-luxury-gold"
                            />
                            <span className="text-luxury-pearl/80">{color} Leather</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="glass-luxury rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-luxury-pearl mb-4">
                        Wood Trim
                      </h3>
                      <div className="space-y-3">
                        {['Piano Black', 'Carbon Fiber', 'Walnut'].map((trim) => (
                          <label key={trim} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="trim"
                              className="w-4 h-4 text-luxury-gold"
                            />
                            <span className="text-luxury-pearl/80">{trim}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Packages Step */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-luxury-pearl mb-6">
                    Optional Packages
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="glass-luxury rounded-xl p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-luxury-pearl mb-2">
                            Executive Package
                          </h3>
                          <p className="text-luxury-pearl/60 text-sm mb-3">
                            Rear seat entertainment, massage seats, premium sound
                          </p>
                          <p className="text-luxury-gold font-semibold">+$5,500</p>
                        </div>
                        <input type="checkbox" className="w-5 h-5 text-luxury-gold" />
                      </div>
                    </div>
                    
                    <div className="glass-luxury rounded-xl p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-luxury-pearl mb-2">
                            Driver Assistance Plus
                          </h3>
                          <p className="text-luxury-pearl/60 text-sm mb-3">
                            Advanced autopilot, parking assistant, night vision
                          </p>
                          <p className="text-luxury-gold font-semibold">+$3,200</p>
                        </div>
                        <input type="checkbox" className="w-5 h-5 text-luxury-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Financing Step */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-luxury-pearl mb-6">
                    Financing Options
                  </h2>
                  
                  <div className="space-y-4">
                    {['cash', 'finance', 'lease'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setConfiguration({ ...configuration, financing: option })}
                        className={`w-full glass-luxury rounded-xl p-6 text-left transition-all ${
                          configuration.financing === option
                            ? 'ring-2 ring-luxury-gold'
                            : 'hover:bg-luxury-gold/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-luxury-pearl capitalize">
                              {option === 'cash' ? 'Cash Purchase' : option === 'finance' ? 'Finance' : 'Lease'}
                            </h3>
                            <p className="text-luxury-pearl/60 text-sm mt-1">
                              {option === 'cash' 
                                ? 'Pay in full at delivery' 
                                : option === 'finance'
                                ? 'Low APR financing available'
                                : 'Flexible lease terms'}
                            </p>
                          </div>
                          {configuration.financing === option && (
                            <Check className="w-5 h-5 text-luxury-gold" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={configuration.tradeIn}
                        onChange={(e) => setConfiguration({ ...configuration, tradeIn: e.target.checked })}
                        className="w-5 h-5 text-luxury-gold"
                      />
                      <span className="text-luxury-pearl">I have a vehicle to trade in</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Summary Step */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-luxury-pearl mb-6">
                    Configuration Summary
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-luxury-gold mb-3">Vehicle</h3>
                      <p className="text-luxury-pearl">{vehicle.name}</p>
                      <p className="text-luxury-pearl/60">{vehicle.year} • {vehicle.type}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-luxury-gold mb-3">Configuration</h3>
                      <ul className="space-y-2">
                        <li className="text-luxury-pearl/80">
                          Exterior: {configuration.color?.name || 'Standard'}
                        </li>
                        <li className="text-luxury-pearl/80">
                          Interior: Premium Black Leather
                        </li>
                        <li className="text-luxury-pearl/80">
                          Financing: {configuration.financing}
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-luxury-gold/20">
                      <div className="flex items-center justify-between text-2xl font-bold">
                        <span className="text-luxury-pearl">Total Price</span>
                        <span className="text-luxury-gold">${calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                  className={`btn-luxury-outline ${currentStep === 0 ? 'invisible' : ''}`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextStep}
                  className="btn-luxury"
                >
                  {currentStep === steps.length - 1 ? 'Proceed to Checkout' : 'Next Step'}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-luxury rounded-3xl p-6 sticky top-28">
              <h3 className="text-xl font-serif font-bold text-luxury-pearl mb-4">
                Your Configuration
              </h3>
              
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-luxury-pearl/60">Vehicle</p>
                  <p className="text-luxury-pearl font-semibold">{vehicle.name}</p>
                </div>
                
                {configuration.color && (
                  <div>
                    <p className="text-sm text-luxury-pearl/60">Color</p>
                    <p className="text-luxury-pearl font-semibold">{configuration.color.name}</p>
                  </div>
                )}
                
                <div className="pt-4 border-t border-luxury-gold/20">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-luxury-pearl/60">Total Price</p>
                      <p className="text-2xl font-bold text-luxury-gold">
                        ${calculateTotal().toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  {configuration.financing === 'finance' && (
                    <p className="text-sm text-luxury-pearl/60 mt-2">
                      Est. ${Math.round(calculateTotal() / 60).toLocaleString()}/month
                    </p>
                  )}
                </div>
              </div>
              
              <button className="w-full btn-luxury-outline mt-6 text-sm">
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorPage;