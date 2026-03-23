import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Parallax } from './Parallax';
import { productItems } from '../data/products';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight } from 'lucide-react';

function ProductRow({ item, index }: { item: typeof productItems[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { isDark } = useTheme();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center mb-40 last:mb-0`}
    >
      <div className="w-full lg:w-3/5">
        <motion.div
          onClick={() => window.goToPage?.('products')}
          className={`relative rounded-[2.5rem] overflow-hidden aspect-[16/10] shadow-2xl group cursor-pointer ${item.bgColor}`}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </motion.div>
      </div>

      <div className="w-full lg:w-2/5 flex flex-col items-start px-4">
        <span className={`text-sm tracking-[0.3em] font-light uppercase mb-6 ${isDark ? 'text-blue-400' : 'text-yellow-600'}`}>
          0{index + 1} — CASE STUDY
        </span>
        <h3 className="text-4xl md:text-5xl font-extralight tracking-tighter mb-8 leading-tight">
          {item.title}
        </h3>
        <p className={`text-lg font-light leading-relaxed mb-10 max-w-md ${isDark ? 'text-gray-400' : 'text-gray-600 font-medium'}`}>
          {item.description || "Experimental design solutions merging aesthetics with functional clarity to redefine brand presence."}
        </p>
        <button
          onClick={() => window.goToPage?.('products')}
          className={`group flex items-center text-sm tracking-widest uppercase font-light border-b pb-2 transition-all duration-300 ${isDark ? 'border-blue-400/30 hover:border-blue-400 text-blue-300' : 'border-yellow-600/30 hover:border-yellow-600 text-yellow-700'
            }`}>
          Explore Project
          <ArrowRight size={16} className="ml-4 transform group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  );
}

// Excellent Unique Portfolio Layout Component
function UniquePortfolioLayout() {
  const { isDark } = useTheme();
  const allImages = [];
  
  // Generate all 19 images with unique categories
  for (let i = 1; i <= 19; i++) {
    allImages.push({
      id: i,
      src: `/src/assets/images/img${i}.jpg`,
      title: `Project ${i}`,
      category: i <= 5 ? 'BRAND IDENTITY' : i <= 10 ? 'PACKAGING' : i <= 15 ? 'CREATIVE' : 'DIGITAL',
      bgColor: i <= 5 ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10' : 
                  i <= 10 ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/10' : 
                  i <= 15 ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/10' : 
                  'bg-gradient-to-br from-green-500/20 to-emerald-500/10',
      borderColor: i <= 5 ? 'border-blue-400/30' : 
                  i <= 10 ? 'border-amber-400/30' : 
                  i <= 15 ? 'border-purple-400/30' : 
                  'border-green-400/30'
    });
  }

  return (
    <div className="space-y-20">
      {/* Hero Section with Large Featured Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={`relative rounded-3xl overflow-hidden shadow-2xl ${isDark ? 'bg-slate-900' : 'bg-gray-100'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
          <div className="lg:col-span-2">
            <img
              src="/src/assets/images/img1.jpg"
              alt="Featured Project"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`relative ${isDark ? 'bg-slate-800' : 'bg-gray-200'} p-8 flex flex-col justify-center`}>
            <div className={`inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-full mb-6 ${allImages[0].borderColor} ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
              FEATURED PROJECT
            </div>
            <h2 className={`text-4xl font-extralight mb-4 tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
              Creative Excellence
            </h2>
            <p className={`text-lg font-light mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Discover our complete collection of 19 exceptional projects showcasing design expertise across multiple categories.
            </p>
            <button className={`px-8 py-4 rounded-full font-medium tracking-wider transition-all duration-300 ${isDark ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
              Explore All Work
            </button>
          </div>
        </div>
      </motion.div>

      {/* Unique Grid Layout with Different Sizes */}
      <div className="space-y-12">
        {/* Row 1: Large Feature + 2 Small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            onClick={() => window.goToPage?.('contact')}
          >
            <img
              src="/src/assets/images/img2.jpg"
              alt="Large Feature"
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full mb-3 ${allImages[1].borderColor} ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                {allImages[1].category}
              </span>
              <h3 className="text-white text-2xl font-extralight tracking-tight">
                Premium Design Solution
              </h3>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            {allImages.slice(2, 4).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-44"
                onClick={() => window.goToPage?.('contact')}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className={`inline-block px-2 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${image.borderColor} ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2: 3 Medium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allImages.slice(4, 7).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-64 ${image.bgColor} border-2 ${image.borderColor}`}
              onClick={() => window.goToPage?.('contact')}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full mb-3 ${image.borderColor.replace('/30', '/50')} ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                  {image.category}
                </span>
                <h3 className="text-white text-lg font-extralight tracking-tight">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 3: Alternating Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {allImages.slice(7, 11).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square ${image.bgColor} ${index % 2 === 0 ? 'border-2' + image.borderColor : ''}`}
              onClick={() => window.goToPage?.('contact')}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className={`inline-block px-2 py-1 text-xs font-bold tracking-wider uppercase rounded-full mb-2 ${image.borderColor.replace('/30', '/50')} ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                  {image.category}
                </span>
                <h4 className="text-white text-sm font-extralight tracking-tight">
                  Project {image.id}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 4: Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {allImages.slice(11).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.1 + index * 0.05 }}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-[3/4]"
              onClick={() => window.goToPage?.('contact')}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-8 h-8 rounded-full ${image.bgColor} border-2 ${image.borderColor} flex items-center justify-center`}>
                  <span className="text-xs font-bold">{image.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { isDark } = useTheme();

  return (
    <section id="work" className={`py-40 transition-colors duration-500 relative overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Parallax offset={-30}>
          <div className={`absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] rounded-full filter blur-[120px] ${isDark ? 'bg-blue-600/40' : 'bg-yellow-400/40'}`} />
          <div className={`absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full filter blur-[120px] ${isDark ? 'bg-blue-600/40' : 'bg-yellow-400/40'}`} />
        </Parallax>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className={`h-[1px] w-20 transform origin-left scale-x-100 ${isDark ? 'bg-blue-600' : 'bg-yellow-500'}`} />
            <span className={`tracking-[0.5em] text-sm font-light uppercase ${isDark ? 'text-blue-400' : 'text-yellow-600'}`}>
              Featured Portfolio
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extralight tracking-tighter mb-10 italic">Beyond<br />the Brief</h2>
          <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600 font-medium'}`}>
            Our creative exploration doesn't stop at client requests. We delve deeper into essence of every brand, exploring textures, light, and form to create something truly exceptional.
          </p>
        </motion.div>

        {/* Homepage Layout - Show 4 specific items */}
        <div className="space-y-32">
          {productItems.filter((_, index) => [0, 2, 6, 8].includes(index)).map((item, arrayIndex) => (
            <ProductRow key={item.id} item={item} index={arrayIndex} />
          ))}
        </div>

        <motion.div
          className="mt-40 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => window.goToPage?.('products')}
            className={`group relative px-16 py-6 border-2 overflow-hidden rounded-full transition-all duration-500 ${isDark
              ? 'border-blue-400/30 text-blue-300 hover:border-blue-400'
              : 'border-yellow-600/30 text-yellow-700 hover:border-yellow-600'
              }`}
          >
            <span className="relative z-10 tracking-[0.3em] text-sm uppercase font-light">Explore Entire Portfolio</span>
            <div className={`absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${isDark ? 'bg-blue-400/10' : 'bg-yellow-500/10'
              }`} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Separate component for Products Page with all images
export function ProductsPage() {
  const { isDark } = useTheme();

  return (
    <section className={`py-40 transition-colors duration-500 relative overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter mb-8">
            Our Portfolio
          </h1>
          <p className={`text-xl font-light max-w-3xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover our complete collection of creative projects showcasing expertise in brand identity, packaging design, and digital innovation.
          </p>
        </motion.div>
        
        <UniquePortfolioLayout />
      </div>
    </section>
  );
}
