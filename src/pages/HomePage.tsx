import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Heart, Share2, MessageCircle, Zap, Star, 
  ChevronRight, Play, ArrowRight, Eye, Car, Shield, Award
} from 'lucide-react';
import { carsDatabase } from '../data/carsDatabase';
import VehicleCard from '../components/VehicleCard';

interface HomePageProps {
  isDarkMode?: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ isDarkMode = false }) => {
  const [trendingCars] = useState(carsDatabase.slice(0, 6));
  const [socialFeed] = useState([
    { id: 1, user: '@car_enthusiast', action: 'just configured', car: 'BMW M5', likes: 342, time: '2 min ago' },
    { id: 2, user: '@luxury_driver', action: 'test drove', car: 'Mercedes S-Class', likes: 256, time: '5 min ago' },
    { id: 3, user: '@ev_lover', action: 'purchased', car: 'Tesla Model S', likes: 892, time: '10 min ago' },
  ]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [likedCars, setLikedCars] = useState<number[]>([]);

  const handleLike = (carId: number) => {
    setLikedCars(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const stats = [
    { label: 'Active Users', value: '2.4K', icon: Users },
    { label: 'Cars Listed', value: '500+', icon: Car },
    { label: 'Happy Clients', value: '10K+', icon: Award },
    { label: 'Years Experience', value: '5+', icon: Shield }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-bg text-white' : 'bg-light-bg text-gray-900'
    }`}>
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden lg:mt-10">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-modern-gradient opacity-90 animate-gradient bg-animated-gradient" />
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Animated Shapes */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-modern-orange/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-modern-blue/20 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          {/* Live Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="live-indicator inline-flex mx-auto mb-6"
          >
            <span className="live-dot" />
            <span className="text-modern-pink font-medium">LIVE • 2,453 people shopping now</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-gradient-rainbow">
              Drive the Future
            </span>
            <br />
            <span className="text-white">Today</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Join the community. Share your journey. Find your perfect ride.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/showroom" 
              className="btn-modern px-8 py-4 text-lg flex items-center justify-center gap-2"
            >
              Start Exploring
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-2">
              <Play size={20} />
              Watch Live Tours
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-8"
          >
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i}`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Join 50K+ car enthusiasts</div>
              <div className="text-white/70 text-sm">Shopping together right now</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trending Section with Social Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <TrendingUp className="inline-block mr-3 text-modern-orange" />
              Trending Now
            </h2>
            <p className="text-lg opacity-80">
              What everyone's talking about
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['all', 'electric', 'luxury', 'sports', 'suv'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-modern-blue text-white'
                    : isDarkMode 
                      ? 'bg-dark-bg text-white/70 hover:bg-modern-blue/20'
                      : 'bg-white text-gray-700 hover:bg-modern-blue/10'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Cars Grid with Social Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-modern p-0 overflow-hidden"
              >
                {/* Trending Badge */}
                {index < 3 && (
                  <div className="absolute top-4 left-4 z-10 badge-hot">
                    <Zap size={14} />
                    HOT
                  </div>
                )}

                {/* Car Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={car.images.exterior[0]} 
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-modern-blue font-bold text-2xl mb-4">
                    ${car.price.toLocaleString()}
                  </p>

                  {/* Social Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleLike(car.id)}
                        className={`btn-like ${
                          likedCars.includes(car.id)
                            ? 'bg-modern-pink text-white'
                            : isDarkMode
                              ? 'bg-dark-surface text-white/70'
                              : 'bg-light-surface text-gray-600'
                        }`}
                      >
                        <Heart 
                          size={20} 
                          className={likedCars.includes(car.id) ? 'fill-current' : ''}
                        />
                      </button>
                      <button className={`btn-share ${
                        isDarkMode
                          ? 'bg-dark-surface text-white/70'
                          : 'bg-light-surface text-gray-600'
                      }`}>
                        <Share2 size={20} />
                      </button>
                      <button className={`btn-comment ${
                        isDarkMode
                          ? 'bg-dark-surface text-white/70'
                          : 'bg-light-surface text-gray-600'
                      }`}>
                        <MessageCircle size={20} />
                      </button>
                    </div>
                    <Link 
                      to={`/vehicle/${car.id}`}
                      className="text-modern-blue font-medium hover:text-electric-blue transition-colors"
                    >
                      View →
                    </Link>
                  </div>

                  {/* Engagement Stats */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-4 text-sm opacity-70">
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {Math.floor(Math.random() * 1000) + 100}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={14} />
                      {Math.floor(Math.random() * 500) + 50}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={14} />
                      {Math.floor(Math.random() * 100) + 10}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/showroom" className="btn-vibrant inline-flex items-center gap-2">
              View All Vehicles
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Live Social Feed */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <Users className="inline-block mr-3 text-modern-green" />
              <span className="text-gradient-modern">
                Community Activity
              </span>
            </h2>
            <p className="text-lg opacity-80">
              See what's happening in real-time
            </p>
          </motion.div>

          {/* Activity Feed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialFeed.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="feed-card"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={`https://i.pravatar.cc/100?u=${activity.user}`}
                    alt={activity.user}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-medium">
                      <span className="text-modern-blue">{activity.user}</span>
                      <span className="opacity-70"> {activity.action} </span>
                      <span className="font-bold">{activity.car}</span>
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm opacity-70">
                      <span>{activity.time}</span>
                      <span className="flex items-center gap-1">
                        <Heart size={14} className="text-modern-pink" />
                        {activity.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="stat-card"
                >
                  <Icon className="text-modern-blue mb-2" size={24} />
                  <div className="text-3xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm opacity-70">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the most vibrant car community online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-modern-blue rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/30 transition-all border-2 border-white/50">
                Download App
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;