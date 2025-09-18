import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Recycle, Award, Lock, FileCheck } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const BenefitsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const benefits = [
    {
      icon: Shield,
      title: "Build confidence in device recycling",
      description: "Eliminate the fear of data breaches with military-grade security standards"
    },
    {
      icon: Lock,
      title: "Eliminate data breach fears",
      description: "NIST SP 800-88 compliant data destruction with verifiable certificates"
    },
    {
      icon: Award,
      title: "NIST SP 800-88 compliant security",
      description: "Industry-standard security protocols trusted by governments worldwide"
    },
    {
      icon: FileCheck,
      title: "Tamper-proof certificates",
      description: "QR-coded verification system ensuring authenticity and traceability"
    },
    {
      icon: Recycle,
      title: "Support India's circular economy",
      description: "Enable safe device recycling and reduce environmental impact"
    },
    {
      icon: TrendingUp,
      title: "Unlock economic potential",
      description: "Release ₹50,000 crore worth of trapped IT assets back into circulation"
    }
  ];

  return (
    <section 
      id="benefits" 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming Data Security
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            India hoards <span className="font-semibold text-amber-600">₹50,000 crore worth of IT assets</span> due to data security fears. 
            We're changing that with verifiable, secure data wiping solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 border border-white/10"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg drop-shadow-xl"
                  style={{
                    boxShadow: '0 10px 25px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Problem We Solve
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Organizations refuse to recycle devices, creating massive e-waste and economic loss
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  {inView && <CountUp end={1.75} decimals={2} duration={2} />}M
                </div>
                <div className="text-gray-300">Tonnes of annual e-waste in India</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  ₹{inView && <CountUp end={50000} duration={2} separator="," />} Cr
                </div>
                <div className="text-gray-300">Worth of hoarded IT assets</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;