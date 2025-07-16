import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, Zap, Target, Activity } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-8 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-gray-900">FitTrack Pro</div>
              <div className="hidden md:flex space-x-6">
                <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors">Analytics</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" size="sm">
                <Link to="/motion-capture">Motion Capture</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/avatar-analysis">3D Avatar</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/nutrition-store">Nutrition Store</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/coach">Coach Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Unlock Your <span className="text-blue-600">Athletic Potential</span> with AI-Powered Insights
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your training with personalized analytics, motion capture, and expert coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Target className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" 
                  alt="Athlete training with technology"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Activity className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-r from-gray-50 to-blue-50/30 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cutting-Edge Features</h2>
            <p className="text-gray-600 text-lg">Experience the future of sports technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="group bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65" 
                  alt="Motion capture technology"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Motion Capture Analysis</h3>
              <p className="text-gray-600">
                Record and analyze your movements with AI-powered precision.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" 
                  alt="Personalized training"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Personalized Training Plans</h3>
              <p className="text-gray-600">
                Receive customized workout plans based on your unique needs and goals.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f" 
                  alt="Real-time feedback"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Real-time Feedback</h3>
              <p className="text-gray-600">
                Get instant feedback on your form and technique during workouts.
              </p>
            </div>

            {/* Feature Card 4 - New Nutrition Store */}
            <div className="group bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" 
                  alt="AI Nutrition"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">AI Nutrition Store</h3>
              <p className="text-gray-600">
                Get personalized supplement recommendations and nutrition plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Data-Driven Performance Insights
            </h2>
            <p className="text-gray-600 text-lg">Turn your data into competitive advantage</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Analytics Visualization 1 */}
            <div className="group bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                  alt="Performance analytics"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent rounded-lg"></div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Performance Over Time</h3>
              <p className="text-gray-600 leading-relaxed">Track your progress and identify areas for improvement with detailed analytics and insights.</p>
            </div>

            {/* Analytics Visualization 2 */}
            <div className="group bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" 
                  alt="Injury prevention"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent rounded-lg"></div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Injury Risk Assessment</h3>
              <p className="text-gray-600 leading-relaxed">Identify potential injury risks and take proactive measures to stay healthy and perform at your best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Training?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of athletes already using FitTrack Pro</p>
          <Button size="lg" variant="secondary" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Start Your Journey Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center px-4">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">FitTrack Pro</h3>
            <p className="text-gray-400">Empowering athletes with cutting-edge technology</p>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FitTrack Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
