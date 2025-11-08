import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Briefcase, UserPlus, Wallet, GitBranch, Coins, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';


const Benefits = (props) => {
  
  const sectionid=props.sectionid;
  // Force carousel to remount when component mounts
  useEffect(() => {
    
  }, []);


  

  const benefits = [
    {
      icon: DollarSign,
      title: 'Passive Income',
      description: 'Earn consistent returns on your digital gold investments with our blockchain-powered platform.',
      color: 'from-gold-600 to-gold-400',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with thousands of investors worldwide and grow your network in the digital gold community.',
      color: 'from-gold-500 to-gold-300',
    },
    {
      icon: TrendingUp,
      title: 'Wealth Building',
      description: 'Build lasting wealth through strategic gold investments backed by secure blockchain technology.',
      color: 'from-gold-600 to-gold-500',
    },
    {
      icon: Briefcase,
      title: 'Your Own Business',
      description: 'Start your own digital gold business and become a leader in the blockchain revolution.',
      color: 'from-gold-500 to-gold-400',
    },
  ];


  return (
    <>


      {/* Benefits Section */}
      <section className="section-container" data-testid={sectionid}>
        
        <SectionHeading heading={"Why to join Gold Bucks Community?"}/>
        
        <div className="section-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="section-card group"
              >
                <div className={`section-card-icon ${benefit.color}`}>
                  <Icon className="section-card-icon-inner" />
                </div>
                <h3 className="section-card-title">{benefit.title}</h3>
                <p className="section-card-description">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>


      </section>


    </>
  );
};

export default Benefits;