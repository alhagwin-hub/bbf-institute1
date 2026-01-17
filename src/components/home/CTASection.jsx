import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-l from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ابدأ رحلتك نحو 
              <span className="text-cyan-400"> مستقبل أفضل</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10">
              سجل الآن واحصل على استشارة مجانية لتحديد البرنامج التدريبي الأنسب لك
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6 rounded-xl font-bold"
              >
                <Link to={createPageUrl('Contact')}>
                  <MessageCircle className="w-5 h-5 ml-2" />
                  تواصل معنا
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl font-bold"
              >
                <a href="tel:+966559469814">
                  <Phone className="w-5 h-5 ml-2" />
                  +966 55 946 9814
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}