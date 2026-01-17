import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { Clock, Users, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";

export default function FeaturedCourses() {
  const { data: allCourses = [] } = useQuery({
    queryKey: ['courses'],
    queryFn: () => base44.entities.Course.list('-created_date'),
    initialData: [],
  });

  const featuredCourses = allCourses
    .filter(course => course.is_featured)
    .slice(0, 4)
    .map(course => ({
      title: course.title,
      category: course.category,
      price: course.price,
      image: course.image_url || 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
      duration: course.duration
    }));

  if (featuredCourses.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
        >
          <div>
            <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              الدورات المميزة
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              أحدث البرامج التدريبية
            </h2>
          </div>
          
          <Button asChild variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
            <Link to={createPageUrl('Courses')}>
              عرض جميع الدورات
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
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
      </div>
    </section>
  );
}