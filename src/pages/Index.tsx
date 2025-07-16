import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
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
      <section id="hero" className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Unlock Your Athletic Potential with AI-Powered Insights
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Transform your training with personalized analytics, motion capture, and expert coaching.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Motion Capture Analysis</h3>
            <p className="text-gray-600">
              Record and analyze your movements with AI-powered precision.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Training Plans</h3>
            <p className="text-gray-600">
              Receive customized workout plans based on your unique needs and goals.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Feedback</h3>
            <p className="text-gray-600">
              Get instant feedback on your form and technique during workouts.
            </p>
          </div>

          {/* Feature Card 4 - New Nutrition Store */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Nutrition Store</h3>
            <p className="text-gray-600">
              Get personalized supplement recommendations and nutrition plans.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Data-Driven Performance Insights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Analytics Visualization 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Over Time</h3>
              <p className="text-gray-600">Track your progress and identify areas for improvement.</p>
            </div>

            {/* Analytics Visualization 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Injury Risk Assessment</h3>
              <p className="text-gray-600">Identify potential injury risks and take proactive measures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FitTrack Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
