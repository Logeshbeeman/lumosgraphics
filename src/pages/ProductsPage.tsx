import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Parallax } from '../components/Parallax';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useRef, useEffect } from 'react';

const items = [
    {
      id: "1",
      img: "/images/img1.jpg",
      url: "#",
      height: 400,
      title: "PREMIUM DESIGN",
      category: "BRAND"
    },
    {
      id: "2",
      img: "/images/img2.jpg",
      url: "#",
      height: 250,
      title: "CREATIVE SOLUTION",
      category: "PACKAGING"
    },
    {
      id: "3",
      img: "/images/img3.jpg",
      url: "#",
      height: 600,
      title: "DIGITAL INNOVATION",
      category: "CREATIVE"
    },
    {
      id: "4",
      img: "/images/img4.jpg",
      url: "#",
      height: 350,
      title: "BRAND IDENTITY",
      category: "BRAND"
    },
    {
      id: "5",
      img: "/images/img5.jpg",
      url: "#",
      height: 450,
      title: "PACKAGING DESIGN",
      category: "PACKAGING"
    },
    {
      id: "6",
      img: "/images/img6.jpg",
      url: "#",
      height: 300,
      title: "MODERN BRANDING",
      category: "BRAND"
    },
    {
      id: "7",
      img: "/images/img7.jpg",
      url: "#",
      height: 550,
      title: "TECH INNOVATION",
      category: "DIGITAL"
    },
    {
      id: "8",
      img: "/images/img8.jpg",
      url: "#",
      height: 280,
      title: "CREATIVE DIRECTION",
      category: "CREATIVE"
    },
    {
      id: "9",
      img: "/images/img9.jpg",
      url: "#",
      height: 400,
      title: "LUXURY PACKAGING",
      category: "PACKAGING"
    },
    {
      id: "10",
      img: "/images/img10.jpg",
      url: "#",
      height: 320,
      title: "BRAND ESSENCE",
      category: "BRAND"
    },
    {
      id: "11",
      img: "/images/img11.jpg",
      url: "#",
      height: 480,
      title: "SUSTAINABLE DESIGN",
      category: "CREATIVE"
    },
    {
      id: "12",
      img: "/images/img12.jpg",
      url: "#",
      height: 360,
      title: "DIGITAL EXPERIENCE",
      category: "DIGITAL"
    },
    {
      id: "13",
      img: "/images/img13.jpg",
      url: "#",
      height: 420,
      title: "ARTISTIC VISION",
      category: "CREATIVE"
    },
    {
      id: "14",
      img: "/images/img14.jpg",
      url: "#",
      height: 290,
      title: "MODERN PACKAGING",
      category: "PACKAGING"
    },
    {
      id: "15",
      img: "/images/img15.jpg",
      url: "#",
      height: 380,
      title: "BRAND STRATEGY",
      category: "BRAND"
    },
    {
      id: "16",
      img: "/images/img16.jpg",
      url: "#",
      height: 460,
      title: "FUTURE DESIGN",
      category: "DIGITAL"
    },
    {
      id: "17",
      img: "/images/img17.jpg",
      url: "#",
      height: 340,
      title: "INNOVATIVE THINKING",
      category: "CREATIVE"
    },
    {
      id: "18",
      img: "/images/img18.jpg",
      url: "#",
      height: 310,
      title: "PREMIUM BRANDING",
      category: "BRAND"
    },
    {
      id: "19",
      img: "/images/img19.jpg",
      url: "#",
      height: 500,
      title: "ULTIMATE CREATION",
      category: "DIGITAL"
    }
];

type PortfolioItem = (typeof items)[number];

function PortfolioCard({
    item,
    isDark,
    accentClass,
    className = '',
    titleSize = 'text-xl',
    delay = 0,
    style
}: {
    item: PortfolioItem;
    isDark: boolean;
    accentClass: string;
    className?: string;
    titleSize?: string;
    delay?: number;
    style?: CSSProperties;
}) {
    return (
        <motion.article
            className={`group relative overflow-hidden rounded-3xl border transition-colors duration-500 ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.03]'} ${className}`}
            style={style}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay }}
        >
            <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] tracking-[0.18em] uppercase mb-2 backdrop-blur-sm ${accentClass}`}>
                    {item.category}
                </p>
                <h3 className={`${titleSize} font-light tracking-wide text-white`}>{item.title}</h3>
            </div>
        </motion.article>
    );
}

// Product Slider Component
function ProductSlider({ items, isDark }: { items: PortfolioItem[]; isDark: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    className="text-3xl md:text-4xl font-extralight tracking-tight mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Products
                </motion.h2>

                <div className="relative" ref={containerRef}>
                    <div className="overflow-hidden rounded-2xl">
                        <motion.div 
                            className="flex transition-transform duration-1200 ease-out"
                            animate={{ x: -currentIndex * 100 + '%' }}
                        >
                            {items.map((item, index) => (
                                <div key={item.id} className="w-full flex-shrink-0">
                                    <div className={`relative group overflow-hidden rounded-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/[0.03] border-black/10'} border`}>
                                        <div className="aspect-[16/9] relative">
                                            <img 
                                                src={item.img} 
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                            
                                            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="space-y-3">
                                                    <p className={`inline-flex px-3 py-1.5 rounded-full text-xs tracking-[0.18em] uppercase backdrop-blur-sm ${
                                                        item.category === 'BRAND' ? (isDark ? 'bg-cyan-400/20 text-cyan-300 border-cyan-300/30' : 'bg-blue-100 text-blue-700 border-blue-200') :
                                                        item.category === 'PACKAGING' ? (isDark ? 'bg-amber-400/20 text-amber-300 border-amber-300/30' : 'bg-amber-100 text-amber-700 border-amber-200') :
                                                        item.category === 'DIGITAL' ? (isDark ? 'bg-emerald-400/20 text-emerald-300 border-emerald-300/30' : 'bg-emerald-100 text-emerald-700 border-emerald-200') :
                                                        (isDark ? 'bg-fuchsia-400/20 text-fuchsia-300 border-fuchsia-300/30' : 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200')
                                                    } border`}>
                                                        {item.category}
                                                    </p>
                                                    <h3 className="text-xl font-light tracking-wide text-white mb-2">{item.title}</h3>
                                                    <p className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-300'}`}>
                                                        Premium quality design with exceptional attention to detail
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <motion.button
                        onClick={prevSlide}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10 ${
                            isDark ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-black/10 border-black/20 text-black hover:bg-black/20'
                        }`}
                    >
                        <motion.svg 
                            className="w-4 h-4" 
                            whileHover={{ rotate: -15 }}
                            transition={{ duration: 0.2 }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </motion.svg>
                    </motion.button>
                    <motion.button
                        onClick={nextSlide}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10 ${
                            isDark ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-black/10 border-black/20 text-black hover:bg-black/20'
                        }`}
                    >
                        <motion.svg 
                            className="w-4 h-4" 
                            whileHover={{ rotate: 15 }}
                            transition={{ duration: 0.2 }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                    </motion.button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-6 space-x-1.5">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                                index === currentIndex 
                                    ? (isDark ? 'bg-white w-6' : 'bg-black w-6') 
                                    : (isDark ? 'bg-white/30' : 'bg-black/30')
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Rotating Images Component
function RotatingImages({ items, isDark }: { items: PortfolioItem[]; isDark: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const rotatingItems = items.slice(5, 11); // Get 6 images (items 5-10)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % rotatingItems.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    className="text-3xl md:text-4xl font-extralight tracking-tight mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    Creative Showcase
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rotatingItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`relative overflow-hidden rounded-2xl border ${
                                index === currentIndex 
                                    ? 'scale-105 shadow-2xl' 
                                    : 'scale-100 shadow-lg'
                            } transition-all duration-500 ${
                                isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.03]'
                            }`}
                            initial={{ opacity: 0, rotate: Math.random() * 10 - 5 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="aspect-[4/5] relative">
                                <img 
                                    src={item.img} 
                                    alt={item.title}
                                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ${
                                        index === currentIndex ? 'scale-110 brightness-110' : 'scale-100 brightness-100'
                                    }`}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`} />
                                
                                <div className={`absolute bottom-0 left-0 right-0 p-6 transform translate-y-full transition-all duration-500 ${
                                    index === currentIndex ? 'translate-y-0' : 'translate-y-full'
                                }`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className={`inline-flex px-3 py-1.5 rounded-full text-xs tracking-[0.18em] uppercase mb-2 backdrop-blur-sm ${
                                            item.category === 'BRAND' ? (isDark ? 'bg-cyan-400/20 text-cyan-300 border-cyan-300/30' : 'bg-blue-100 text-blue-700 border-blue-200') :
                                            item.category === 'PACKAGING' ? (isDark ? 'bg-amber-400/20 text-amber-300 border-amber-300/30' : 'bg-amber-100 text-amber-700 border-amber-200') :
                                            item.category === 'DIGITAL' ? (isDark ? 'bg-emerald-400/20 text-emerald-300 border-emerald-300/30' : 'bg-emerald-100 text-emerald-700 border-emerald-200') :
                                            (isDark ? 'bg-fuchsia-400/20 text-fuchsia-300 border-fuchsia-300/30' : 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200')
                                        } border`}>
                                            {item.category}
                                        </p>
                                        <h3 className="text-xl font-light tracking-wide text-white mb-1">{item.title}</h3>
                                        <p className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-300'}`}>
                                            {index === currentIndex ? 'Currently featured - Premium quality with exceptional design' : 'Premium quality design'}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Image Carousel Component for Featured Section
function FeaturedImageCarousel({ items, isDark }: { items: PortfolioItem[]; isDark: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselItems = items.slice(0, 6); // Use first 6 images

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <motion.div 
                className="relative overflow-hidden"
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <motion.div
                    className="flex transition-transform duration-800 ease-out"
                    animate={{ x: -currentIndex * 100 + '%' }}
                >
                    {carouselItems.map((item, index) => (
                        <div key={item.id} className="w-full flex-shrink-0 relative">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="h-[340px] md:h-[420px] w-full object-cover transition-transform duration-1000 hover:scale-110" 
                            />
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? (isDark ? 'bg-white w-6' : 'bg-black w-6') 
                                    : (isDark ? 'bg-white/50' : 'bg-black/50')
                            }`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-10 ${
                        isDark ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-black/10 border-black/20 text-black hover:bg-black/20'
                    }`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % carouselItems.length)}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-10 ${
                        isDark ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-black/10 border-black/20 text-black hover:bg-black/20'
                    }`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </motion.div>
        </div>
    );
}

export function ProductsPage() {
    const { isDark } = useTheme();
    const featured = items[0];
    const brands = ['LUMOUS', 'BRANDCRAFT', 'NOVA', 'AETHER', 'VERVE', 'ARC', 'NEST', 'BLOOM'];

    const getCategoryAccent = (category: string) => {
        if (category === 'BRAND') return isDark ? 'text-cyan-300 bg-cyan-400/10 border-cyan-300/30' : 'text-blue-700 bg-blue-100 border-blue-200';
        if (category === 'PACKAGING') return isDark ? 'text-amber-300 bg-amber-400/10 border-amber-300/30' : 'text-amber-700 bg-amber-100 border-amber-200';
        if (category === 'DIGITAL') return isDark ? 'text-emerald-300 bg-emerald-400/10 border-emerald-300/30' : 'text-emerald-700 bg-emerald-100 border-emerald-200';
        return isDark ? 'text-fuchsia-300 bg-fuchsia-400/10 border-fuchsia-300/30' : 'text-fuchsia-700 bg-fuchsia-100 border-fuchsia-200';
    };

    const gallery = items.slice(1);

    return (
        <div className={`min-h-screen transition-colors duration-500 selection:bg-cyan-400 selection:text-black ${isDark ? 'bg-black text-white' : 'bg-white text-black'
            }`}>
            <Header activePage="products" />

            <main className="pt-20">
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="relative mb-20">
                        <Parallax offset={20}>
                            <motion.h1
                                className="text-5xl sm:text-7xl md:text-9xl font-extralight tracking-tighter leading-none mb-8"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Our<br /><span className={isDark ? "text-cyan-400" : "text-yellow-500"}>Portfolio</span>
                            </motion.h1>
                        </Parallax>
                        <motion.p
                            className={`text-xl font-light max-w-2xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            A deeper dive into our creative journey. From digital experiences to physical manifestations of brand identity, we push boundaries of what's possible.
                        </motion.p>
                    </div>

                    <motion.article
                        className={`mb-10 rounded-[2rem] overflow-hidden border ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.03]'}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid md:grid-cols-2">
                            <motion.div 
                                className="relative overflow-hidden"
                                initial={{ scale: 0.8, rotate: -5 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                <img 
                                    src={featured.img} 
                                    alt={featured.title} 
                                    className="h-[340px] md:h-[420px] w-full object-cover transition-transform duration-1000 hover:scale-110" 
                                />
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                />
                            </motion.div>
                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <motion.span 
                                    className={`inline-flex w-fit px-3 py-1 rounded-full text-xs tracking-[0.2em] uppercase border ${getCategoryAccent(featured.category)}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                >
                                    FEATURED
                                </motion.span>
                                <motion.h2 
                                    className="mt-5 text-3xl md:text-5xl font-extralight tracking-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    {featured.title}
                                </motion.h2>
                                <motion.p 
                                    className={`mt-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.9, delay: 0.8 }}
                                >
                                    Signature work that blends craft, structure, and visual emotion. A strong first impression with lasting brand value.
                                </motion.p>
                            </div>
                        </div>
                    </motion.article>

                    {/* Product Slider Section */}
                    <ProductSlider items={items.slice(1, 8)} isDark={isDark} />

                    <div className={`mb-10 overflow-hidden rounded-2xl border py-4 ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.03]'}`}>
                        <div className="flex whitespace-nowrap animate-marquee">
                            {[...brands, ...brands].map((brand, i) => (
                                <span
                                    key={`${brand}-${i}`}
                                    className={`mx-3 inline-flex items-center rounded-full border px-4 py-2 text-xs tracking-[0.22em] ${isDark ? 'border-cyan-300/30 text-cyan-200' : 'border-yellow-600/30 text-yellow-700'}`}
                                >
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>

                    <hr className={`my-10 border-0 h-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gallery.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-105 ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.03]'}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: Math.min(index * 0.02, 0.24) }}
                            >
                                <div className="aspect-[4/5] relative">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <p className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] tracking-[0.18em] uppercase mb-2 backdrop-blur-sm ${getCategoryAccent(item.category)}`}>
                                            {item.category}
                                        </p>
                                        <h3 className="text-xl font-light tracking-wide text-white">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to action section with specific corner glows */}
                <section className={`py-40 overflow-hidden relative transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    {/* Corner glows */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className={`absolute -top-48 -left-48 w-96 h-96 rounded-full filter blur-[120px] opacity-40 transition-colors duration-500 ${isDark ? 'bg-blue-600' : 'bg-yellow-400'}`} />
                        <div className={`absolute -bottom-48 -right-48 w-96 h-96 rounded-full filter blur-[120px] opacity-40 transition-colors duration-500 ${isDark ? 'bg-blue-600' : 'bg-yellow-400'}`} />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                        <motion.h2
                            className="text-5xl md:text-7xl font-extralight mb-12"
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                        >
                            Ready to start<br />your project?
                        </motion.h2>
                        <motion.button
                            onClick={() => window.goToPage?.('contact')}
                            className={`px-12 py-5 font-medium rounded-full transition-all duration-500 shadow-xl ${isDark
                                ? 'bg-blue-600 text-white hover:bg-white hover:text-black shadow-blue-500/20'
                                : 'bg-yellow-500 text-black hover:bg-black hover:text-white shadow-yellow-500/20'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                        </motion.button>
                    </div>
                </section>
            </main>
            <Footer activePage="products" />
        </div>
    );
}

