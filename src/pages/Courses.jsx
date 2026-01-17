import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Clock, 
  Filter,
  GraduationCap,
  Languages,
  Monitor,
  Baby
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'الكل', icon: GraduationCap },
  { id: 'دبلومات', name: 'الدبلومات', icon: GraduationCap },
  { id: 'لغة انجليزية', name: 'اللغة الإنجليزية', icon: Languages },
  { id: 'برامج أطفال', name: 'برامج الأطفال', icon: Baby },
  { id: 'حاسب آلي', name: 'الحاسب الآلي', icon: Monitor },
];

import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';

const defaultCourses = [
  {
    id: 1,
    title: 'دبلوم إدارة الموارد البشرية',
    category: 'دبلومات',
    price: 28900,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800',
    duration: '6 أشهر',
    description: 'برنامج دبلوم شامل في إدارة الموارد البشرية'
  },
  {
    id: 2,
    title: 'التحضير لاختبارات STEP',
    category: 'لغة انجليزية',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800',
    duration: '3 أشهر',
    description: 'تحضير شامل لاختبار STEP'
  },
  {
    id: 3,
    title: 'تحليل البيانات باستخدام Power BI',
    category: 'حاسب آلي',
    price: 1680,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    duration: 'شهر',
    description: 'تعلم تحليل البيانات وإنشاء التقارير التفاعلية'
  },
  {
    id: 4,
    title: 'مبادئ وأساسيات الأمن السيبراني',
    category: 'حاسب آلي',
    price: 1050,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    duration: '4 أسابيع',
    description: 'تعرف على أساسيات حماية المعلومات والأمن السيبراني'
  },
  {
    id: 5,
    title: 'Level 1 - English',
    category: 'لغة انجليزية',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
    duration: '3 أشهر',
    description: 'المستوى الأول في اللغة الإنجليزية'
  },
  {
    id: 6,
    title: 'Level 2 - English',
    category: 'لغة انجليزية',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800',
    duration: '3 أشهر',
    description: 'المستوى الثاني في اللغة الإنجليزية'
  },
  {
    id: 7,
    title: 'Level 3 - English',
    category: 'لغة انجليزية',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800',
    duration: '3 أشهر',
    description: 'المستوى الثالث في اللغة الإنجليزية'
  },
  {
    id: 8,
    title: 'Level 4 - English',
    category: 'لغة انجليزية',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800',
    duration: '3 أشهر',
    description: 'المستوى الرابع في اللغة الإنجليزية'
  },
  {
    id: 9,
    title: 'Level 5 - English',
    category: 'لغة انجليزية',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800',
    duration: '3 أشهر',
    description: 'المستوى الخامس في اللغة الإنجليزية'
  },
  {
    id: 10,
    title: 'Beehive 1 - برنامج أطفال',
    category: 'برامج أطفال',
    price: 1229,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800',
    duration: '3 أشهر',
    description: 'برنامج تعليم الإنجليزية للأطفال - المستوى الأول'
  },
  {
    id: 11,
    title: 'Beehive 2 - برنامج أطفال',
    category: 'برامج أطفال',
    price: 1229,
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800',
    duration: '3 أشهر',
    description: 'برنامج تعليم الإنجليزية للأطفال - المستوى الثاني'
  },
  {
    id: 12,
    title: 'Beehive 3 - برنامج أطفال',
    category: 'برامج أطفال',
    price: 1229,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800',
    duration: '3 أشهر',
    description: 'برنامج تعليم الإنجليزية للأطفال - المستوى الثالث'
  },
  {
    id: 13,
    title: '3 مستويات للأطفال',
    category: 'برامج أطفال',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=800',
    duration: '9 أشهر',
    description: 'باقة 3 مستويات في اللغة الإنجليزية للأطفال'
  },
  {
    id: 14,
    title: 'مستويين للأطفال',
    category: 'برامج أطفال',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800',
    duration: '6 أشهر',
    description: 'باقة مستويين في اللغة الإنجليزية للأطفال'
  },
  {
    id: 15,
    title: 'إدخال بيانات ومعالجة نصوص',
    category: 'حاسب آلي',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800',
    duration: '4 أشهر',
    description: 'دورة شاملة في إدخال البيانات ومعالجة النصوص'
  },
];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data: dbCourses = [], isLoading: loadingCourses } = useQuery({
    queryKey: ['courses'],
    queryFn: () => base44.entities.Course.list('-created_date'),
    initialData: [],
  });

  const allCourses = dbCourses.length > 0 ? dbCourses.map(course => ({
    id: course.id,
    title: course.title,
    category: course.category,
    price: course.price,
    image: course.image_url || 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
    duration: course.duration,
    description: course.description
  })) : defaultCourses;

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-l from-cyan-700 to-cyan-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              الدورات والبرامج التدريبية
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              اختر من بين مجموعة متنوعة من الدورات المعتمدة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="ابحث عن دورة..."
                className="pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={selectedCategory === cat.id ? 'bg-cyan-600 hover:bg-cyan-700' : ''}
                >
                  <cat.icon className="w-4 h-4 ml-1" />
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-gray-600">
            عرض {filteredCourses.length} دورة
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors min-h-[3rem]">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-cyan-600 font-bold text-lg">
                      {course.price.toLocaleString('ar-SA')} ر.س
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-cyan-600 hover:bg-cyan-700"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/966559469814?text=مرحباً، أود الاستفسار عن دورة: ${course.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        سجل الآن
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">لا توجد نتائج</h3>
              <p className="text-gray-500">جرب تغيير معايير البحث</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}