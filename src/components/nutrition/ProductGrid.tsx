
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  description: string;
  benefits: string[];
  inStock: boolean;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Whey Protein Isolate',
    brand: 'ProFit',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 1250,
    category: 'Protein',
    image: '/placeholder.svg',
    description: 'High-quality whey protein isolate with 25g protein per serving',
    benefits: ['Fast absorption', 'Muscle building', 'Post-workout recovery'],
    inStock: true
  },
  {
    id: '2',
    name: 'Creatine Monohydrate',
    brand: 'StrengthMax',
    price: 24.99,
    rating: 4.9,
    reviews: 890,
    category: 'Performance',
    image: '/placeholder.svg',
    description: 'Pure creatine monohydrate for strength and power',
    benefits: ['Increased strength', 'Enhanced power', 'Improved performance'],
    inStock: true
  },
  {
    id: '3',
    name: 'Pre-Workout Formula',
    brand: 'EnergyBoost',
    price: 34.99,
    rating: 4.6,
    reviews: 634,
    category: 'Pre-Workout',
    image: '/placeholder.svg',
    description: 'Advanced pre-workout formula with caffeine and beta-alanine',
    benefits: ['Energy boost', 'Enhanced focus', 'Better pumps'],
    inStock: true
  },
  {
    id: '4',
    name: 'Omega-3 Fish Oil',
    brand: 'PureSea',
    price: 29.99,
    rating: 4.7,
    reviews: 445,
    category: 'Health',
    image: '/placeholder.svg',
    description: 'High-potency omega-3 fish oil capsules',
    benefits: ['Heart health', 'Brain function', 'Joint support'],
    inStock: true
  },
  {
    id: '5',
    name: 'BCAA Complex',
    brand: 'RecoveryPro',
    price: 27.99,
    originalPrice: 32.99,
    rating: 4.5,
    reviews: 512,
    category: 'Recovery',
    image: '/placeholder.svg',
    description: 'Essential amino acids for muscle recovery',
    benefits: ['Muscle recovery', 'Reduced fatigue', 'Hydration support'],
    inStock: false
  },
  {
    id: '6',
    name: 'Multivitamin Elite',
    brand: 'VitaMax',
    price: 22.99,
    rating: 4.4,
    reviews: 789,
    category: 'Vitamins',
    image: '/placeholder.svg',
    description: 'Complete multivitamin for active individuals',
    benefits: ['Immune support', 'Energy metabolism', 'Overall health'],
    inStock: true
  }
];

interface ProductGridProps {
  setCartItems: (count: number | ((prev: number) => number)) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ setCartItems }) => {
  const addToCart = (product: Product) => {
    setCartItems(prev => prev + 1);
    // Add to cart logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="flex space-x-2">
          <Badge variant="secondary">Protein</Badge>
          <Badge variant="secondary">Performance</Badge>
          <Badge variant="secondary">Recovery</Badge>
          <Badge variant="secondary">Vitamins</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="p-4">
              <div className="aspect-square bg-gray-100 rounded-md mb-4 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline" className="text-xs">{product.category}</Badge>
                    <CardTitle className="text-lg mt-1">{product.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{product.brand}</CardDescription>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {product.benefits.slice(0, 2).map((benefit) => (
                    <Badge key={benefit} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 pt-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                <Button 
                  size="sm" 
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className="shrink-0"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
