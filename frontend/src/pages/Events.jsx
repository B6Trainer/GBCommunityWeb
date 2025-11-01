import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Gold Investment Webinar',
      date: 'December 15, 2024',
      time: '2:00 PM EST',
      location: 'Online',
      description: 'Learn about the latest trends in digital gold investment and blockchain technology.',
    },
    {
      title: 'Community Meetup',
      date: 'January 10, 2025',
      time: '6:00 PM EST',
      location: 'New York, NY',
      description: 'Network with fellow investors and Gold Bucks team members.',
    },
  ];

  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold gold-embossed text-center mb-16"
      >
        Upcoming Events
      </motion.h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="glass-morphism border border-gold-400/30 rounded-2xl p-8 hover:gold-glow transition-all duration-300"
          >
            <h3 className="text-2xl font-bold gold-text mb-4">{event.title}</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gold-500">
                <Calendar className="w-5 h-5 mr-3" />
                {event.date}
              </div>
              <div className="flex items-center text-gold-500">
                <Clock className="w-5 h-5 mr-3" />
                {event.time}
              </div>
              <div className="flex items-center text-gold-500">
                <MapPin className="w-5 h-5 mr-3" />
                {event.location}
              </div>
            </div>
            <p className="text-gold-500 mb-6">{event.description}</p>
            <button className="px-6 py-2 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-lg hover:from-gold-500 hover:to-gold-400 transition-smooth">
              Register Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;