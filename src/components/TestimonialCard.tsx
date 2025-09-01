import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating, image }) => {
  return (
    <div className="glass-luxury rounded-2xl p-8 relative overflow-hidden group hover:shadow-[0_20px_60px_rgba(212,175,55,0.2)] transition-all duration-500">
      <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl group-hover:bg-luxury-gold/10 transition-colors duration-500" />
      
      <div className="relative z-10">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-luxury-gold fill-luxury-gold' : 'text-luxury-pearl/20'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-luxury-pearl/80 text-lg mb-6 italic">
          "{content}"
        </p>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-luxury-gold/20"
          />
          <div>
            <h4 className="text-luxury-pearl font-semibold">{name}</h4>
            <p className="text-luxury-pearl/60 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;