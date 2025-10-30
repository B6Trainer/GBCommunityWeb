import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Wallet, GitBranch, Coins } from 'lucide-react';



import "@/assets/css/sections.css";

const Joining = (props) => {
  
  const sectionid=props.sectionid;

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
    
    
      {/* How to Join Section */}
      <section className="section-container" data-testid={sectionid}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold gold-embossed text-center mb-12"
        >
          How to Join
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="card-gold-glossy rounded-2xl p-6 hover:gold-glow transition-all duration-300 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center text-black font-bold text-xl gold-glow">
                    {index + 1}
                  </div>
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="w-20 h-20 rounded-full glass-morphism border-2 border-gold-400 flex items-center justify-center animate-float icon-twinkle">
                      <Icon className="w-10 h-10 text-gold-400 animate-glow" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold gold-text mb-3 text-center">{step.title}</h3>
                  <p className="text-gold-500 text-sm leading-relaxed text-center">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gold-400 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

    </>

    
  );
};

export default Joining;