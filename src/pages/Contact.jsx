import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { base44 } from '@/api/base44Client';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Instagram,
  Twitter,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    title: 'اتصل بنا',
    details: ['+966 55 946 9814'],
    color: 'cyan'
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    details: ['info@buildsunnyfuture.com'],
    color: 'blue'
  },
  {
    icon: MapPin,
    title: 'العنوان',
    details: ['Khamis Mushait 62451', 'Saudi Arabia'],
    color: 'purple'
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    details: ['الأحد - الخميس', '8:00 ص - 5:00 م'],
    color: 'emerald'
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await base44.entities.ContactMessage.create(formData);
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success('تم إرسال رسالتك بنجاح!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-l from-cyan-700 to-cyan-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              تواصل معنا
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className={`w-14 h-14 bg-${info.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`w-7 h-7 text-${info.color}-600`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">أرسل لنا رسالة</h2>
                <p className="text-gray-600 mb-8">املأ النموذج أدناه وسنتواصل معك قريباً</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">شكراً لك!</h3>
                    <p className="text-gray-600">تم استلام رسالتك وسنتواصل معك قريباً</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="أدخل اسمك"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">رقم الجوال</Label>
                        <Input 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="05xxxxxxxx"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">الموضوع</Label>
                        <Input 
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="موضوع الرسالة"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">الرسالة *</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 min-h-[150px]"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 ml-2" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                نسعد بتواصلك معنا
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار البرنامج 
                التدريبي المناسب لك. لا تتردد في التواصل معنا في أي وقت.
              </p>

              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">تابعنا على وسائل التواصل</h3>
                <p className="text-cyan-100 mb-6">
                  تابع آخر أخبارنا وعروضنا على منصات التواصل الاجتماعي
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/buildbrightf/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-gray-200 rounded-2xl h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59208.84748!2d42.666744!3d18.29553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e376a8f26bf719%3A0xdb2f2e3e8db6fd69!2sKhamis%20Mushait%2062451%2C%20Saudi%20Arabia!5e0!3m2!1sar!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}