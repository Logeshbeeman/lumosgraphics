import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProductsPage } from './pages/ProductsPage';
import { useTheme } from './contexts/ThemeContext';
import { BrandLoader } from './components/BrandLoader';
import { motion } from 'framer-motion';

function App() {
  const LOADER_DURATION_MS = 3500;
  const [currentPage, setCurrentPage] = useState('home');
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), LOADER_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [LOADER_DURATION_MS]);

  useEffect(() => {
    if (!nextPage) return;
    const timer = window.setTimeout(() => {
      setCurrentPage(nextPage);
      setIsLoading(false);
      setNextPage(null);
      window.scrollTo(0, 0);
    }, LOADER_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [nextPage, LOADER_DURATION_MS]);

  const goToPage = (page: string) => {
    if (page === currentPage && !isLoading) {
      window.scrollTo(0, 0);
      return;
    }
    setNextPage(page);
    setIsLoading(true);
  };

  window.goToPage = goToPage;

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {isLoading && <BrandLoader />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'products' && <ProductsPage />}
      <>
      
      {/* WhatsApp Chat Button (Animated) */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -12, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
      >
        <div className="relative">
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-green-500/25"
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.button
            onClick={() =>
              window.open(
                "https://wa.me/917845970483?text=Hi%20Lumos%20Graphics!%20I%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project.",
                "_blank"
              )
            }
            className="relative w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-105"
            aria-label="Chat on WhatsApp"
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            {/* WhatsApp <-> LG swap (no badge) */}
            <div className="relative w-8 h-8">
              <motion.svg
                viewBox="0 0 24 24"
                className="absolute inset-0 w-8 h-8"
                aria-hidden="true"
                animate={{
                  rotate: [0, -8, 8, 0],
                  opacity: [1, 1, 0, 0, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.45, 0.5, 0.95, 1],
                }}
              >
                <path
                  fill="currentColor"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                />
              </motion.svg>
              <motion.img
                src="/images/logo-old.png"
                alt="Lumos Graphics logo"
                className="absolute inset-0 w-full h-full object-contain"
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.45, 0.5, 0.95, 1],
                }}
              />
            </div>

            {/* Badge removed as requested */}
          </motion.button>
        </div>
      </motion.div>

      </>
    </div>
  );
}

export default App;
