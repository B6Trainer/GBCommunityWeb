import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Martinez',
      role: 'Investor',
      rating: 5,
      text: 'Gold Bucks has transformed my investment strategy. The blockchain technology provides transparency I never had before.',
      avatar: 'JM',
    },
    {
      name: 'Sarah Chen',
      role: 'Business Owner',
      rating: 5,
      text: 'The passive income from digital gold investments has exceeded my expectations. Highly recommended!',
      avatar: 'SC',
    },
    {
      name: 'Michael Johnson',
      role: 'Network Leader',
      rating: 5,
      text: 'Building my network through Gold Bucks has been incredibly rewarding. The platform makes it easy to refer and earn.',
      avatar: 'MJ',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Early Adopter',
      rating: 5,
      text: 'The combination of gold stability and blockchain innovation is brilliant. My portfolio has grown consistently.',
      avatar: 'ER',
    },
    {
      name: 'David Kim',
      role: 'Tech Enthusiast',
      rating: 5,
      text: 'Zara AI has been a game-changer for my investment decisions. The insights are incredibly accurate.',
      avatar: 'DK',
    },
    {
      name: 'Lisa Thompson',
      role: 'Financial Advisor',
      rating: 5,
      text: 'I recommend Gold Bucks to all my clients looking for stable, blockchain-backed investments.',
      avatar: 'LT',
    },
  ];

  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold gold-embossed text-center mb-8"
      >
        What Our Community Says
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gold-500 text-center text-lg mb-16 max-w-3xl mx-auto"
      >
        Join thousands of satisfied investors building wealth with Gold Bucks
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-morphism border border-gold-400/30 rounded-2xl p-8 hover:gold-glow transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-gold-400 mb-4" />
            
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
              ))}
            </div>

            <p className="text-gold-500 mb-6 leading-relaxed">{testimonial.text}</p>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center text-black font-bold mr-4">
                {testimonial.avatar}
              </div>
              <div>
                <div className="gold-text font-bold">{testimonial.name}</div>
                <div className="text-gold-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;