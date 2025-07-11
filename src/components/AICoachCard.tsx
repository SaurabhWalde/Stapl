
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Sparkles, TrendingUp, Clock } from 'lucide-react';

const AICoachCard = () => {
  const aiRecommendation = {
    type: "workout",
    title: "Perfect time for HIIT training!",
    description: "Your recovery score is high (82%) and your HRV indicates you're well-rested. A 25-minute HIIT session would optimize your training load.",
    confidence: 92,
    reasoning: [
      "HRV is 15% above your baseline",
      "Sleep quality was excellent (87%)",
      "Training load allows for high intensity"
    ],
    suggestedAction: "Start HIIT Workout",
    timeEstimate: "25 min"
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white mb-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
      
      <CardContent className="p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">AI Coach Recommendation</h3>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm opacity-90">Powered by your health data</span>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white border-0">
            {aiRecommendation.confidence}% confidence
          </Badge>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-xl mb-2">{aiRecommendation.title}</h4>
            <p className="opacity-90 leading-relaxed">{aiRecommendation.description}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-medium mb-2 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Analysis</span>
            </h5>
            <ul className="space-y-1 text-sm opacity-90">
              {aiRecommendation.reasoning.map((reason, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4 text-sm opacity-90">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{aiRecommendation.timeEstimate}</span>
              </div>
            </div>
            <Button 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-white/90 font-medium"
            >
              {aiRecommendation.suggestedAction}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AICoachCard;
