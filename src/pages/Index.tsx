import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  Users, 
  BarChart3, 
  Camera,
  ShoppingCart,
  UserPlus,
  TrendingUp,
  Award,
  Zap,
  Heart,
  Target,
  Shield,
  Smartphone,
  Globe,
  Star
} from "lucide-react";
import AICoachCard from "@/components/AICoachCard";
import WorkoutSection from "@/components/WorkoutSection";
import HealthMetricsGrid from "@/components/HealthMetricsGrid";
import RecoveryInsights from "@/components/RecoveryInsights";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section with Background Animation */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          {/* Navigation */}
          <nav className="p-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  SmartFit Pro
                </h1>
              </div>
              <div className="flex space-x-4">
                <Link to="/dashboard">
                  <Button variant="outline" className="hover:bg-blue-50 border-blue-200">
                    <Activity className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Link to="/coach-network">
                  <Button variant="outline" className="hover:bg-blue-50 border-blue-200">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join Network
                  </Button>
                </Link>
                <Link to="/coach">
                  <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                      Transform
                    </span>
                    <br />
                    <span className="text-gray-900">Your Fitness</span>
                    <br />
                    <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                      Journey
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Experience the future of fitness coaching with AI-powered insights, 
                    real-time motion capture, and a community of world-class trainers.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/dashboard">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Start Your Journey
                    </Button>
                  </Link>
                  <Link to="/motion-capture">
                    <Button size="lg" variant="outline" className="border-2 border-blue-200 hover:bg-blue-50 text-lg px-8 py-6 hover:shadow-lg transition-all duration-300">
                      <Camera className="w-5 h-5 mr-2" />
                      Try Motion Capture
                    </Button>
                  </Link>
                  <Link to="/social-feed">
                    <Button size="lg" variant="outline" className="border-2 border-purple-200 hover:bg-purple-50 text-lg px-8 py-6 hover:shadow-lg transition-all duration-300">
                      <Users className="w-5 h-5 mr-2" />
                      Join Community
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10K+</div>
                    <div className="text-sm text-gray-600">Active Coaches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600">50K+</div>
                    <div className="text-sm text-gray-600">Transformations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop" 
                    alt="Fitness Training" 
                    className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  />
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">Live Session</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-semibold">Goal Achieved!</span>
                    </div>
                  </div>
                </div>
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-2xl blur-2xl transform scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade tools and insights to take your coaching to the next level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coach Dashboard Feature */}
            <Link to="/coach" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Coach Dashboard</CardTitle>
                  <CardDescription>Manage clients, track progress, and optimize performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Client Management</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Performance Analytics</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Risk Monitoring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Motion Capture Feature */}
            <Link to="/motion-capture" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Motion Capture</CardTitle>
                  <CardDescription>AI-powered form analysis and real-time feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Real-time Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Form Correction</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Performance Metrics</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* 3D Avatar Feature */}
            <Link to="/avatar-analysis" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">3D Avatar Analysis</CardTitle>
                  <CardDescription>Advanced body composition and posture insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Body Scanning</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Posture Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Progress Tracking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Nutrition Store Feature */}
            <Link to="/nutrition-store" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Nutrition Store</CardTitle>
                  <CardDescription>Personalized supplements and meal plans</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>AI Nutrition Coach</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Custom Supplements</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Meal Planning</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Sensors Feature */}
            <Link to="/coach/sensors" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Smart Sensors</CardTitle>
                  <CardDescription>Connect wearables and fitness devices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>Device Integration</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Real-time Data</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Health Monitoring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Coach Network Feature */}
            <Link to="/coach-network" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Coach Network</CardTitle>
                  <CardDescription>Connect, share, and grow with fellow coaches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span>Professional Network</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Knowledge Sharing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Career Opportunities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Your Personal Fitness Command Center
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get a preview of your coaching dashboard with real-time insights and AI-powered recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AICoachCard />
            <WorkoutSection />
          </div>
          
          <HealthMetricsGrid />
          
          <div className="mt-8">
            <RecoveryInsights />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Why Choose SmartFit Pro?
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of coaches who have transformed their practice with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Precision Tracking</h4>
              <p className="text-blue-100">Advanced analytics for every movement and metric</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Health First</h4>
              <p className="text-blue-100">Prioritize safety with real-time health monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Injury Prevention</h4>
              <p className="text-blue-100">AI-powered risk assessment and alerts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Mobile Ready</h4>
              <p className="text-blue-100">Access your dashboard anywhere, anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Top Coaches
            </h3>
            <p className="text-xl text-gray-600">
              See what industry leaders are saying about SmartFit Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "SmartFit Pro has revolutionized how I coach my athletes. The motion capture technology is incredible!"
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" 
                    alt="Coach" 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Alex Thompson</div>
                    <div className="text-sm text-gray-500">Olympic Coach</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The AI insights have helped me prevent injuries and optimize performance like never before."
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face" 
                    alt="Coach" 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Performance Coach</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "My clients love the detailed analytics and progress tracking. It keeps them motivated!"
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" 
                    alt="Coach" 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Mike Chen</div>
                    <div className="text-sm text-gray-500">Strength Coach</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Coaching?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of coaches who have elevated their practice with SmartFit Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/coach">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-6">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/coach-network">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
                Join the Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
