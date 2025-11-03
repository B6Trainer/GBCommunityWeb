import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  DollarSign, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp, 
  Award,
  Globe,
  Eye,
  Cpu,
  CheckCircle,
  Home,
  GitBranch,
  ArrowUpCircle,
  Gift,
  Calculator as CalcIcon,
  Coins
} from 'lucide-react';
import Calculator from './Calculator';
import PotentialEarnings from './PotentialEarnings';

const CommunityPlan = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [animateLevel, setAnimateLevel] = useState(0);

  useEffect(() => {
    if (activeTab === 'structure') {
      setAnimateLevel(0);
      const interval = setInterval(() => {
        setAnimateLevel(prev => {
          if (prev < 12) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

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

  const tabs = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'structure', label: 'Community Structure', icon: <GitBranch className="w-5 h-5" /> },
    { id: 'upgrades', label: 'Upgrades', icon: <ArrowUpCircle className="w-5 h-5" /> },
    { id: 'rewards', label: 'Rewards', icon: <Gift className="w-5 h-5" /> },
    { id: 'calculator', label: 'Calculator', icon: <CalcIcon className="w-5 h-5" /> }
  ];

  const highlights = [
    {
      icon: <DollarSign />,
      title: "Start with just 10 USDT",
      description: "Start building your community with just 10 USDT. Start passive income with minimal investment and build it along the way."
    },
    {
      icon: <Zap />,
      title: "Instant rewards and payments",
      description: "Decentralized rewards processing system with instant rewards settlement in USDT."
    },
    {
      icon: <Globe />,
      title: "Online and Global business",
      description: "Build your community from any part of the world. Team members can join from anywhere and receive rewards in USDT."
    },
    {
      icon: <Eye />,
      title: "Transparent system",
      description: "All transactions are recorded on the Blockchain, open to all. Verify rewards on the blockchain explorer."
    }
  ];

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

  const levelsData = [
    { level: 1, members: 2 },
    { level: 2, members: 4 },
    { level: 3, members: 8 },
    { level: 4, members: 16 },
    { level: 5, members: 32 },
    { level: 6, members: 64 },
    { level: 7, members: 128 },
    { level: 8, members: 256 },
    { level: 9, members: 512 },
    { level: 10, members: 1024 },
    { level: 11, members: 2048 },
    { level: 12, members: 4096 }
  ];

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

  const advantages = [
    {
      icon: <Shield />,
      title: "Decentralized system",
      description: "All transactions performed on Blockchain, verifiable and irreversible."
    },
    {
      icon: <Users />,
      title: "Community Focus",
      description: "Prioritize building strong relationships and understanding community needs. Lead to long-term partnerships based on trust."
    },
    {
      icon: <Cpu />,
      title: "Cutting-Edge Technology",
      description: "Use the latest tools and technology to stay ahead. Ensuring efficient and effective services."
    },
    {
      icon: <Award />,
      title: "Proven Success",
      description: "Track record of successful projects. Earned a reputation for reliability and excellence."
    }
  ];

  const renderHomeContent = () => (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.section variants={fadeInUp} className="cp-section-narrow">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">The Community Plan</h2>
        <div className="cp-card max-w-4xl mx-auto text-center">
          <div className="cp-earning-animation mb-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <TrendingUp className="w-24 h-24 text-gold-400 mx-auto" />
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold text-gold-400 mb-3">Grow Your Wealth with Community</h3>
          <p className="text-gold-300 text-lg">Watch your earnings multiply as your community expands. Every member contributes to collective growth.</p>
        </div>
      </motion.section>

      <motion.section variants={fadeInUp} className="cp-section">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Plan Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={fadeInUp} className="cp-card">
              <div className="cp-icon-wrapper">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-center mb-3 text-gold-400">{highlight.title}</h3>
              <p className="text-center text-gold-500/80 text-sm leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="cp-divider" />

      <motion.section variants={fadeInUp} className="cp-section">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Build & Earn</h2>
        <div className="cp-card max-w-3xl mx-auto text-center">
          <div className="space-y-4 mb-6">
            <p className="text-gold-400 text-lg">Help the community by referring new members</p>
            <p className="text-gold-400 text-lg">Members join and upgrade their slots</p>
            <p className="text-gold-400 text-lg font-bold">Earn 3 categories of rewards from each member and each upgrade</p>
          </div>
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <div className="px-6 py-3 bg-gradient-to-r from-gold-600/20 to-gold-500/20 rounded-lg border border-gold-400/40">
              <p className="font-semibold text-gold-300">Build the community</p>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-gold-600/20 to-gold-500/20 rounded-lg border border-gold-400/40">
              <p className="font-semibold text-gold-300">Earn your rewards</p>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-gold-600/20 to-gold-500/20 rounded-lg border border-gold-400/40">
              <p className="font-semibold text-gold-300">Instant decentralized rewards</p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="cp-divider" />

      <motion.section variants={staggerContainer} className="cp-section">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Key Competitive Advantages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div key={index} variants={fadeInUp} className="cp-advantage-card">
              <div className="cp-advantage-icon">{advantage.icon}</div>
              <h3 className="cp-advantage-title">{advantage.title}</h3>
              <p className="text-gold-500/80 text-sm leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );

  const renderStructureContent = () => (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.section variants={fadeInUp} className="cp-section-narrow">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Community Structure</h2>
        <div className="cp-card max-w-4xl mx-auto">
          <div className="cp-matrix-animation mb-8">
            <div className="flex flex-col items-center gap-8 py-8">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="cp-node bg-gradient-to-br from-gold-400 to-gold-600">You</motion.div>
              
              <div className="flex gap-16">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, repeat: Infinity, repeatDelay: 3 }} className="cp-node bg-gradient-to-br from-gold-300 to-gold-500">1</motion.div>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, repeat: Infinity, repeatDelay: 3 }} className="cp-node bg-gradient-to-br from-gold-300 to-gold-500">2</motion.div>
              </div>
              
              <div className="flex gap-8">
                {[3, 4, 5, 6].map((num, idx) => (
                  <motion.div key={num} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 + idx * 0.3, repeat: Infinity, repeatDelay: 3 }} className="cp-node bg-gradient-to-br from-gold-200 to-gold-400 text-sm">{num}</motion.div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-gold-400 font-semibold mb-4">2x2 Matrix - Auto Filling Structure</p>
          <p className="text-center text-gold-500/80 text-sm">Watch your community grow automatically with each new member placement</p>
        </div>
      </motion.section>

      <div className="cp-divider" />

      <motion.section variants={fadeInUp} className="cp-section">
        <div className="cp-card max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gold-400">Structure Summary</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0" /><span className="text-gold-500">2x2 Matrix Structure</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0" /><span className="text-gold-500">12 Levels Deep</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0" /><span className="text-gold-500">Auto Filling System</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0" /><span className="text-gold-500">Unlimited Nodes</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gold-400">Key Points</h3>
              <ul className="space-y-3 text-gold-500/80 text-sm">
                <li>• A member can have any number of nodes</li>
                <li>• Each node connects with 2 other nodes, forming a two-matrix</li>
                <li>• Each Node has a reach of 12 levels below it</li>
                <li>• Eligible for rewards on upgrades within that tree</li>
                <li>• Members join by reference, sponsor, or directs under your node</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="cp-divider" />

      <motion.section variants={fadeInUp} className="cp-section">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">How to Start</h2>
        <div className="cp-card max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gold-400">All you need is...</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-xl border border-gold-400/30">
              <DollarSign className="w-12 h-12 mx-auto mb-3 text-gold-400" />
              <p className="text-gold-400 font-semibold">10 USDT + Gas fee</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-xl border border-gold-400/30">
              <Users className="w-12 h-12 mx-auto mb-3 text-gold-400" />
              <p className="text-gold-400 font-semibold">2 members to refer</p>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-3 text-gold-400">What do you earn here...</h4>
            <p className="text-5xl font-bold text-gold-300 mb-2">16 USDT</p>
            <p className="text-2xl font-bold text-green-400">60% Profit!</p>
          </div>
          <p className="text-gold-500 text-lg italic">And your profits continue...</p>
        </div>
      </motion.section>

      <div className="cp-divider" />

      <motion.section variants={fadeInUp} className="cp-section">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Levels & Members</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <div className="cp-card text-center mb-6">
            <p className="text-gold-400 text-lg mb-2">Potential: <span className="font-bold text-2xl text-gold-300">8,190 members</span> under your single node</p>
            <p className="text-gold-500 italic">It's a team effort, you are not alone</p>
          </div>
        </div>
        <div className="cp-levels-animated max-w-2xl mx-auto">
          {levelsData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: animateLevel > index ? 1 : 0, x: animateLevel > index ? 0 : -50 }}
              transition={{ duration: 0.5 }}
              className="cp-level-row"
            >
              <div className="cp-level-label">Level {row.level}</div>
              <div className="cp-level-members">{row.members.toLocaleString()} Members</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );

  const renderUpgradesContent = () => (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.section variants={fadeInUp} className="cp-section-narrow">
        <div className="cp-card max-w-4xl mx-auto text-center">
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
          <h3 className="text-2xl font-bold text-gold-400 mb-4">Node Expansion = Wealth Growth</h3>
          <p className="text-gold-500 text-lg">Each upgrade unlocks new earning potential and expands your network reach</p>
        </div>
      </motion.section>

      <div className="cp-divider" />

      <motion.section variants={staggerContainer} className="cp-section">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Member Upgrade Slots</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
  );

  const renderRewardsContent = () => (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
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

      <div className="cp-divider" />

      <motion.section variants={staggerContainer} className="cp-section">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Reward Types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div variants={fadeInUp} className="cp-reward-card">
            <div className="cp-reward-percentage">30%</div>
            <h3 className="cp-reward-title">Direct Mining Rewards</h3>
            <ul className="space-y-2 text-gold-500/80 text-sm">
              <li>• Earn 30% from any upgrade from directly referred members</li>
              <li>• Unlimited earning, no limitation on levels</li>
              <li>• No referral conditions</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="cp-reward-card">
            <div className="cp-reward-percentage">50%</div>
            <h3 className="cp-reward-title">Upgrade Mining Bonus</h3>
            <ul className="space-y-2 text-gold-500/80 text-sm">
              <li>• Earn 50% from your team of 12 levels</li>
              <li>• Earn on equivalent upgrade from each level</li>
              <li>• 1st upgrade from 1st level, 2nd from 2nd level, etc.</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="cp-reward-card">
            <div className="cp-reward-percentage">18%</div>
            <h3 className="cp-reward-title">Level Mining Bonus</h3>
            <ul className="space-y-2 text-gold-500/80 text-sm">
              <li>• Earn multi-level income from each level</li>
              <li>• Each level offers different percentage</li>
              <li>• Rewards from team as deep as 12th level</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <div className="cp-divider" />

      <motion.section variants={fadeInUp} className="cp-section">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Direct Mining Bonus (30%)</h2>
        <div className="cp-card max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-center mb-4 text-gold-400">Revenue from just ONE directly referred member</h3>
          <p className="text-5xl font-bold text-center text-gold-300 mb-4">5,829 USDT</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="text-center p-3 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-gold-400" />
              <p className="text-sm text-gold-500">Unlimited earnings</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-gold-400" />
              <p className="text-sm text-gold-500">No minimum conditions</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-gold-400" />
              <p className="text-sm text-gold-500">No level conditions</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-gold-400" />
              <p className="text-sm text-gold-500">All slot upgrades</p>
            </div>
          </div>
        </div>
        <div className="cp-table-container">
          <table className="cp-table">
            <thead>
              <tr>
                <th>Members</th>
                <th>Calculation</th>
                <th>Total Bonus</th>
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
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Upgrade Mining Bonus (50%)</h2>
        <div className="cp-card max-w-3xl mx-auto mb-8 text-center">
          <p className="text-gold-400 text-lg mb-4">Rewards from all levels, receive 50% of the upgrade value</p>
          <p className="text-3xl font-bold text-gold-300 mb-2">Potential Earnings from Team:</p>
          <p className="text-5xl font-bold text-gold-300">6.8 Million USDT</p>
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
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Level Mining Bonus</h2>
        <div className="cp-card max-w-3xl mx-auto mb-8 text-center">
          <p className="text-gold-400 text-lg mb-4">Rewards from your team as deep as 12th Level</p>
          <p className="text-3xl font-bold text-gold-300 mb-2">Potential Earnings from Team:</p>
          <p className="text-5xl font-bold text-gold-300">4.7 Million USDT</p>
          <div className="mt-6 p-4 bg-gradient-to-br from-gold-600/10 to-gold-500/10 rounded-lg">
            <p className="text-sm text-gold-500"><span className="font-bold">DR</span> - Minimum Direct Referral | <span className="font-bold"> SU</span> - Minimum Slot Upgrade level</p>
          </div>
        </div>
        <div className="cp-table-container">
          <table className="cp-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Members</th>
                <th>Level Bonus</th>
                <th>Earning Amount</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {levelMiningData.map((row, index) => (
                <tr key={index}>
                  <td className="font-semibold">Level {row.level}</td>
                  <td>{row.members}</td>
                  <td className="font-bold text-gold-400">{row.bonus}</td>
                  <td className="font-bold text-gold-300">{row.earning} USDT</td>
                  <td className="text-sm">{row.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      <div className="cp-divider" />

      <motion.section variants={fadeInUp} className="cp-section">
        <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">How Much Can I Earn?</h2>
        <div className="cp-earning-summary max-w-3xl mx-auto">
          <p className="text-2xl font-semibold text-gold-400 mb-2 relative z-10">Potential Total Earning</p>
          <div className="cp-earning-total">11.5 Million USDT</div>
          <div className="grid md:grid-cols-3 gap-4 mt-8 relative z-10">
            <div className="p-4 bg-gradient-to-br from-gold-600/20 to-gold-500/10 rounded-xl border border-gold-400/40">
              <p className="text-sm text-gold-500 mb-1">Direct Mining</p>
              <p className="text-2xl font-bold text-gold-300">Unlimited</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gold-600/20 to-gold-500/10 rounded-xl border border-gold-400/40">
              <p className="text-sm text-gold-500 mb-1">Level Rewards</p>
              <p className="text-2xl font-bold text-gold-300">4.7 M</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gold-600/20 to-gold-500/10 rounded-xl border border-gold-400/40">
              <p className="text-sm text-gold-500 mb-1">Upgrade Mining</p>
              <p className="text-2xl font-bold text-gold-300">6.8 M</p>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );

  const renderCalculatorContent = () => (
    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="cp-section">
      <h2 className="text-3xl font-bold text-center mb-8 gold-embossed">Earnings Calculator</h2>
      <div className="cp-card max-w-2xl mx-auto text-center py-16">
        {/* <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="inline-block mb-6">
          <CalcIcon className="w-24 h-24 text-gold-400" />
        </motion.div>
        <h3 className="text-4xl font-bold text-gold-300 mb-4">Coming Soon</h3>
        <p className="text-gold-500 text-lg mb-4">Calculate your potential earnings with our interactive calculator</p>
        <p className="text-gold-500/70 text-sm">This powerful tool will help you project your income based on various scenarios</p> */}

        <Calculator/>
        <PotentialEarnings/>
      </div>
    </motion.div>
  );

  return (
    <div className="community-plan-container pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="cp-hero">
          <h1 className="cp-hero-title">Gold Bucks Community Plan</h1>
        </motion.div>

        <div className="cp-divider" />

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            {activeTab === 'home' && renderHomeContent()}
            {activeTab === 'structure' && renderStructureContent()}
            {activeTab === 'upgrades' && renderUpgradesContent()}
            {activeTab === 'rewards' && renderRewardsContent()}
            {activeTab === 'calculator' && renderCalculatorContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="cp-tab-navigation">
        <div className="cp-tab-container">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`cp-tab-button ${activeTab === tab.id ? 'cp-tab-active' : ''}`} data-testid={`tab-${tab.id}`}>
              <div className="cp-tab-icon">{tab.icon}</div>
              <span className="cp-tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPlan;
