import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export function BrandLoader() {
  const { isDark } = useTheme();
  const logoSrc = isDark ? "/src/assets/images/dark-logo.png" : "/images/Logo.png";
  const logoClass = isDark ? "h-12 w-12 object-contain" : "h-12 w-12 object-contain";

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'}`}>
      <motion.div
        className={`absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl ${isDark ? 'bg-blue-500/20' : 'bg-yellow-300/30'}`}
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl ${isDark ? 'bg-cyan-500/20' : 'bg-sky-300/30'}`}
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [1.1, 0.95, 1.1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`relative h-28 w-28 rounded-full border ${isDark ? 'border-blue-400/40' : 'border-yellow-600/40'} flex items-center justify-center`}
        >
          <motion.div
            className={`absolute inset-0 rounded-full border-2 ${isDark ? 'border-blue-400/30' : 'border-yellow-600/30'}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className={`absolute inset-2 rounded-full border ${isDark ? 'border-blue-300/25' : 'border-yellow-700/25'}`}
            animate={{ rotate: -360 }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.img
            src={logoSrc}
            alt="Lumous logo"
            className={logoClass}
            animate={{ y: [0, -3, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.h1
          className="mt-6 text-3xl tracking-tight font-light"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
        >
          LUMOUS
        </motion.h1>
        <motion.p
          className={`text-[11px] tracking-[0.32em] uppercase mt-1 ${isDark ? 'text-blue-300/80' : 'text-yellow-700/80'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.45 }}
        >
          Graphics
        </motion.p>

        <div className={`mt-5 h-1 w-40 overflow-hidden rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
          <motion.div
            className={`h-full w-20 rounded-full ${isDark ? 'bg-blue-300/80' : 'bg-yellow-600/80'}`}
            animate={{ x: [-70, 140] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </div>
  );
}
