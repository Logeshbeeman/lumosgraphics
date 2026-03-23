import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

declare global {
  interface Window {
    goToPage?: (page: string) => void;
  }
}

export function Header({ activePage }: { activePage?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const handleNavClick = (page: string) => {
    if (window.goToPage) {
      window.goToPage(page);
    }
    setMobileMenuOpen(false);
  };

  const getLinkClass = (page: string) => {
    const isActive = activePage === page;
    const baseClass = "text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group";
    const activeColor = isDark ? 'text-blue-400' : 'text-yellow-600';
    const inactiveColor = isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black';

    return `${baseClass} ${isActive ? `${activeColor} font-semibold` : inactiveColor}`;
  };

  const logoSrc = isDark ? "/src/assets/images/dark-logo.png" : "/images/Logo.png";

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-500 border-b ${isDark ? 'bg-black/80 text-white border-gray-800' : 'bg-white/80 text-black border-gray-200'
      } backdrop-blur-md`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logoSrc} alt="Lumous logo" className="h-16 w-14 object-contain" />
            {/* <span className="flex flex-col items-start leading-none">
              <span className="text-3xl font-light tracking-tighter">LUMOUS</span>
              <span className={`text-[10px] tracking-[0.28em] uppercase mt-1 ${isDark ? 'text-blue-300/80' : 'text-yellow-700/80'}`}>Graphics</span>
            </span> */}
          </motion.button>

          <div className="hidden md:flex items-center space-x-12">
            {['home', 'products', 'about', 'contact'].map((page) => (
              <motion.button
                key={page}
                onClick={() => handleNavClick(page)}
                className={getLinkClass(page)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {page === 'products' ? 'Work' : page}
                {activePage === page && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute -bottom-2 left-0 right-0 h-0.5 ${isDark ? 'bg-blue-400' : 'bg-yellow-600'}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className={`md:hidden py-8 space-y-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {['home', 'products', 'about', 'contact'].map((page) => (
                <motion.button
                  key={page}
                  onClick={() => handleNavClick(page)}
                  className={`block w-full text-left text-lg font-light uppercase tracking-widest ${activePage === page
                      ? (isDark ? 'text-blue-400 font-medium' : 'text-yellow-600 font-medium')
                      : (isDark ? 'text-white/60' : 'text-black/60')
                    }`}
                  whileHover={{ x: 10 }}
                >
                  {page === 'products' ? 'Work' : page}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
