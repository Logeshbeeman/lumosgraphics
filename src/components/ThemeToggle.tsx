import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full border-2 transition-all duration-300 ${isDark
                ? 'bg-yellow-400/10 border-yellow-400/20 text-yellow-400 hover:bg-yellow-400/20 shadow-lg shadow-yellow-500/10'
                : 'bg-blue-600/10 border-blue-600/30 text-blue-700 hover:bg-blue-600/20 shadow-lg shadow-blue-500/10'
                }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={20} className="fill-current" /> : <Moon size={20} className="fill-current" />}
        </motion.button>
    );
}
