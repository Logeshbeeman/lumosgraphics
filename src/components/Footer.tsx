import { Instagram, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Footer({ activePage }: { activePage?: string }) {
  const { isDark } = useTheme();

  const getLinkClass = (page: string) => {
    const isActive = activePage === page;
    const activeColor = isDark ? 'text-blue-400 font-medium' : 'text-yellow-600 font-medium';
    return `hover:text-blue-400 transition-colors ${isActive ? activeColor : ''}`;
  };

  return (
    <footer className={`py-20 transition-colors duration-500 border-t ${isDark ? 'bg-black text-gray-400 border-gray-900' : 'bg-white text-gray-600 border-gray-100'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className={`text-3xl font-light tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-black'}`}>LUMOUS</h3>
            <p className="leading-relaxed max-w-sm font-light text-lg">
              Elevating brands through exceptional design and innovative packaging solutions since 2014.
            </p>
          </div>

          <div>
            <h4 className={`font-medium mb-6 uppercase tracking-widest text-xs ${isDark ? 'text-white' : 'text-black'}`}>Links</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><button onClick={() => window.goToPage?.('home')} className={getLinkClass('home')}>Home</button></li>
              <li><button onClick={() => window.goToPage?.('products')} className={getLinkClass('products')}>Work</button></li>
              <li><button onClick={() => window.goToPage?.('about')} className={getLinkClass('about')}>About</button></li>
              <li><button onClick={() => window.goToPage?.('contact')} className={getLinkClass('contact')}>Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-medium mb-6 uppercase tracking-widest text-xs ${isDark ? 'text-white' : 'text-black'}`}>Socials</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/_lumos_graphics_?igsh=MW1rYjl4aHA2aW9ncQ%3D%3D" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isDark ? 'border-gray-800 hover:border-blue-400 text-white' : 'border-gray-200 hover:border-yellow-600 text-black'
                }`}>
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isDark ? 'border-gray-800 hover:border-blue-400 text-white' : 'border-gray-200 hover:border-yellow-600 text-black'
                }`}>
                <Linkedin size={18} />
              </a>
              <a href="mailto:lumosgraphics@gmail.com" className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isDark ? 'border-gray-800 hover:border-blue-400 text-white' : 'border-gray-200 hover:border-yellow-600 text-black'
                }`}>
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t text-center text-xs font-light tracking-widest ${isDark ? 'border-gray-900' : 'border-gray-100'}`}>
          <p>&copy; {new Date().getFullYear()} LUMOUS DESIGN STUDIO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
