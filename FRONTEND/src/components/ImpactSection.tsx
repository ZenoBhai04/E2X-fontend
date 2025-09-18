import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, TrendingUp, Shield, Globe } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ImpactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const impacts = [
    {
      icon: Leaf,
      title: 'Environmental Benefits',
      description: 'Reducing India\'s 1.75 million tonnes of annual e-waste',
      stat: '1.75M',
      statLabel: 'Tonnes e-waste reduced',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Economic Impact',
      description: 'Unlocking ₹50,000 crore worth of trapped IT assets',
      stat: '₹50,000 Cr',
      statLabel: 'Assets unlocked',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Trust Building',
      description: 'Enabling safe device recycling with verifiable data destruction',
      stat: '100%',
      statLabel: 'Secure verification',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Circular Economy',
      description: 'Supporting India\'s sustainable technology future',
      stat: '∞',
      statLabel: 'Sustainable cycles',
      color: 'from-amber-400 to-amber-600'
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-blue-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Creating Lasting Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond secure data wiping, we're building a sustainable future where technology 
            serves both security and environmental responsibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${impact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <impact.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2">
                  {impact.stat === '1.75M' && inView && <><CountUp end={1.75} decimals={2} duration={2} />M</>}
                  {impact.stat === '₹50,000 Cr' && inView && <>₹<CountUp end={50000} duration={2} separator="," /> Cr</>}
                  {impact.stat === '100%' && inView && <><CountUp end={100} duration={2} />%</>}
                  {impact.stat === '∞' && '∞'}
                </div>
                <div className="text-sm text-gray-400">{impact.statLabel}</div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {impact.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-amber-600/90 to-amber-500/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-amber-400/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Data Security Revolution
            </h3>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Every device securely wiped is a step towards a more sustainable, 
              secure, and economically viable technology ecosystem.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">Secure</div>
                <div className="text-amber-100">Military-grade data destruction</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">Sustainable</div>
                <div className="text-amber-100">Environmentally responsible recycling</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">Scalable</div>
                <div className="text-amber-100">Enterprise-ready solutions</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;