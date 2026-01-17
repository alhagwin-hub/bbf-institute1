import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Phone, Mail, MapPin, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', page: 'Home' },
    { name: 'خدماتنا', page: 'Services' },
    { name: 'الدورات', page: 'Courses' },
    { name: 'من نحن', page: 'About' },
    { name: 'تواصل معنا', page: 'Contact' },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');
        * {
          font-family: 'Tajawal', sans-serif;
        }
        :root {
          --primary: #0891b2;
          --primary-dark: #0e7490;
          --primary-light: #22d3ee;
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-gradient-to-l from-cyan-700 to-cyan-600 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+966559469814" className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+966 55 946 9814</span>
            </a>
            <a href="mailto:info@buildsunnyfuture.com" className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@buildsunnyfuture.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/buildbrightf/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-cyan-200 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6935d1a0e6e2402eb6cd6777/80b34c9b8_logo.png" 
                alt="معهد بناء المستقبل المشرق" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    currentPageName === item.page
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <nav className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      currentPageName === item.page
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-700 hover:bg-cyan-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6935d1a0e6e2402eb6cd6777/80b34c9b8_logo.png" 
                alt="معهد بناء المستقبل المشرق" 
                className="h-20 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed">
                معهد بناء المستقبل المشرق معهد معتمد من المؤسسة العامة للتدريب التقني والمهني، 
                يهدف لتأهيل الخريجين والباحثين عن عمل والموظفين في القطاعين العام والخاص.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">روابط سريعة</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.page}>
                    <Link 
                      to={createPageUrl(item.page)} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">تواصل معنا</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+966 55 946 9814</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>info@buildsunnyfuture.com</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <span>Khamis Mushait 62451, Saudi Arabia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} معهد بناء المستقبل المشرق. جميع الحقوق محفوظة</p>
            <Link 
              to={createPageUrl('AdminLogin')} 
              className="inline-block mt-4 text-gray-600 hover:text-cyan-400 transition-colors text-sm"
            >
              دخول الإدارة
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}