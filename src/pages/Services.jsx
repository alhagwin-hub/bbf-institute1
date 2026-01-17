import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Languages, 
  Briefcase, 
  Users, 
  Award,
  Lightbulb,
  Monitor,
  Baby,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'الدبلومات وبرامج التأهيل',
    description: 'برامج دبلوم معتمدة ومتكاملة تؤهلك للانضمام إلى سوق العمل بكل ثقة',
    features: [
      'دبلوم إدارة الموارد البشرية',
      'دبلوم إدخال البيانات ومعالجة النصوص',
      'برامج تأهيل وتدريب معتمدة',
      'شهادات معترف بها'
    ],
    color: 'cyan',
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Languages,
    title: 'برامج اللغة الإنجليزية',
    description: 'دورات متخصصة في اللغة الإنجليزية لجميع المستويات من المبتدئ إلى المتقدم',
    features: [
      'مستويات متعددة (Level 1-6)',
      'التحضير لاختبار STEP',
      'التحضير لاختبار IELTS',
      'محادثة وتواصل'
    ],
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Baby,
    title: 'برامج الأطفال',
    description: 'برامج تعليمية مصممة خصيصاً للأطفال لتنمية مهاراتهم اللغوية والذهنية',
    features: [
      'برنامج Beehive للأطفال',
      'مستويات متعددة للأطفال',
      'تعليم تفاعلي وممتع',
      'بيئة تعليمية محفزة'
    ],
    color: 'rose',
    gradient: 'from-rose-500 to-rose-600'
  },
  {
    icon: Monitor,
    title: 'الحاسب الآلي والتقنية',
    description: 'دورات متخصصة في مجال الحاسب الآلي والتقنيات الحديثة',
    features: [
      'تحليل البيانات بـ Power BI',
      'الأمن السيبراني',
      'إدخال البيانات',
      'البرامج المكتبية'
    ],
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Briefcase,
    title: 'التطوير الإداري والقيادي',
    description: 'برامج متخصصة لتطوير المهارات الإدارية والقيادية للموظفين والمدراء',
    features: [
      'مهارات القيادة',
      'إدارة الفرق',
      'التخطيط الاستراتيجي',
      'مهارات التواصل'
    ],
    color: 'amber',
    gradient: 'from-amber-500 to-amber-600'
  },
  {
    icon: Lightbulb,
    title: 'الخدمات الاستشارية',
    description: 'استشارات تدريبية متخصصة للمؤسسات والشركات لتطوير كوادرها البشرية',
    features: [
      'تحليل الاحتياجات التدريبية',
      'تصميم البرامج المخصصة',
      'متابعة وتقييم الأداء',
      'حلول تدريبية متكاملة'
    ],
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-600'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-cyan-700 to-cyan-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              خدماتنا وبرامجنا التدريبية
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              نقدم مجموعة متنوعة من البرامج والخدمات التدريبية المعتمدة لتلبية احتياجاتك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-500"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Icon & Title */}
                  <div className={`bg-gradient-to-br ${service.gradient} p-8 md:p-12 text-white`}>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="md:col-span-2 p-8 md:p-12">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">ما نقدمه:</h4>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3">
                          <CheckCircle className={`w-5 h-5 text-${service.color}-500`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className={`bg-gradient-to-l ${service.gradient} hover:opacity-90`}>
                      <Link to={createPageUrl('Courses')}>
                        تصفح الدورات
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            هل تحتاج مساعدة في اختيار البرنامج المناسب؟
          </h2>
          <p className="text-gray-400 mb-8">
            تواصل معنا وسنساعدك في اختيار البرنامج التدريبي الأنسب لأهدافك
          </p>
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
            <Link to={createPageUrl('Contact')}>
              تواصل معنا الآن
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}