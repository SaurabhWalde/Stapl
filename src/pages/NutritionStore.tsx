
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Star, Heart, Zap, Award, Users } from 'lucide-react';
import { NutritionAssessment } from '@/components/nutrition/NutritionAssessment';
import { ProductGrid } from '@/components/nutrition/ProductGrid';
import { SubscriptionPlans } from '@/components/nutrition/SubscriptionPlans';

const NutritionStore = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Personalized Sports Nutrition
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Get AI-powered nutrition recommendations tailored to your fitness goals and dietary needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" onClick={() => setShowAssessment(true)}>
              <Zap className="w-5 h-5 mr-2" />
              Start Assessment
            </Button>
            <Button size="lg" variant="outline">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Dietitian</h3>
              <p className="text-gray-600">Personalized recommendations based on your goals and preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Lab-tested supplements from trusted brands</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 support from certified nutritionists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">AI Nutrition Assessment</h2>
                <Button variant="ghost" onClick={() => setShowAssessment(false)}>
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
