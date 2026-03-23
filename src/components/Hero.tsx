import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from './Parallax';
import { useTheme } from '../contexts/ThemeContext';

export function Hero() {
  const { isDark } = useTheme();
  const heroImages = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg', '/images/img4.jpg', '/images/img5.jpg', '/images/img6.jpg'];

  return (
    <section className={`min-h-screen pt-32 pb-40 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={isDark ? 'absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black' : 'absolute inset-0 bg-white'} />
        <div className={isDark ? 'absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(59,130,246,0.6)_1px,transparent_1px)] [background-size:22px_22px]' : 'absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:56px_56px]'} />
      </div>

      <div className="absolute inset-0 opacity-30">
        <Parallax offset={30}>
          <div className={`absolute top-20 left-10 w-96 h-96 rounded-full filter blur-3xl animate-pulse-glow ${isDark ? 'bg-blue-500/20' : 'bg-yellow-300/30'
            }`}></div>
        </Parallax>
        <Parallax offset={-20}>
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full filter blur-3xl animate-pulse-glow ${isDark ? 'bg-cyan-500/20' : 'bg-sky-300/30'
            }`} style={{ animationDelay: '1s' }}></div>
        </Parallax>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Text and Title on the left */}
          <motion.div
            className="flex-grow text-left md:max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div className="mb-8">
              <motion.h1
                className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tighter leading-none ${isDark ? 'text-glow' : ''}`}
                style={{
                  WebkitTextStroke: isDark ? '1px rgba(255,255,255,0.05)' : '1px rgba(0,0,0,0.05)',
                } as any}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Branding & Packaging Experts
              </motion.h1>
            </motion.div>

            <div className="space-y-6">
              <motion.p
                className={`text-xl lg:text-2xl tracking-wide leading-relaxed ${isDark ? 'text-blue-200/90 font-light' : 'text-gray-800 font-medium'
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We specialize in branding, packaging, and visual identity design that helps businesses stand out, connect emotionally, and grow with confidence.
              </motion.p>

              <motion.button
                onClick={() => window.goToPage?.('products')}
                className="group inline-flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <span className={`h-10 w-10 rounded-full border flex items-center justify-center ${isDark ? 'border-blue-300/40 text-blue-300' : 'border-yellow-600/50 text-yellow-700'}`}>
                  <ArrowUpRight size={16} />
                </span>
                <span className={`text-xs tracking-[0.24em] uppercase ${isDark ? 'text-blue-300/90' : 'text-yellow-700'}`}>
                  Start Your Journey
                </span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className={`w-full md:w-[620px] rounded-3xl border overflow-hidden ${isDark ? 'border-blue-400/20 bg-slate-950/40' : 'border-yellow-600/20 bg-white/80'}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* <div className="flex items-center justify-between px-5 py-4">
              <p className={`text-sm tracking-[0.22em] uppercase ${isDark ? 'text-blue-300/90' : 'text-yellow-700'}`}>Recent Works</p>
              <button
                onClick={() => window.goToPage?.('products')}
                className={`h-9 w-9 rounded-full border flex items-center justify-center ${isDark ? 'border-blue-300/40 text-blue-300' : 'border-yellow-600/40 text-yellow-700'}`}
                aria-label="View products"
              >
                <ArrowUpRight size={16} />
              </button>
            </div> */}
            <div className="py-4 overflow-hidden space-y-3">
              <div className="flex animate-marquee gap-4 px-4">
                {[...heroImages, ...heroImages].map((img, idx) => (
                  <img key={`${img}-${idx}`} src={img} alt="Work sample" className="h-40 w-64 rounded-2xl object-cover flex-shrink-0" />
                ))}
              </div>
              <div className="flex animate-marquee-reverse gap-4 px-4">
                {[...heroImages, ...heroImages].map((img, idx) => (
                  <img key={`${img}-rev-${idx}`} src={img} alt="Work sample" className="h-28 w-52 rounded-2xl object-cover flex-shrink-0" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
