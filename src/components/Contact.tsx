import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from './Parallax';
import { useTheme } from '../contexts/ThemeContext';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { isDark } = useTheme();

  return (
    <section id="contact" className={`py-24 transition-colors duration-500 border-t relative overflow-hidden ${isDark ? 'bg-black text-white border-gray-900' : 'bg-zinc-50 text-black border-gray-200'
      }`}>
      <div className="absolute inset-0 opacity-20">
        <Parallax offset={-25}>
          <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full filter blur-3xl ${isDark ? 'bg-cyan-500' : 'bg-cyan-200'
            }`}></div>
        </Parallax>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl sm:text-7xl font-light mb-6 tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              HAVE A PROJECT <br /> IN YOUR MIND?
            </motion.h2>
            <motion.p
              className={`text-3xl font-light ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              LET'S TALK
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className={`text-sm font-light tracking-widest mb-3 ${isDark ? 'text-cyan-300/70' : 'text-cyan-700/70'}`}>PHONE</h3>
                  <motion.p className="text-2xl font-light" whileHover={{ color: isDark ? '#00d9ff' : '#0891b2' }}>
                    <a href="tel:+918714196999">
                      Ph: +91 8714196999
                    </a>
                  </motion.p>
                  <motion.p className="text-2xl font-light" whileHover={{ color: isDark ? '#00d9ff' : '#0891b2' }}>
                    <a href="tel:+919037718895">
                      +91 9037718895
                    </a>
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className={`text-sm font-light tracking-widest mb-3 ${isDark ? 'text-cyan-300/70' : 'text-cyan-700/70'}`}>FIND US</h3>
                  <div className="flex space-x-6">
                    {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.2, color: isDark ? '#00d9ff' : '#0891b2' }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={`pt-20 border-t flex flex-col sm:flex-row justify-between items-center ${isDark ? 'border-gray-900' : 'border-gray-200'}`}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm font-light mb-4 sm:mb-0`}>
              <p>&copy; {new Date().getFullYear()} LUMOUS. All rights reserved.</p>
            </div>
            <div className={`flex space-x-6 text-sm font-light ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <motion.button onClick={() => window.goToPage?.('home')} whileHover={{ color: isDark ? '#00d9ff' : '#0891b2' }} transition={{ duration: 0.3 }}>Work</motion.button>
              <motion.button onClick={() => window.goToPage?.('about')} whileHover={{ color: isDark ? '#00d9ff' : '#0891b2' }} transition={{ duration: 0.3 }}>About</motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
