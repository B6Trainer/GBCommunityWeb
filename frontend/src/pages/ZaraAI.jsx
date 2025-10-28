import { motion } from 'framer-motion';
import { Bot, MessageSquare, TrendingUp, Shield, Zap } from 'lucide-react';

const ZaraAI = () => {
  const features = [
    {
      icon: MessageSquare,
      title: '24/7 AI Assistant',
      description: 'Get instant answers to your investment questions anytime',
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Real-time insights and predictions powered by AI',
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Intelligent risk evaluation for your portfolio',
    },
    {
      icon: Zap,
      title: 'Smart Recommendations',
      description: 'Personalized investment suggestions based on your goals',
    },
  ];

  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Bot className="w-20 h-20 text-gold-400 mx-auto mb-6 animate-float" />
        <h1 className="text-5xl font-bold gold-embossed mb-4">Zara AI</h1>
        <p className="text-gold-500 text-lg max-w-2xl mx-auto">
          Your intelligent investment companion powered by advanced AI technology
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-morphism border border-gold-400/30 rounded-2xl p-8 hover:gold-glow transition-all duration-300"
            >
              <Icon className="w-12 h-12 text-gold-400 mb-4" />
              <h3 className="text-2xl font-bold gold-text mb-3">{feature.title}</h3>
              <p className="text-gold-500">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="glass-morphism border border-gold-400/30 rounded-3xl p-10 text-center gold-glow"
      >
        <h2 className="text-3xl font-bold gold-text mb-4">Start Chatting with Zara</h2>
        <p className="text-gold-500 mb-6">Get personalized investment advice and market insights</p>
        <button className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold text-lg rounded-lg hover:from-gold-500 hover:to-gold-400 transition-smooth gold-glow">
          Launch Zara AI
        </button>
      </motion.div>
    </div>
  );
};

export default ZaraAI;