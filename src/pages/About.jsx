import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp,
  CheckCircle,
  Building2
} from 'lucide-react';

const stats = [
  { number: '+1000', label: 'متدرب' },
  { number: '+50', label: 'دورة تدريبية' },
  { number: '+10', label: 'سنوات خبرة' },
  { number: '+20', label: 'مدرب معتمد' },
];

const values = [
  {
    icon: Award,
    title: 'الجودة',
    description: 'نلتزم بأعلى معايير الجودة في جميع برامجنا التدريبية'
  },
  {
    icon: Users,
    title: 'التميز',
    description: 'نسعى دائماً للتميز في تقديم خدماتنا التعليمية'
  },
  {
    icon: TrendingUp,
    title: 'التطوير المستمر',
    description: 'نواكب أحدث التطورات في مجال التدريب والتأهيل'
  },
  {
    icon: BookOpen,
    title: 'الابتكار',
    description: 'نبتكر أساليب تدريب حديثة وفعالة'
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
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
              من نحن
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              معهد بناء المستقبل المشرق - شريكك في رحلة التطور المهني
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                نبذة عنا
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                معهد بناء المستقبل المشرق العالي للتدريب
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  معهد بناء المستقبل المشرق هو معهد معتمد من المؤسسة العامة للتدريب التقني والمهني، 
                  يهدف إلى تأهيل الخريجين والباحثين عن عمل والموظفين في القطاعين العام والخاص 
                  لمواكبة تطورات سوق العمل.
                </p>
                <p>
                  نسعى لتزويد المتدربين بالمهارات اللازمة لصناعة مستقبل أفضل، من خلال برامج 
                  تدريبية متميزة تجمع بين النظرية والتطبيق العملي.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-cyan-600">
                  <Building2 className="w-5 h-5" />
                  <span className="font-medium">معتمد من المؤسسة العامة للتدريب التقني والمهني</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000"
                  alt="فريق التدريب"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Award className="w-7 h-7 text-cyan-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">+10</div>
                      <div className="text-gray-500">سنوات خبرة</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p className="text-cyan-100 leading-relaxed text-lg">
                أن نكون المعهد الرائد في التدريب والتأهيل المهني بالمملكة العربية السعودية، 
                ونساهم في بناء كوادر وطنية مؤهلة قادرة على المنافسة في سوق العمل.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                تقديم برامج تدريبية عالية الجودة تلبي احتياجات سوق العمل، وتساهم في 
                تطوير مهارات الأفراد والمؤسسات لتحقيق رؤية المملكة 2030.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              قيمنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              القيم التي نؤمن بها
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-l from-cyan-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            انضم إلينا اليوم
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            ابدأ رحلتك التعليمية معنا واكتسب المهارات التي تحتاجها لمستقبل أفضل
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 text-lg px-8 py-6">
              <Link to={createPageUrl('Courses')}>
                تصفح الدورات
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Link to={createPageUrl('Contact')}>
                تواصل معنا
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}