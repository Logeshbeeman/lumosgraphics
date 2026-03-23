import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export function HomePage() {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const whatWeCreate = [
    {
      title: 'Branding',
      description: 'Build a strong and consistent brand identity that clearly communicates your values and stands out in the market.',
      image: '/images/img11.jpg'
    },
    {
      title: 'Packaging',
      description: 'Design attractive, functional packaging that enhances product appeal and creates a lasting impression.',
      image: '/images/img12.jpg'
    },
    {
      title: 'Digital Marketing',
      description: 'Grow your online presence with data-driven digital marketing strategies that increase reach and conversions.',
      image: '/images/img13.jpg'
    },
    {
      title: 'Website',
      description: 'Develop fast, responsive, and scalable websites focused on performance, usability, and modern design.',
      image: '/images/img14.jpg'
    }
  ];
  const brandPartners = [
    { name: 'K.S.R. Institute Of Dental Science And Research', image: '/images/img1.jpg' },
    { name: 'Gram Envosolution Pvt. Ltd.', image: '/images/img2.jpg' },
    { name: 'B16 Clinic', image: '/images/img3.jpg' },
    { name: 'TSK', image: '/images/img4.jpg' },
    { name: 'Veeyes Dental Hospitals', image: '/images/img5.jpg' },
    { name: 'Kinergy Physio', image: '/images/img6.jpg' },
    { name: 'Inipps & Kaarams', image: '/images/img7.jpg' },
    { name: 'Nellai MuthuVilas', image: '/images/img8.jpg' },
    { name: 'Sri Ram Sweets & Bakes', image: '/images/img9.jpg' },
    { name: 'K.R. Bakes', image: '/images/img10.jpg' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header activePage="home" />

      <main ref={containerRef}>
        <Hero />
        <About />

        <section className={`py-28 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className={`text-xs tracking-[0.35em] uppercase mb-5 ${isDark ? 'text-blue-300' : 'text-yellow-700'}`}>What We Create</p>
              <h2 className="text-3xl md:text-5xl font-extralight tracking-tight max-w-4xl mb-6">
                We provide focused creative and digital solutions that help brands grow, connect, and perform better online.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {whatWeCreate.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className={`rounded-3xl overflow-hidden border ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.03]'}`}
                >
                  <img src={service.image} alt={service.title} className="h-52 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-light mb-3 tracking-tight">{service.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects with a different heading style */}
        <section className="relative">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black/5 pointer-events-none" />
          <Products />
        </section>

        <section className={`py-28 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className={`text-xs tracking-[0.35em] uppercase mb-4 ${isDark ? 'text-blue-300' : 'text-yellow-700'}`}>Trusted Brands</p>
              <h2 className="text-4xl md:text-6xl font-extralight tracking-tight">Brands We Work With</h2>
            </motion.div>

            <div className="flex flex-wrap gap-3 mb-12">
              {brandPartners.map((brand) => (
                <span
                  key={brand.name}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm tracking-wide border ${isDark ? 'border-white/15 bg-white/5 text-gray-200' : 'border-black/10 bg-black/[0.03] text-gray-700'}`}
                >
                  {brand.name}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {brandPartners.slice(0, 8).map((brand, index) => (
                <motion.article
                  key={`${brand.name}-feature`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className={`relative overflow-hidden rounded-3xl h-64 group ${isDark ? 'bg-slate-900/40' : 'bg-gray-100'}`}
                >
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-sm tracking-wide">{brand.name}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={`py-32 border-y overflow-hidden transition-colors duration-500 ${isDark ? 'border-gray-900 bg-slate-950/20' : 'border-gray-200 bg-gray-50/10'}`}>
          <div className="flex flex-col gap-10 opacity-20">
            <div className={`flex whitespace-nowrap text-[6vw] font-black tracking-tighter leading-none italic uppercase animate-marquee ${!isDark ? 'text-gray-800' : ''}`}>
              STRATEGY • DESIGN • PACKAGING • GROWTH • INNOVATION • STRATEGY • DESIGN • PACKAGING • GROWTH • INNOVATION • STRATEGY • DESIGN • PACKAGING • GROWTH • INNOVATION •
            </div>
            <div className={`flex whitespace-nowrap text-[6vw] font-black tracking-tighter leading-none uppercase animate-marquee-reverse ${isDark ? 'text-blue-400' : 'text-yellow-600'}`}>
              CREATIVITY • AUTHENTICITY • CREATIVITY • AUTHENTICITY • CREATIVITY • AUTHENTICITY • CREATIVITY • AUTHENTICITY • CREATIVITY • AUTHENTICITY •
            </div>
          </div>
        </section>

        {/* Staggered Info Section */}
        <section className={`py-40 relative transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <h2 className="text-5xl sm:text-6xl md:text-8xl font-extralight tracking-tighter mb-10 leading-tight">
                  Elevating<br />the <span className={isDark ? "text-blue-400" : "text-yellow-600"}>Ordinary</span>
                </h2>
                <p className={`text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600 font-medium'}`}>
                  We believe every touchpoint is an opportunity to tell your brand story. Our meticulous approach to design ensures that every detail serves a purpose and resonates with your audience.
                </p>
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <h3 className={`text-5xl font-extralight mb-2 ${isDark ? 'text-blue-400' : 'text-yellow-500'}`}>100%</h3>
                    <p className="text-sm tracking-widest uppercase font-light">Dedication</p>
                  </div>
                  <div>
                    <h3 className={`text-5xl font-extralight mb-2 ${isDark ? 'text-blue-400' : 'text-yellow-500'}`}>Elite</h3>
                    <p className="text-sm tracking-widest uppercase font-light">Execution</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className={`aspect-square rounded-[3rem] p-12 relative overflow-hidden flex items-center justify-center ${isDark ? 'bg-slate-900/50' : 'bg-zinc-50'}`}
              >
                <div className={`absolute inset-0 opacity-20 ${isDark ? 'bg-blue-600/20' : 'bg-yellow-400/20'} filter blur-3xl animate-pulse`} />
                <div className="relative text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className={`w-72 h-72 md:w-80 md:h-80 border-2 border-dashed rounded-full flex items-center justify-center ${isDark ? 'border-blue-400/30' : 'border-yellow-500/30'}`}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className={`w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border ${isDark ? 'bg-blue-400/10 border-blue-300/20' : 'bg-yellow-500/10 border-yellow-600/20'}`}
                    >
                      <img
                        src="/images/logo-old.png"
                        alt="LMS Logo"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final Statement Section */}
        <section className={`py-64 text-center relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-5">
            <h2 style={{ color: '#ffff00b8' }} className="text-[15vw] font-black tracking-tighter leading-none select-none">LUMOUS</h2>
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extralight mb-12 tracking-tight leading-tight"
            >
              Turning brand visions into <span className="italic">tangible reality</span> through expert craftsmanship.
            </motion.h2>
            <div className={`w-24 h-1 mx-auto ${isDark ? 'bg-blue-600' : 'bg-yellow-500'}`} />
          </div>
        </section>

      </main>
      <Footer activePage="home" />
    </div>
  );
}
