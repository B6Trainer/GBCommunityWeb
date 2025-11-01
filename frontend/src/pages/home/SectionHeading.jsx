import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Briefcase, UserPlus, Wallet, GitBranch, Coins, X, ChevronLeft, ChevronRight } from 'lucide-react';


const SectionHeading = (props) => {
  
  const heading=props.heading;
  // Force carousel to remount when component mounts
  useEffect(() => {
    
  }, []);



  return (
    <>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-heading gold-embossed"
      >
        {heading}
      </motion.h2>


    </>
  );
};

export default SectionHeading;