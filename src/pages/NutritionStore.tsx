import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Star, Heart, Zap, Award, Users, Sparkles, Leaf } from 'lucide-react';
import { NutritionAssessment } from '@/components/nutrition/NutritionAssessment';
import { ProductGrid } from '@/components/nutrition/ProductGrid';
import { SubscriptionPlans } from '@/components/nutrition/SubscriptionPlans';

const NutritionStore = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-8 -left-8 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-12 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-12 left-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-gray-900">NutriPro Store</div>
              <nav className="hidden md:flex space-x-6">
                <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
                <a href="#subscriptions" className="text-gray-700 hover:text-green-600 transition-colors">Subscriptions</a>
                <a href="#assessment" className="text-gray-700 hover:text-green-600 transition-colors">AI Assessment</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center bg-green-600 text-white text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button size="sm" onClick={() => setShowAssessment(true)}>
                Get AI Recommendations
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Nutrition
              </div>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Personalized <span className="text-green-600">Sports Nutrition</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Get AI-powered nutrition recommendations tailored to your fitness goals and dietary needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setShowAssessment(true)} className="group bg-green-600 hover:bg-green-700">
                  <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Assessment
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Browse Products
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" 
                  alt="Healthy nutrition and supplements"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Leaf className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-r from-green-50/50 to-blue-50/50 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Nutrition Platform?</h2>
            <p className="text-gray-600 text-lg">Experience the future of personalized nutrition</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">AI Dietitian</h3>
              <p className="text-gray-600">Personalized recommendations based on your goals and preferences</p>
            </div>
            
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-500"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">Premium Quality</h3>
              <p className="text-gray-600">Lab-tested supplements from trusted brands</p>
            </div>
            
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-ping delay-1000"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">Expert Support</h3>
              <p className="text-gray-600">24/7 support from certified nutritionists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative">
          <h2 className="text-3xl font-bold mb-6">See How It Works</h2>
          <p className="text-xl mb-8 text-green-100">Watch our AI nutritionist create personalized meal plans</p>
          <div className="relative bg-black/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="aspect-video bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80">Click to watch demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="assessment">AI Assessment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products" className="mt-8">
              <ProductGrid setCartItems={setCartItems} />
            </TabsContent>
            
            <TabsContent value="subscriptions" className="mt-8">
              <SubscriptionPlans />
            </TabsContent>
            
            <TabsContent value="assessment" className="mt-8">
              <NutritionAssessment />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Assessment Modal */}
      {showAssessment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-white/20">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">AI Nutrition Assessment</h2>
                <Button variant="ghost" onClick={() => setShowAssessment(false)} className="hover:bg-red-100 hover:text-red-600">
                  ×
                </Button>
              </div>
              <NutritionAssessment />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionStore;
