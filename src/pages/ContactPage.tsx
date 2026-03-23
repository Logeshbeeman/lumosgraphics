import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Clock, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function ContactPage() {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: 'Brand Identity',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      projectType: 'Brand Identity',
      message: ''
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const labelClass = `block text-sm tracking-widest mb-4 ${
    isDark ? 'text-blue-300 font-semibold' : 'text-yellow-700 font-semibold'
  }`;
  const inputClass = `w-full bg-transparent border-b-2 text-base py-3 px-0 focus:outline-none transition-colors ${
    isDark
      ? 'border-gray-600 text-white focus:border-blue-400 placeholder-gray-500'
      : 'border-gray-400 text-black focus:border-yellow-600 placeholder-gray-500'
  }`;

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <Header activePage="contact" />

      <section
        className={`pt-36 pb-24 transition-colors duration-500 ${
          isDark ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <h1
              className={`text-5xl sm:text-7xl md:text-8xl font-extralight mb-10 tracking-tighter leading-tight ${
                isDark ? 'text-glow' : ''
              }`}
            >
              Let&apos;s Create Something
              <br />
              Amazing Together
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mb-14 ${isDark ? 'text-gray-300/90' : 'text-gray-600'}`}>
              Ready to start your next project? We&apos;d love to hear about your vision and discuss how we can bring it to life.
            </p>
          </div>
        </div>
      </section>

      <section className={`pb-24 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-10">Send us a message</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={labelClass}>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className={labelClass}>Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none ${isDark ? 'bg-black' : 'bg-white'}`}
                  >
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Website">Website</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full px-12 py-5 rounded-full font-semibold tracking-wider text-sm uppercase transition-all duration-500 transform hover:scale-105 shadow-lg ${
                    isDark
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-blue-500/25'
                      : 'bg-gradient-to-r from-yellow-600 to-orange-500 text-black hover:from-yellow-700 hover:to-orange-600 shadow-yellow-500/25'
                  }`}
                >
                  Send Message
                </button>
              </form>

              <div className="space-y-10">
                <h2 className="text-3xl font-extralight tracking-tight">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className={isDark ? 'text-blue-300 mt-1' : 'text-yellow-700 mt-1'} size={22} />
                    <div>
                      <h3 className="text-lg font-light mb-2">Office Address</h3>
                      <p className={isDark ? 'text-gray-300/90' : 'text-gray-600'}>
                        No. 92, Avarampalayam Road
                        <br />
                        New Siddhapudur
                        <br />
                        Coimbatore
                        <br />
                        Tamil Nadu 641044
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className={isDark ? 'text-blue-300 mt-1' : 'text-yellow-700 mt-1'} size={22} />
                    <div>
                      <h3 className="text-lg font-light mb-2">Phone</h3>
                      <a href="tel:+917845970483" className={isDark ? 'text-gray-300/90' : 'text-gray-600'}>
                        +91 78459 70483
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Linkedin className={isDark ? 'text-blue-300 mt-1' : 'text-yellow-700 mt-1'} size={22} />
                    <div>
                      <h3 className="text-lg font-light mb-2">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/feed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isDark ? 'text-gray-300/90' : 'text-gray-600'}
                      >
                        linkedin.com/feed
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className={isDark ? 'text-blue-300 mt-1' : 'text-yellow-700 mt-1'} size={22} />
                    <div>
                      <h3 className="text-lg font-light mb-2">Email</h3>
                      <a
                        href="mailto:infolumosgraphics@gmail.com"
                        className={isDark ? 'text-gray-300/90' : 'text-gray-600'}
                      >
                        infolumosgraphics@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className={isDark ? 'text-blue-300 mt-1' : 'text-yellow-700 mt-1'} size={22} />
                    <div>
                      <h3 className="text-lg font-light mb-2">Business Hours</h3>
                      <p className={isDark ? 'text-gray-300/90' : 'text-gray-600'}>
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`rounded-2xl border p-6 ${isDark ? 'border-blue-400/20 bg-blue-400/5' : 'border-yellow-600/20 bg-yellow-500/5'}`}>
                  <h3 className="text-lg font-light mb-2">Quick Response</h3>
                  <p className={`mb-4 ${isDark ? 'text-gray-300/90' : 'text-gray-600'}`}>
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <span className={`inline-flex px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-yellow-500/20 text-yellow-700'}`}>
                    Response within 24h
                  </span>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className={`pb-24 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">Find us on map</h2>
          <div className={`rounded-2xl overflow-hidden border-2 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
            <iframe
              title="Lumos Graphics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.9346939999996!2d76.962646!3d11.016667000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857ff06f7e3b3%3A0x2e3e2a1f2c9f2c9f!2sNo.+92%2C+Avarampalayam+Rd%2C+New+Siddhapudur%2C+Coimbatore%2C+Tamil+Nadu+641044!5e0!3m2!1sen!2sin!4v1669103455555!5m2!1sen!2sin"
              className="w-full h-[600px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className={`py-24 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-extralight tracking-tight mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Ready to Start Your Project?
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${isDark ? 'text-gray-300/90' : 'text-gray-600'}`}>
            Let&apos;s discuss your vision and create something extraordinary together. Get a free consultation and project quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/917845970483?text=Hi%20Lumos%20Graphics!%20I%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project.', '_blank')}
              className={`px-8 py-4 rounded-full font-semibold tracking-wider text-sm uppercase transition-all duration-500 transform hover:scale-105 shadow-lg ${
                isDark
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-blue-500/25'
                  : 'bg-gradient-to-r from-yellow-600 to-orange-500 text-black hover:from-yellow-700 hover:to-orange-600 shadow-yellow-500/25'
              }`}
            >
              Schedule a Call
            </button>
            <button 
              onClick={() => window.open('mailto:logesh@gmail.com?subject=Schedule%20a%20Call%20Request&body=Hi%20Lumos%20Graphics,%0D%0A%0D%0AI%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project.%0D%0A%0D%0APlease%20let%20me%20know%20your%20availability%20for%20a%20consultation.%0D%0A%0D%0AThank%20you!')}
              className={`px-8 py-4 border-2 rounded-full font-semibold tracking-wider text-sm uppercase transition-all duration-500 transform hover:scale-105 ${
                isDark
                  ? 'border-blue-400/60 text-blue-300 hover:bg-blue-400/10'
                  : 'border-yellow-600/60 text-yellow-700 hover:bg-yellow-600/10'
              }`}
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      <Footer activePage="contact" />
    </div>
  );
}
