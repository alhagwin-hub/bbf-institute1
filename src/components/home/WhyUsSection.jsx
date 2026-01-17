import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Target, BookOpen, Headphones } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'معتمد رسمياً',
    description: 'معتمد من المؤسسة العامة للتدريب التقني والمهني'
  },
  {
    icon: Users,
    title: 'مدربون خبراء',
    description: 'نخبة من المدربين ذوي الخبرة العالية'
  },
  {
    icon: Target,
    title: 'محتوى عملي',
    description: 'تطبيقات عملية تلامس الواقع الوظيفي'
  },
  {
    icon: BookOpen,
    title: 'مناهج حديثة',
    description: 'مناهج محدثة تواكب تطورات سوق العمل'
  },
  {
    icon: Headphones,
    title: 'دعم مستمر',
    description: 'متابعة ودعم مستمر للمتدربين'
  },
  {
    icon: CheckCircle2,
    title: 'شهادات معتمدة',
    description: 'شهادات معترف بها تعزز سيرتك الذاتية'
  }
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-700 via-cyan-600 to-cyan-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-cyan-100 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            لماذا نحن؟
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            مميزات معهد بناء المستقبل المشرق
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            نسعى لتقديم تجربة تعليمية استثنائية تصنع منك نسخة أقوى وأكثر جاهزية للمستقبل
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-cyan-100">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}