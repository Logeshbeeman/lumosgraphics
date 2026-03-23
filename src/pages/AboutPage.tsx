import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useRef, useState } from 'react';

function CountUp({
  target,
  suffix = '',
  duration = 1400
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutPage() {
  const { isDark } = useTheme();

  const coreValues = [
    {
      icon: '01',
      title: 'Innovation',
      description:
        'We constantly push boundaries, embracing new technologies and creative approaches to deliver cutting-edge solutions.'
    },
    {
      icon: '02',
      title: 'Excellence',
      description:
        'Every project receives our full attention to detail, ensuring the highest quality standards in all deliverables.'
    },
    {
      icon: '03',
      title: 'Partnership',
      description:
        'We believe in building long-term relationships, working closely with clients as true partners in their success.'
    }
  ];

  const stats = [
    { value: 1500, suffix: '+', label: 'Projects Completed' },
    { value: 19, suffix: '', label: 'Years Experience' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header activePage="about" />

      <section className={`pt-36 pb-24 transition-colors duration-500 ${isDark ? 'bg-gradient-to-b from-black to-slate-950' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xs tracking-[0.35em] uppercase mb-5 ${isDark ? 'text-blue-300' : 'text-yellow-700'}`}
          >
            Lumos Graphics
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tighter leading-tight mb-8 ${isDark ? 'text-glow' : ''}`}
          >
            Illuminating Brands Through
            <br />
            Creative Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-lg md:text-xl font-light leading-relaxed max-w-4xl ${isDark ? 'text-gray-300/90' : 'text-gray-600'}`}
          >
            Since 2005, Lumos Graphics has been at the forefront of creative innovation, transforming brands through exceptional design, cutting-edge technology, and strategic thinking.
          </motion.p>
        </div>
      </section>

      <section className={`py-24 border-t transition-colors duration-500 ${isDark ? 'border-gray-800/50 bg-black' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter mb-8">Our Story</h2>
          <div className="space-y-8">
            <p className={`text-base md:text-lg font-light leading-relaxed ${isDark ? 'text-gray-300/90' : 'text-gray-600'}`}>
              Our journey began in 2019 under the name The Whistlers Creative, where we embarked on a mission to craft compelling visual narratives and distinctive brand identities. Over the years, our passion for creativity and commitment to excellence propelled us forward, leading to a significant evolution.
            </p>
            <p className={`text-base md:text-lg font-light leading-relaxed ${isDark ? 'text-gray-300/90' : 'text-gray-600'}`}>
              In 2023, embracing our growth and refined vision, we adopted the name Lumos Graphics. This new identity reflects our dedication to bringing clarity, innovation, and brilliance to every project we undertake. "Lumos," meaning light, symbolizes our aim to shed light on your brand&apos;s unique story and essence.
            </p>
          </div>
        </div>
      </section>

      <section className={`py-24 border-t transition-colors duration-500 ${isDark ? 'border-gray-800/50 bg-black' : 'border-gray-200 bg-zinc-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-xs tracking-[0.35em] uppercase mb-5 ${isDark ? 'text-blue-300' : 'text-yellow-700'}`}>Lumos Graphics</p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter mb-3">Our Core Values</h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-12`}>The principles that guide every project and relationship we build</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {coreValues.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`rounded-3xl border p-7 ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white'}`}
              >
                <p className={`text-xs tracking-[0.25em] mb-3 ${isDark ? 'text-blue-300' : 'text-yellow-700'}`}>{value.icon}</p>
                <h3 className="text-xl font-light mb-3">{value.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{value.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item) => (
              <div key={item.label} className={`rounded-2xl border p-8 text-center ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white'}`}>
                <h4 className={`text-4xl md:text-5xl font-extralight mb-2 ${isDark ? 'text-blue-400' : 'text-yellow-600'}`}>
                  <CountUp target={item.value} suffix={item.suffix} />
                </h4>
                <p className={`${isDark ? 'text-gray-300/80' : 'text-gray-600'} text-sm tracking-wide`}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-28 border-t transition-colors duration-500 ${isDark ? 'bg-gradient-to-t from-slate-950 to-black border-gray-800/50' : 'bg-gradient-to-t from-zinc-100 to-white border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extralight mb-6 tracking-tighter">Ready to Work Together?</h2>
          <p className={`text-lg font-light mb-10 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300/90' : 'text-gray-600'}`}>
            Let&apos;s discuss how we can transform your brand vision into reality.
          </p>
          <button
            onClick={() => window.goToPage?.('contact')}
            className={`inline-flex items-center px-12 py-5 border-2 rounded-full transition-all duration-500 font-light tracking-widest text-sm transform hover:scale-105 ${isDark
              ? 'border-blue-400/60 text-blue-300 hover:bg-blue-400/10 hover:border-blue-300'
              : 'border-yellow-600/60 text-yellow-700 hover:bg-yellow-600/10 hover:border-yellow-600'}`}
          >
            Get in Touch
            <ArrowRight size={20} className="ml-3" />
          </button>
        </div>
      </section>

      <Footer activePage="about" />
    </div>
  );
}
