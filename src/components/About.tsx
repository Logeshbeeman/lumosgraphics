import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Parallax } from './Parallax';
import { useTheme } from '../contexts/ThemeContext';

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-40 transition-colors duration-500 border-t relative overflow-hidden ${isDark ? 'bg-black text-white border-gray-900' : 'bg-white text-black border-gray-100'
      }`}>
      <div className="absolute inset-0 opacity-20">
        <Parallax offset={25}>
          <div className={`absolute -bottom-40 left-20 w-80 h-80 rounded-full filter blur-3xl animate-pulse-glow ${isDark ? 'bg-blue-500' : 'bg-yellow-400'
            }`} style={{ animationDelay: '1.5s' }}></div>
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
            className="mb-24"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl sm:text-7xl lg:text-8xl font-extralight mb-10 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className={`text-xl md:text-2xl leading-relaxed max-w-4xl font-light ${isDark ? 'text-gray-300/90' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Lumous Brands, we believe that great design is the intersection of creativity, strategy, and purpose. We partner with brands to create packaging and visual identities that not only look stunning but also communicate your unique story effectively.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className={`text-sm font-semibold tracking-widest mb-8 ${isDark ? 'text-blue-400/80' : 'text-yellow-600'}`}>OUR APPROACH</h3>
              <p className={`leading-relaxed mb-6 text-xl font-light ${isDark ? 'text-gray-300/80' : 'text-gray-600'}`}>
                We don't just design—we strategize. Every project begins with understanding your brand's core values, target audience, and market positioning.
              </p>
              <p className={`leading-relaxed text-xl font-light ${isDark ? 'text-gray-300/80' : 'text-gray-600'}`}>
                Through collaborative workshops and in-depth research, we create design solutions that drive results and build lasting connections with your customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className={`text-sm font-semibold tracking-widest mb-8 ${isDark ? 'text-blue-400/80' : 'text-yellow-600'}`}>WHY CHOOSE US</h3>
              <ul className={`space-y-6 ${isDark ? 'text-gray-300/80' : 'text-gray-600'}`}>
                {['Award-winning design team with 10+ years of industry experience', 'End-to-end branding solutions from concept to execution', 'Portfolio includes leading brands across diverse industries', 'Dedicated project managers and transparent communication'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-lg md:text-xl font-light"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <span className={`mr-4 text-2xl md:text-3xl leading-none flex-shrink-0 font-bold ${isDark ? 'text-blue-400' : 'text-yellow-500'}`}>•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
