
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Zap, Star } from 'lucide-react';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  interval: string;
  popular?: boolean;
  premium?: boolean;
  description: string;
  features: string[];
  products: string[];
  savings: string;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Essential',
    price: 39.99,
    originalPrice: 49.99,
    interval: 'month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Basic nutrition plan',
      'Monthly product delivery',
      'Email support',
      'Access to nutrition guides',
      'Cancel anytime'
    ],
    products: [
      'Whey Protein (1kg)',
      'Multivitamin (30 days)',
      'Omega-3 Fish Oil'
    ],
    savings: 'Save 20%'
  },
  {
    id: 'pro',
    name: 'Performance Pro',
    price: 79.99,
    originalPrice: 99.99,
    interval: 'month',
    popular: true,
    description: 'Ideal for serious athletes and fitness enthusiasts',
    features: [
      'Personalized nutrition plan',
      'Bi-weekly product delivery',
      'Priority chat support',
      'AI dietitian consultations',
      'Custom meal plans',
      'Progress tracking',
      'Cancel anytime'
    ],
    products: [
      'Whey Protein Isolate (2kg)',
      'Creatine Monohydrate',
      'Pre-workout Formula',
      'BCAA Complex',
      'Multivitamin Elite'
    ],
    savings: 'Save 30%'
  },
  {
    id: 'elite',
    name: 'Elite Athlete',
    price: 129.99,
    originalPrice: 169.99,
    interval: 'month',
    premium: true,
    description: 'Complete solution for professional athletes',
    features: [
      'Fully customized nutrition protocol',
      'Weekly product delivery',
      '24/7 nutritionist support',
      'Monthly video consultations',
      'Competition prep guidance',
      'Advanced body composition tracking',
      'Supplement timing optimization',
      'Performance analytics',
      'Cancel anytime'
    ],
    products: [
      'Premium Whey Isolate (3kg)',
      'Clinical-grade Creatine',
      'Advanced Pre-workout',
      'Recovery Formula',
      'Sleep & Recovery Stack',
      'Immune Support Complex',
      'Joint Health Formula'
    ],
    savings: 'Save 40%'
  }
];

export const SubscriptionPlans = () => {
  const handleSubscribe = (plan: SubscriptionPlan) => {
    // Handle subscription logic
    console.log('Subscribing to:', plan.name);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Choose Your Nutrition Plan</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get personalized nutrition delivered to your door with expert guidance and AI-powered recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptionPlans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`relative ${
              plan.popular ? 'border-2 border-blue-500 shadow-lg scale-105' : 
              plan.premium ? 'border-2 border-purple-500 shadow-lg' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            {plan.premium && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white px-4 py-1">
                  <Crown className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <div className="space-y-2">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-gray-600">/{plan.interval}</span>
                  </div>
                  <Badge variant="secondary" className="text-green-600 bg-green-100">
                    {plan.savings}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Features Included
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Monthly Products</h4>
                <ul className="space-y-1">
                  {plan.products.map((product, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 shrink-0"></div>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full ${
                  plan.popular ? 'bg-blue-600 hover:bg-blue-700' :
                  plan.premium ? 'bg-purple-600 hover:bg-purple-700' : ''
                }`}
                onClick={() => handleSubscribe(plan)}
              >
                Start {plan.name} Plan
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Cancel anytime • No commitment • Free shipping
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Not sure which plan is right for you?</h3>
        <p className="text-gray-600 mb-4">
          Take our free assessment to get personalized recommendations
        </p>
        <Button variant="outline">
          Take Assessment
        </Button>
      </div>
    </div>
  );
};
