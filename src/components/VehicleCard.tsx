import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Zap, Gauge, Battery, ArrowUpRight } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group glass-luxury rounded-3xl overflow-hidden luxury-shadow"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
            vehicle.availability === 'in-stock' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : vehicle.availability === 'limited'
              ? 'bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/30'
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {vehicle.availability === 'in-stock' ? 'Available' : 
             vehicle.availability === 'limited' ? 'Limited' : 
             vehicle.availability === 'pre-order' ? 'Pre-Order' : 'Sold Out'}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/30 backdrop-blur-md">
            {vehicle.category}
          </span>
        </div>

        {/* Rating */}
        {vehicle.rating && (
          <div className="absolute bottom-4 left-4 flex items-center space-x-1">
            <Star className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
            <span className="text-luxury-pearl text-sm font-medium">{vehicle.rating}</span>
            {vehicle.reviews && (
              <span className="text-luxury-pearl/60 text-xs">({vehicle.reviews})</span>
            )}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-serif font-bold text-luxury-pearl mb-1">
            {vehicle.name}
          </h3>
          <p className="text-luxury-pearl/60 text-sm">{vehicle.year} • {vehicle.type}</p>
        </div>

        <p className="text-luxury-pearl/70 text-sm mb-6 line-clamp-2">
          {vehicle.description}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <Gauge className="w-5 h-5 text-luxury-gold mx-auto mb-1" />
            <div className="text-xs text-luxury-pearl/60">0-60 mph</div>
            <div className="text-sm font-semibold text-luxury-pearl">{vehicle.acceleration}</div>
          </div>
          {vehicle.range ? (
            <div className="text-center">
              <Battery className="w-5 h-5 text-luxury-gold mx-auto mb-1" />
              <div className="text-xs text-luxury-pearl/60">Range</div>
              <div className="text-sm font-semibold text-luxury-pearl">{vehicle.range} mi</div>
            </div>
          ) : (
            <div className="text-center">
              <Zap className="w-5 h-5 text-luxury-gold mx-auto mb-1" />
              <div className="text-xs text-luxury-pearl/60">Economy</div>
              <div className="text-sm font-semibold text-luxury-pearl">{vehicle.fuelEconomy}</div>
            </div>
          )}
          <div className="text-center">
            <Zap className="w-5 h-5 text-luxury-gold mx-auto mb-1" />
            <div className="text-xs text-luxury-pearl/60">Power</div>
            <div className="text-sm font-semibold text-luxury-pearl">{vehicle.horsepower} hp</div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-end justify-between pt-6 border-t border-luxury-gold/10">
          <div>
            <div className="text-3xl font-bold text-luxury-pearl">
              ${vehicle.price.toLocaleString()}
            </div>
            {vehicle.monthlyPrice && (
              <div className="text-sm text-luxury-pearl/60">
                From ${vehicle.monthlyPrice}/mo
              </div>
            )}
          </div>
          
          <Link
            to={`/vehicle/${vehicle.id}`}
            className="flex items-center space-x-2 text-luxury-gold hover:text-luxury-pearl transition-colors duration-300 group/link"
          >
            <span className="text-sm font-medium">View Details</span>
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;