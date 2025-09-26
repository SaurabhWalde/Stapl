import { useState } from "react";
import { Menu, X} from "lucide-react";
import { NavLink } from 'react-router-dom';
import { LayoutDashboard } from "lucide-react";
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
  const [isNavOpen, setIsNavOpen] = useState(false);

  
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

        <div className="relative z-10 ">
          {/* Navigation */}
          <header className="p-6 lg:px-8 flex items-center justify-between bg-[#F3F9FF] backdrop-blur-sm">
            <div className="flex items-center space-x-0">
              {/* Logo Image */}
              <img src="/logo.png" alt="STAPL Logo" className="w-14 h-14 object-contain animate-pulse" />

              {/* Brand Name */}
              <span className="text-2xl font-bold italic font-serif bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                StapL
              </span>
            </div>

              <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <nav className={`${
                                  isNavOpen ? 'flex' : 'hidden'
                                } flex-col md:flex md:flex-row items-center gap-3 md:gap-4
                                absolute md:static top-full right-4 md:right-0 mt-2 md:mt-0
                                bg-[#F3F9FF] md:bg-transparent
                                p-4 md:p-0
                                shadow-xl md:shadow-none
                                rounded-xl md:rounded-none
                                w-fit
                                z-50 transition-all duration-300 ease-in-out`}>
              <Link to="/dashboard">
                <Button 
                  variant="ghost" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
                  font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 
                  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                  disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 
                  rounded-md bg-black text-white border-2 border-transparent hover:bg-blue-600 hover:text-white 
                  text-sm px-5 py-5 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-activity w-4 h-4 mr-3"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                  Dashboard
                </Button>
                </Link>
              <Link to="/coach-network">
                <Button 
                    variant="ghost"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
                    font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 
                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                    disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md 
                    bg-black text-white border-2 border-transparent hover:bg-blue-600 hover:text-white text-sm 
                    px-4 py-5 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user-plus w-4 h-4 mr-2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <line x1="19" y1="8" x2="19" y2="14"></line>
                      <line x1="22" y1="11" x2="16" y2="11"></line>
                    </svg>
                    Join Network
                  </Button>
              </Link>
              <Link to="/coach">
                <Button 
                  variant="ghost"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
                  font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
             disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
             h-11 rounded-md bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 
             text-lg px-3 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right w-4 h-4 mr-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                  Get Started
                </Button>

              </Link>
            </nav>
          
          </header>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="space-y-8">
                <div className="space-y-8">
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
                
                <div className="relative z-20 flex flex-wrap gap-3">
                  <Link to="/dashboard">
                    <Button size="sm" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium 
             ring-offset-background focus-visible:outline-none focus-visible:ring-2 
             focus-visible:ring-ring focus-visible:ring-offset-2 
             disabled:pointer-events-none disabled:opacity-50 
             [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
             h-11 rounded-md bg-gradient-to-r from-blue-600 to-teal-600 
             hover:from-blue-700 hover:to-teal-700 
             text-lg px-2 py-5 shadow-xl hover:shadow-2xl 
             transition-all duration-300 text-black hover:text-white">
                      <TrendingUp className="w-4 h-4 mr-0" />
                      Start Your Journey
                    </Button>
                  </Link>
                  <Link to="/motion-capture">
                    <Button size="sm" variant="outline" className="bg-black text-white border-2 border-transparent hover:bg-blue-600 hover:text-white text-sm px-2 py-5 transition-all duration-300">
                      <Camera className="w-4 h-4 mr-1" />
                      Try Motion Capture
                    </Button>
                  </Link>
                  <Link to="/social-feed">
                    <Button size="sm" variant="outline" className="bg-black text-white border-2 border-transparent hover:bg-blue-600 hover:text-white text-sm px-2 py-5 transition-all duration-300">
                      <Users className="w-4 h-4 mr-2" />
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
                    className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 ml-0"
                  />
                  {/* Floating Elements */}
                  <div className="absolute top-1 right-1 text-base font-bold bg-white-500 text-black px-4 py-2 rounded-lg shadow-md border border-None">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">Live Session</span>
                    </div>
                  </div>
                  <div className="absolute bottom-1 left-1 text-base font-bold bg-white-500 text-black px-3 py-2 rounded-lg shadow-md border border-None">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-green-500" />
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
      <div className="py-24 bg-gradient-to-br from-blue-100 via-white to-teal-100 backdrop-blur-sm">
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-#FAF6E9 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">Coach Dashboard</CardTitle>
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-#FAF6E9 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">Motion Capture</CardTitle>
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-#FAF6E9 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">3D Avatar Analysis</CardTitle>
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-#FAF6E9 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">Nutrition Store</CardTitle>
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-#FAF6E9 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">Smart Sensors</CardTitle>
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-#FAF6E9 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">Coach Network</CardTitle>
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
      <div className="py-24 bg-gradient-to-br from-blue-100 via-white to-teal-100 backdrop-blur-sm">
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
              Why Choose STAPL Pro?
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
      <div className="py-24 bg-gradient-to-br from-blue-100 via-white to-teal-100 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Top Coaches
            </h3>
            <p className="text-xl text-gray-600">
              See what industry leaders are saying about STAPL Pro
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
                  "STAPL Pro has revolutionized how I coach my athletes. The motion capture technology is incredible!"
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
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-6 hover:text-white">
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
