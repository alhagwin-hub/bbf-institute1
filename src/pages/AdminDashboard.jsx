import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Plus, 
  Trash2, 
  Loader2, 
  LogOut, 
  Upload,
  Edit,
  X,
  GraduationCap,
  Save
} from 'lucide-react';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: 'لغة انجليزية',
    duration: '',
    image_url: '',
    is_featured: false
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const isAuth = await base44.auth.isAuthenticated();
      if (!isAuth) {
        navigate(createPageUrl('AdminLogin'));
        return;
      }
      const currentUser = await base44.auth.me();
      if (currentUser.role !== 'admin') {
        toast.error('غير مصرح لك بالدخول');
        navigate(createPageUrl('Home'));
        return;
      }
      setUser(currentUser);
    } catch (error) {
      navigate(createPageUrl('AdminLogin'));
    }
  };

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => base44.entities.Course.list('-created_date'),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Course.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      toast.success('تم إضافة الدورة بنجاح');
      resetForm();
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Course.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      toast.success('تم تحديث الدورة بنجاح');
      resetForm();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Course.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      toast.success('تم حذف الدورة بنجاح');
    },
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const result = await base44.integrations.Core.UploadFile({ file });
      setFormData({ ...formData, image_url: result.file_url });
      toast.success('تم رفع الصورة بنجاح');
    } catch (error) {
      toast.error('فشل رفع الصورة');
    }
    setUploading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      price: parseFloat(formData.price)
    };

    if (editingCourse) {
      updateMutation.mutate({ id: editingCourse.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      price: course.price.toString(),
      category: course.category,
      duration: course.duration,
      image_url: course.image_url || '',
      is_featured: course.is_featured || false
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: '',
      category: 'لغة انجليزية',
      duration: '',
      image_url: '',
      is_featured: false
    });
    setEditingCourse(null);
    setShowForm(false);
  };

  const handleLogout = async () => {
    await base44.auth.logout();
    navigate(createPageUrl('Home'));
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-cyan-600" />
              لوحة التحكم
            </h1>
            <p className="text-gray-600 mt-1">مرحباً {user.full_name}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate(createPageUrl('Home'))}>
              عرض الموقع
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 ml-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>

        {/* Add Button */}
        <div className="mb-6">
          <Button 
            onClick={() => setShowForm(!showForm)}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            <Plus className="w-5 h-5 ml-2" />
            إضافة دورة جديدة
          </Button>
        </div>

        {/* Form */}
        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>
                  {editingCourse ? 'تعديل الدورة' : 'إضافة دورة جديدة'}
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={resetForm}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title">عنوان الدورة *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">التصنيف *</Label>
                    <Select 
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="دبلومات">الدبلومات</SelectItem>
                        <SelectItem value="لغة انجليزية">اللغة الإنجليزية</SelectItem>
                        <SelectItem value="برامج أطفال">برامج الأطفال</SelectItem>
                        <SelectItem value="حاسب آلي">الحاسب الآلي</SelectItem>
                        <SelectItem value="تطوير إداري">التطوير الإداري</SelectItem>
                        <SelectItem value="شهادات مهنية">الشهادات المهنية</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="price">السعر (ر.س) *</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="duration">المدة *</Label>
                    <Input
                      id="duration"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      required
                      className="mt-2"
                      placeholder="مثال: 3 أشهر"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">الوصف *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    className="mt-2"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="image">صورة الدورة</Label>
                  <div className="mt-2">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                    />
                    {uploading && (
                      <p className="text-sm text-gray-500 mt-2">جاري رفع الصورة...</p>
                    )}
                    {formData.image_url && (
                      <div className="mt-3">
                        <img 
                          src={formData.image_url} 
                          alt="Preview" 
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="is_featured"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="is_featured" className="cursor-pointer">
                    دورة مميزة (تظهر في الصفحة الرئيسية)
                  </Label>
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="submit" 
                    className="bg-cyan-600 hover:bg-cyan-700"
                    disabled={createMutation.isPending || updateMutation.isPending}
                  >
                    {createMutation.isPending || updateMutation.isPending ? (
                      <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 ml-2" />
                    )}
                    {editingCourse ? 'حفظ التعديلات' : 'إضافة الدورة'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    إلغاء
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Courses Table */}
        <Card>
          <CardHeader>
            <CardTitle>جميع الدورات ({courses.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-cyan-600 mx-auto" />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>الصورة</TableHead>
                      <TableHead>العنوان</TableHead>
                      <TableHead>التصنيف</TableHead>
                      <TableHead>السعر</TableHead>
                      <TableHead>المدة</TableHead>
                      <TableHead>مميزة</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          {course.image_url && (
                            <img 
                              src={course.image_url} 
                              alt={course.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                          )}
                        </TableCell>
                        <TableCell className="font-medium">{course.title}</TableCell>
                        <TableCell>{course.category}</TableCell>
                        <TableCell>{course.price?.toLocaleString('ar-SA')} ر.س</TableCell>
                        <TableCell>{course.duration}</TableCell>
                        <TableCell>
                          {course.is_featured ? (
                            <span className="text-green-600">✓</span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(course)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => {
                                if (confirm('هل أنت متأكد من حذف هذه الدورة؟')) {
                                  deleteMutation.mutate(course.id);
                                }
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}