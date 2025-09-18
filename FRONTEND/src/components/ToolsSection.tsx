import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Monitor, Terminal, Disc, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const ToolsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleToolClick = (path: string) => {
    // Add a cool dive-in animation effect
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-slate-900 z-50 pointer-events-none';
    overlay.style.transform = 'scale(0)';
    overlay.style.borderRadius = '50%';
    overlay.style.transition = 'transform 0.6s ease-in-out';
    document.body.appendChild(overlay);
    
    setTimeout(() => {
      overlay.style.transform = 'scale(3)';
    }, 10);
    
    setTimeout(() => {
      navigate(path);
      document.body.removeChild(overlay);
    }, 600);
  };

  const tools = [
    {
      id: 'windows',
      title: 'E2X Windows Pro',
      subtitle: 'Shuddh',
      tagline: 'OS-Preserving Data Wipe',
      icon: Monitor,
      features: [
        'Keeps Windows functional while wiping user data',
        'One-click secure erasure',
        'Preserves system files and drivers',
        'Emergency quit protection',
        'Real-time progress tracking'
      ],
      gradient: 'from-amber-500 to-amber-700',
      shadowColor: 'shadow-amber-500/20',
      path: '/download/windows'
    },
    {
      id: 'linux',
      title: 'E2X Linux Pro',
      subtitle: 'Data Wiping Toolkit',
      tagline: 'Drive Revival & Multi-Level Security',
      icon: Terminal,
      features: [
        'AES-128 encryption wipe capability',
        'Drive revival after wiping',
        'Multiple security levels (zero-fill to crypto-erase)',
        'Complete drive sanitization',
        'Scriptable and modular'
      ],
      gradient: 'from-green-500 to-green-700',
      shadowColor: 'shadow-green-500/20',
      path: '/download/linux'
    },
    {
      id: 'iso',
      title: 'E2X Universal ISO',
      subtitle: 'Universal Bootable',
      tagline: 'Hardware-Level Security Anywhere',
      icon: Disc,
      features: [
        'Works on any hardware via bootable USB/CD',
        'Intelligent wipe method selection',
        'UEFI + BIOS compatibility',
        'QR-coded certificates',
        'No OS dependencies'
      ],
      gradient: 'from-purple-500 to-purple-700',
      shadowColor: 'shadow-purple-500/20',
      path: '/download/iso'
    }
  ];

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional Wiping Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right tool for your environment. Each solution provides military-grade security 
            with user-friendly interfaces and comprehensive verification.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <TiltCard
              key={tool.id}
              onClick={() => handleToolClick(tool.path)}
              className="cursor-pointer"
              tiltMaxAngle={12}
              scale={1.03}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl ${tool.shadowColor} transition-all duration-500 overflow-hidden`}
              >
                <div className={`h-32 bg-gradient-to-r ${tool.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  <div className="relative p-6 flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-2xl font-bold">{tool.title}</h3>
                      <p className="text-sm opacity-90">"{tool.subtitle}"</p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <tool.icon className="w-12 h-12 opacity-80" />
                    </motion.div>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">
                    {tool.tagline}
                  </h4>

                  <ul className="space-y-3 mb-8">
                    {tool.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start text-gray-600"
                      >
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                    <span>Download Now</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose E2X Tools?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-white"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="text-4xl font-bold text-amber-400 mb-2"
                >
                  100%
                </motion.div>
                <div className="text-sm">Secure Data Destruction</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-white"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.4 }}
                  className="text-4xl font-bold text-amber-400 mb-2"
                >
                  NIST
                </motion.div>
                <div className="text-sm">SP 800-88 Compliant</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-white"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.6 }}
                  className="text-4xl font-bold text-amber-400 mb-2"
                >
                  24/7
                </motion.div>
                <div className="text-sm">Technical Support</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;