import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Truck, CheckCircle } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-luxury-pearl mb-4">
            Complete Your <span className="text-gradient-luxury">Purchase</span>
          </h1>
          <p className="text-luxury-pearl/60">Secure checkout with white-glove delivery service</p>
        </motion.div>

        <div className="glass-luxury rounded-3xl p-8">
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-luxury-pearl mb-2">
              Checkout Coming Soon
            </h2>
            <p className="text-luxury-pearl/60">
              Our concierge team will contact you to complete your purchase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;