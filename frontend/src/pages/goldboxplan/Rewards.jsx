import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Users,CheckCircle, Gift, Coins} from 'lucide-react';


const Rewards = () => {
  
  const [animateLevel, setAnimateLevel] = useState(0);

  // useEffect(() => {
  //   if (activeTab === 'structure') {
  //     setAnimateLevel(0);
  //     const interval = setInterval(() => {
  //       setAnimateLevel(prev => {
  //         if (prev < 12) return prev + 1;
  //         clearInterval(interval);
  //         return prev;
  //       });
  //     }, 200);
  //     return () => clearInterval(interval);
  //   }
  // }, []);

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



  const upgradeMiningData = [
    { level: 1, members: 2, bonus: 5, earning: '10$' },
    { level: 2, members: 4, bonus: 10, earning: '40$' },
    { level: 3, members: 8, bonus: 25, earning: '200$' },
    { level: 4, members: 16, bonus: 50, earning: '800$' },
    { level: 5, members: 32, bonus: 125, earning: '4,000$' },
    { level: 6, members: 64, bonus: 250, earning: '16,000$' },
    { level: 7, members: 128, bonus: 500, earning: '64,000$' },
    { level: 8, members: 256, bonus: 1250, earning: '3,20,000$' },
    { level: 9, members: 512, bonus: 2500, earning: '12,80,000$' },
    { level: 10, members: 1024, bonus: 5000, earning: '51,20,000$' }
  ];

  const levelMiningData = [
    { level: 2, members: 4, bonus: '2%', earning: '1,554', eligibility: '1 DR & 1 SU' },
    { level: 4, members: 16, bonus: '2%', earning: '6,218', eligibility: '2 DR & 2 SU' },
    { level: 6, members: 64, bonus: '3%', earning: '37,306', eligibility: '3 DR & 3 SU' },
    { level: 8, members: 256, bonus: '3%', earning: '149,222', eligibility: '4 DR & 4 SU' },
    { level: 10, members: 1024, bonus: '3%', earning: '596,890', eligibility: '4 DR & 5 SU' },
    { level: 12, members: 4096, bonus: '5%', earning: '3,979,264', eligibility: '4 DR & 5 SU' }
  ];

  const directReferralData = [
    { members: 1, calculation: '1 x 5,829', total: '5,829' },
    { members: 10, calculation: '10 x 5,829', total: '58,290' },
    { members: 25, calculation: '25 x 5,829', total: '1,45,725' },
    { members: 50, calculation: '50 x 5,829', total: '2,91,450' },
    { members: 75, calculation: '75 x 5,829', total: '4,37,175' },
    { members: 100, calculation: '100 x 5,829', total: '5,82,900' }
  ];






  return (

    <>
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

        <motion.section variants={fadeInUp} className="cp-section">
          <h2 className="section-title">Community Rewards</h2>
          <div className="cp-earning-summary max-w-3xl mx-auto">
            <p className="section-card-title">Potential Total Earning</p>
            <div className="cp-earning-total">11.5 Million USDT</div>

            <div className="earning-box-grid">
              <div className="earning-box">
                <p className="text-sm text-green-900 mb-1">Direct Mining</p>
                <p className="text-l font-bold text-green-800">Unlimited</p>
              </div>
              <div className="earning-box">
                <p className="text-sm text-green-900 mb-1">Level Mining</p>
                <p className="text-l font-bold text-green-800">4.7 M</p>
              </div>
              <div className="earning-box">
                <p className="text-sm text-green-900 mb-1">Upgrade Mining</p>
                <p className="text-l font-bold text-green-800">6.8 M</p>
              </div>
            </div>
          </div>
        </motion.section>



        <div className="cp-divider" />

        <motion.section variants={staggerContainer} className="cp-section">
          <h2 className="section-title">Reward Types</h2>
          <div className="cp-reward-box-grid">
            <motion.div variants={fadeInUp} className="cp-reward-card">
              <div className="reward-category-box-grid">

               <div> 
                <div className="cp-reward-percentage">30%</div>
                <h3 className="cp-reward-title">Direct Mining Rewards</h3>
              </div>
              <div>
                <ul className="reward-text-list">
                  <li>• Earn 30% from any upgrade from directly referred members</li>
                  <li>• Unlimited earning, no limitation on levels</li>
                  <li>• No referral conditions</li>
                </ul>
              </div>

              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="cp-reward-card">

              <div className="reward-category-box-grid">

                <div> 
                  <div className="cp-reward-percentage">50%</div>
                  <h3 className="cp-reward-title">Upgrade Mining Rewards</h3>
                </div>
                <div>
                  <ul className="reward-text-list">
                  <li>• Earn 50% from 12 levels</li>
                  <li>• Earn on equivalent upgrade from each level</li>
                  <li>• 1st upgrade from 1st level, 2nd from 2nd level, so on.</li>
                  </ul>
                </div>

              </div>


            </motion.div>
            <motion.div variants={fadeInUp} className="cp-reward-card">


              <div className="reward-category-box-grid">

                <div> 
                  <div className="cp-reward-percentage">18%</div>
                  <h3 className="cp-reward-title">Level Mining Rewards</h3>
                </div>
                <div>
                  <ul className="reward-text-list">
                    <li>• Earn multi-level income from each level</li>
                    <li>• Each level offers different percentage</li>
                    <li>• Rewards from team as deep as 12th level</li>
                  </ul>
                </div>

              </div>

            </motion.div>
          </div>
        </motion.section>

        <div className="cp-divider" />

        <motion.section variants={fadeInUp} className="cp-section">
          <h2 className="text-3xl font-bold text-center mb-8 ">Direct Mining Bonus (30%)</h2>
          <div className="cp-card max-w-3xl mx-auto mb-8">
            <h3 className="text-1xl font-bold text-center mb-4 text-gold-400">Revenue from a single referral</h3>
            <p className="text-5xl font-bold text-center text-gold-300 mb-4">5,829 USDT</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="text-center p-3 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-gold-400" />
                <p className="text-sm text-gold-500">Unlimited earnings</p>
              </div>

              <div className="text-center p-3 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-gold-400" />
                <p className="text-sm text-gold-500">No time conditions</p>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-gold-400" />
                <p className="text-sm text-gold-500">No minimum conditions</p>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-gold-400" />
                <p className="text-sm text-gold-500">From all slot upgrades</p>
              </div>
            </div>
          </div>
          <div className="cp-table-container">
            <table className="cp-table">
              <thead>
                <tr>
                  <th>Direct Ref</th>
                  <th></th>
                  <th>Bonus Earning</th>
                </tr>
              </thead>
              <tbody>
                {directReferralData.map((row, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{row.members}</td>
                    <td>{row.calculation}</td>
                    <td className="font-bold text-gold-300">{row.total} USDT</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <div className="cp-divider" />

        <motion.section variants={fadeInUp} className="cp-section">
          <h2 className="text-3xl font-bold text-center mb-8">Upgrade Mining Bonus (50%)</h2>
          <div className="cp-earning-summary max-w-3xl mx-auto mb-8 text-center">
            <p className="cp-earning-total mb-2">6.8 Million USDT</p>            
            <p className="section-card-title">Potential Earnings from your Team</p>
            <p className="text-md text-green-900">Receive 50% upgrade value from all levels</p>
 
          </div>
          <div className="cp-table-container">
            <table className="cp-table">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Members</th>
                  <th>Upgrade Bonus</th>
                  <th>Earning Amount</th>
                </tr>
              </thead>
              <tbody>
                {upgradeMiningData.map((row, index) => (
                  <tr key={index}>
                    <td className="font-semibold">Level {row.level}</td>
                    <td>{row.members}</td>
                    <td>{row.bonus}</td>
                    <td className="font-bold text-gold-300">{row.earning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <div className="cp-divider" />

        <motion.section variants={fadeInUp} className="cp-section">
          <h2 className="text-3xl font-bold text-center mb-8">Level Mining Bonus (18%)</h2>
          <div className="cp-earning-summary  max-w-3xl mx-auto mb-8 text-center">
            <p className="cp-earning-total">4.7 Million USDT</p>            
            <p className="section-card-title">Potential Earnings from your Team</p>
            <p className="text-md text-green-900">Rewards from as deep as 12th Level</p>

          </div>
          <div className="cp-table-container">
            <table className="cp-table">
              <thead>
                <tr>
                  <th>Level</th>                  
                  <th>Bonus</th>
                  <th>Earnings</th>
                  <th>Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {levelMiningData.map((row, index) => (
                  <tr key={index}>
                    {/* <td className="font-semibold">Level {row.level}</td> */}
                    <td className="font-semibold">Level {row.level}<br/> ({row.members})</td>
                    <td className="font-bold text-gold-400">{row.bonus}</td>
                    <td className="font-bold text-gold-300">{row.earning}</td>
                    <td className="text-sm">{row.eligibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 p-4 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
              <p className="text-sm text-gold-500">
                <span className="font-bold">DR</span> - Minimum Direct Referral<br/>
                <span className="font-bold">SU</span> - Minimum Slot Upgrade level</p>
            </div>
          </div>
        </motion.section>


        <div className="cp-divider" />

        <motion.section variants={fadeInUp} className="cp-section-narrow">
          <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Community Rewards</h2>
          <div className="cp-card max-w-4xl mx-auto text-center">
            <div className="cp-rewards-animation py-8">
              <div className="flex items-center justify-center gap-6">
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Users className="w-16 h-16 text-gold-400" />
                </motion.div>
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <Coins className="w-12 h-12 text-gold-300" />
                </motion.div>
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <Gift className="w-16 h-16 text-green-400" />
                </motion.div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gold-400 mb-4">Earn from Every Level</h3>
            <p className="text-gold-500 text-lg">Multiple reward streams from your entire community network</p>
          </div>
        </motion.section>


      </motion.div>    
    </>

  );
};

export default Rewards;
