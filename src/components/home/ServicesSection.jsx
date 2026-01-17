import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Languages, 
  Briefcase, 
  Users, 
  Award,
  Lightbulb,
  ArrowLeft
} from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'الدبلومات وبرامج التأهيل',
    description: 'برامج دبلوم معتمدة في مختلف التخصصات لتأهيلك لسوق العمل',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Languages,
    title: 'برامج اللغات',
    description: 'دورات لغة انجليزية لجميع المستويات للكبار والأطفال',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Briefcase,
    title: 'التطوير الإداري',
    description: 'برامج تطوير المهارات الإدارية والقيادية للموظفين',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Lightbulb,
    title: 'الخدمات الاستشارية',
    description: 'استشارات تدريبية متخصصة للمؤسسات والأفراد',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Award,
    title: 'الشهادات المهنية',
    description: 'برامج تحضيرية للشهادات المهنية المعتمدة',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Users,
    title: 'برامج الأطفال',
    description: 'برامج تعليمية مخصصة للأطفال لتنمية مهاراتهم',
    color: 'from-rose-500 to-rose-600'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            برامج التدريب والحلول
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من البرامج التدريبية والحلول المهنية
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to={createPageUrl('Services')}
            className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
          >
            اكتشف المزيد
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}