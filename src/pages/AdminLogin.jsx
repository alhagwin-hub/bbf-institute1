import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Mail, Loader2, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (email !== 'bbfin@outlook.sa') {
      toast.error('هذا البريد الإلكتروني غير مصرح له بالدخول');
      return;
    }
    
    setIsLoading(true);
    try {
      await base44.auth.redirectToLogin(createPageUrl('AdminDashboard'));
    } catch (error) {
      toast.error('حدث خطأ في تسجيل الدخول');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-700 via-cyan-600 to-cyan-800 flex items-center justify-center p-4">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <Card className="w-full max-w-md relative z-10">
        <CardHeader className="text-center pb-6">
          <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-10 h-10 text-cyan-600" />
          </div>
          <CardTitle className="text-2xl font-bold">دخول الإدارة</CardTitle>
          <p className="text-gray-500 mt-2">تسجيل الدخول لإدارة الدورات والبرامج</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <p className="font-medium mb-1">ملاحظة:</p>
            <p>يجب أن يكون لديك حساب إداري للوصول إلى لوحة التحكم</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل البريد الإلكتروني"
                  className="pr-10"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-lg py-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                  جاري التحويل...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5 ml-2" />
                  تسجيل الدخول
                </>
              )}
            </Button>
          </form>

          <div className="text-center">
            <Button 
              variant="link" 
              className="text-gray-600"
              onClick={() => navigate(createPageUrl('Home'))}
            >
              العودة إلى الصفحة الرئيسية
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}