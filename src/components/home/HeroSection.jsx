import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/95 via-cyan-800/90 to-cyan-700/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 text-cyan-300" />
              <span className="text-cyan-100 text-sm">معتمد من المؤسسة العامة للتدريب التقني والمهني</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              معهد بناء المستقبل 
              <span className="text-cyan-300"> المشرق</span>
            </h1>
            
            <p className="text-xl text-cyan-100 leading-relaxed mb-8 max-w-xl">
              نؤهلك بالمهارات اللازمة لمواكبة تطورات سوق العمل وصناعة مستقبل أفضل. 
              دورات احترافية وشهادات معتمدة.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-cyan-700 hover:bg-cyan-50 text-lg px-8 py-6 rounded-xl font-bold shadow-lg shadow-black/20"
              >
                <Link to={createPageUrl('Courses')}>
                  تصفح الدورات
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl font-bold"
              >
                <Link to={createPageUrl('Contact')}>
                  تواصل معنا
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white">+1000</div>
                <div className="text-cyan-200 text-sm">متدرب</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">+50</div>
                <div className="text-cyan-200 text-sm">دورة تدريبية</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">+10</div>
                <div className="text-cyan-200 text-sm">سنوات خبرة</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-3xl transform rotate-6" />
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
                alt="التعليم والتدريب"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">شهادات معتمدة</div>
                    <div className="text-sm text-gray-500">معترف بها محلياً</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}