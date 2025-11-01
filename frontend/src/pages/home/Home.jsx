import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Briefcase, UserPlus, Wallet, GitBranch, Coins, X, ChevronLeft, ChevronRight } from 'lucide-react';

import HeroCarousel from './HeroCarousel';
import Benefits from './Benefits';

import "@/assets/css/sections.css";
import Joining from './Joining';
import NewFooter from '@/components/NewFooter';

const Home = () => {


  // Force carousel to remount when component mounts
  useEffect(() => {
    
  }, []);


  const steps = [
    {
      icon: UserPlus,
      title: 'Create a free account',
      description: 'Sign up in minutes and join our global community of digital gold investors.',
    },
    {
      icon: Wallet,
      title: 'Fund your wallet and activate',
      description: 'Add funds to your wallet and activate your account to start investing.',
    },
    {
      icon: GitBranch,
      title: 'Create your first node',
      description: 'Set up your blockchain node and begin your journey in digital gold investment.',
    },
    {
      icon: Coins,
      title: 'Start referring and earn',
      description: 'Invite others to join and earn commissions on their investments.',
    },
  ];

  return (
    <>
    
    
    
    <div className="pt-32 min-h-screen" key="home-page">
      {/* Hero Carousel Section */}
      <HeroCarousel sectionid={"hero-section"}/>

      {/* Benefits Section */}
      <Benefits sectionid={"benefits-section"}/>

      {/* How to Join Section */}
      <Joining sectionid={"how-to-join-section"}/>


      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-gold-glossy rounded-3xl p-12 text-center gold-glow"
        >
          <h2 className="text-4xl font-bold gold-embossed mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gold-500 mb-8 text-lg">
            Join thousands of investors building wealth through digital gold
          </p>
          <button className="btn-metallic-gold btn-twinkle inline-flex items-center space-x-2">
            <span>Get Started Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </section>

    </div>

    <NewFooter/>

    </>
  );
};

export default Home;