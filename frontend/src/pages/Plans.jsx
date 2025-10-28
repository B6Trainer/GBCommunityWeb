import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Plans = () => {
  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold gold-embossed text-center mb-16"
      >
        Choose Your Plan
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Link to="/plans/community">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-morphism border border-gold-400/30 rounded-3xl p-10 hover:gold-glow transition-all duration-300 group cursor-pointer h-full"
          >
            <h2 className="text-3xl font-bold gold-text mb-4">Community Plan</h2>
            <p className="text-gold-500 mb-6 leading-relaxed">
              Join our community and start your digital gold journey with flexible investment options.
            </p>
            <div className="flex items-center gold-text group-hover:translate-x-2 transition-transform">
              <span className="font-semibold">Learn More</span>
              <ArrowRight className="ml-2" />
            </div>
          </motion.div>
        </Link>

        <Link to="/plans/gold-box">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-morphism border border-gold-400/30 rounded-3xl p-10 hover:gold-glow transition-all duration-300 group cursor-pointer h-full"
          >
            <h2 className="text-3xl font-bold gold-text mb-4">Gold Box Plan</h2>
            <p className="text-gold-500 mb-6 leading-relaxed">
              Premium investment package with exclusive benefits and higher returns on your investments.
            </p>
            <div className="flex items-center gold-text group-hover:translate-x-2 transition-transform">
              <span className="font-semibold">Learn More</span>
              <ArrowRight className="ml-2" />
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Plans;