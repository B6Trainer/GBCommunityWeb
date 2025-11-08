import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect } from 'react';
import { 
  DollarSign, 
  CheckCircle,  
  GitBranch,
  ArrowUpCircle  
} from 'lucide-react';
import '@/assets/css/community-plan.css'

const SlotUpgrades = () => {


  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

 
  const upgradeSlots = [
    { slot: 1, price: 10 },
    { slot: 2, price: 20 },
    { slot: 3, price: 50 },
    { slot: 4, price: 100 },
    { slot: 5, price: 250 },
    { slot: 6, price: 500 },
    { slot: 7, price: 1000 },
    { slot: 8, price: 2500 },
    { slot: 9, price: 5000 },
    { slot: 10, price: 10000 }
  ];

  const upgradeBenefits = [
    { slot: 1, benefits: ['Access to basic community features', 'Eligibility for direct referral bonuses', 'Level 1 mining rewards'] },
    { slot: 2, benefits: ['Enhanced earning potential', 'Access to Level 2 mining bonuses', 'Priority support'] },
    { slot: 3, benefits: ['Advanced community tools', 'Higher commission rates', 'Level 3-4 mining rewards'] },
    { slot: 4, benefits: ['Premium member status', 'Exclusive training materials', 'Level 5-6 mining rewards'] },
    { slot: 5, benefits: ['VIP community access', 'Advanced analytics dashboard', 'Level 7-8 mining rewards'] },
    { slot: 6, benefits: ['Elite member benefits', 'Personal account manager', 'Level 9-10 mining rewards'] },
    { slot: 7, benefits: ['Master tier privileges', 'Exclusive events access', 'Maximum earning potential'] },
    { slot: 8, benefits: ['Diamond tier status', 'Global networking opportunities', 'Premium partnership benefits'] },
    { slot: 9, benefits: ['Platinum tier advantages', 'Leadership training programs', 'Strategic business insights'] },
    { slot: 10, benefits: ['Ultimate tier access', 'Lifetime achievement rewards', 'Legacy building opportunities'] }
  ];


 
  




  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        
        <motion.section variants={fadeInUp} className="cp-section-narrow">
          <div className="cp-card max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gold-400 mb-1">Slots & Upgrades</h1>
            <div className="cp-node-growth-animation py-8">

              <div className="flex items-center justify-center gap-8">
                <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <GitBranch className="w-16 h-16 text-gold-400" />
                </motion.div>
                <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowUpCircle className="w-12 h-12 text-green-400" />
                </motion.div>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                  <DollarSign className="w-20 h-20 text-gold-300" />
                </motion.div>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gold-400 mb-4">Node Upgrade = Wealth Growth</h4>
            <p className="text-gold-500 text-md">Each upgrade unlocks new earning potential and expands your network reach</p>
          </div>
        </motion.section>

        <div className="cp-divider" />

        <motion.section variants={staggerContainer} className="cp-section">
          <h2 className="text-3xl font-bold text-center mb-5">Slots</h2>
          <p className="text-gold-500 text-md mb-2">Every node can be upgraded with the following slots</p>
          <div className="grid grid-cols-5 md:grid-cols-5 gap-3">
            {upgradeSlots.map((slot, index) => (
              <motion.div key={index} variants={fadeInUp} className="cp-slot-card">
                <p className="cp-slot-number">Slot {slot.slot}</p>
                <p className="cp-slot-price">{slot.price.toLocaleString()} $</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="cp-divider" />

        <motion.section variants={fadeInUp} className="cp-section">
          <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Benefits of Each Upgrade</h2>
          <div className="max-w-5xl mx-auto">
            <div className="cp-benefits-table">
              {upgradeBenefits.map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="cp-benefit-row">
                  <div className="cp-benefit-slot">
                    <div className="text-sm text-gold-500 mb-1">Slot {item.slot}</div>
                    <div className="text-2xl font-bold text-gold-300">${upgradeSlots[index].price.toLocaleString()}</div>
                  </div>
                  <div className="cp-benefit-list">
                    {item.benefits.map((benefit, idx) => (
                      <div key={idx} className="cp-benefit-item">
                        <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                        <span className="text-gold-500">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      </motion.div>
    </>
  );
};

export default SlotUpgrades;
