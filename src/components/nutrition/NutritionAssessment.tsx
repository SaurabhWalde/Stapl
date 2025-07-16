
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Brain, CheckCircle, ArrowRight } from 'lucide-react';

interface AssessmentData {
  personalInfo: {
    age: string;
    gender: string;
    height: string;
    weight: string;
    activityLevel: string;
  };
  goals: {
    primaryGoal: string;
    targetWeight: string;
    timeline: string;
  };
  dietary: {
    restrictions: string[];
    allergies: string;
    supplements: string;
  };
  lifestyle: {
    workoutFrequency: string;
    workoutType: string;
    sleepHours: string;
    stressLevel: string;
  };
}

export const NutritionAssessment = () => {
  const [step, setStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    personalInfo: { age: '', gender: '', height: '', weight: '', activityLevel: '' },
    goals: { primaryGoal: '', targetWeight: '', timeline: '' },
    dietary: { restrictions: [], allergies: '', supplements: '' },
    lifestyle: { workoutFrequency: '', workoutType: '', sleepHours: '', stressLevel: '' }
  });
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      generateRecommendations();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const generateRecommendations = async () => {
    setLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockRecommendations = `
Based on your assessment, here are your personalized nutrition recommendations:

🎯 **Primary Focus**: ${assessmentData.goals.primaryGoal}
- Daily Calorie Target: 2,200-2,400 calories
- Protein: 140-160g daily (1.8g per kg body weight)
- Carbohydrates: 275-330g daily (timing around workouts)
- Fats: 75-85g daily (emphasis on omega-3s)

💊 **Recommended Supplements**:
1. **Whey Protein Isolate** - 25g post-workout
2. **Creatine Monohydrate** - 5g daily
3. **Omega-3 Fish Oil** - 2g daily
4. **Vitamin D3** - 2000 IU daily
5. **Magnesium Glycinate** - 400mg before bed

🍽️ **Meal Timing**:
- Pre-workout: Banana + oats (30-60 min before)
- Post-workout: Protein shake + simple carbs (within 30 min)
- 5-6 smaller meals throughout the day

⚠️ **Special Considerations**:
${assessmentData.dietary.allergies ? `- Avoid: ${assessmentData.dietary.allergies}` : ''}
${assessmentData.dietary.restrictions.length > 0 ? `- Dietary restrictions accommodated: ${assessmentData.dietary.restrictions.join(', ')}` : ''}

📈 **Progress Tracking**:
- Weekly weigh-ins at the same time
- Body composition scans monthly
- Adjust calories based on progress every 2 weeks
      `;
      
      setRecommendations(mockRecommendations);
      setLoading(false);
    }, 3000);
  };

  const updatePersonalInfo = (field: string, value: string) => {
    setAssessmentData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateGoals = (field: string, value: string) => {
    setAssessmentData(prev => ({
      ...prev,
      goals: { ...prev.goals, [field]: value }
    }));
  };

  const updateDietary = (field: string, value: string | string[]) => {
    setAssessmentData(prev => ({
      ...prev,
      dietary: { ...prev.dietary, [field]: value }
    }));
  };

  const updateLifestyle = (field: string, value: string) => {
    setAssessmentData(prev => ({
      ...prev,
      lifestyle: { ...prev.lifestyle, [field]: value }
    }));
  };

  if (recommendations) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Your Personalized Nutrition Plan</CardTitle>
          <CardDescription>Based on your assessment, here's what our AI dietitian recommends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <pre className="whitespace-pre-wrap text-sm">{recommendations}</pre>
          </div>
          <div className="flex space-x-4">
            <Button className="flex-1">
              Add Recommended Products to Cart
            </Button>
            <Button variant="outline" onClick={() => window.print()}>
              Download Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-semibold mb-2">AI Analyzing Your Data...</h3>
          <p className="text-gray-600 mb-6">Our AI dietitian is creating your personalized nutrition plan</p>
          <Progress value={75} className="w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Nutrition Assessment - Step {step} of {totalSteps}</CardTitle>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age" 
                  type="number" 
                  value={assessmentData.personalInfo.age}
                  onChange={(e) => updatePersonalInfo('age', e.target.value)}
                  placeholder="25" 
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => updatePersonalInfo('gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input 
                  id="height" 
                  type="number" 
                  value={assessmentData.personalInfo.height}
                  onChange={(e) => updatePersonalInfo('height', e.target.value)}
                  placeholder="175" 
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input 
                  id="weight" 
                  type="number" 
                  value={assessmentData.personalInfo.weight}
                  onChange={(e) => updatePersonalInfo('weight', e.target.value)}
                  placeholder="70" 
                />
              </div>
            </div>
            <div>
              <Label>Activity Level</Label>
              <Select onValueChange={(value) => updatePersonalInfo('activityLevel', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                  <SelectItem value="lightly-active">Lightly Active (light exercise 1-3 days/week)</SelectItem>
                  <SelectItem value="moderately-active">Moderately Active (moderate exercise 3-5 days/week)</SelectItem>
                  <SelectItem value="very-active">Very Active (hard exercise 6-7 days/week)</SelectItem>
                  <SelectItem value="extremely-active">Extremely Active (very hard exercise, physical job)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 2: Goals */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Fitness Goals</h3>
            <div>
              <Label>Primary Goal</Label>
              <Select onValueChange={(value) => updateGoals('primaryGoal', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your primary goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                  <SelectItem value="fat-loss">Fat Loss</SelectItem>
                  <SelectItem value="endurance">Improve Endurance</SelectItem>
                  <SelectItem value="strength">Increase Strength</SelectItem>
                  <SelectItem value="maintenance">Maintain Current Fitness</SelectItem>
                  <SelectItem value="general-health">General Health</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="target-weight">Target Weight (kg)</Label>
              <Input 
                id="target-weight" 
                type="number" 
                value={assessmentData.goals.targetWeight}
                onChange={(e) => updateGoals('targetWeight', e.target.value)}
                placeholder="75" 
              />
            </div>
            <div>
              <Label>Timeline</Label>
              <Select onValueChange={(value) => updateGoals('timeline', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-month">1 Month</SelectItem>
                  <SelectItem value="3-months">3 Months</SelectItem>
                  <SelectItem value="6-months">6 Months</SelectItem>
                  <SelectItem value="1-year">1 Year</SelectItem>
                  <SelectItem value="long-term">Long Term (1+ Years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 3: Dietary Information */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dietary Information</h3>
            <div>
              <Label>Dietary Restrictions (Select all that apply)</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {['Vegetarian', 'Vegan', 'Keto', 'Paleo', 'Gluten-Free', 'Dairy-Free'].map((restriction) => (
                  <div key={restriction} className="flex items-center space-x-2">
                    <Checkbox 
                      id={restriction}
                      checked={assessmentData.dietary.restrictions.includes(restriction)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateDietary('restrictions', [...assessmentData.dietary.restrictions, restriction]);
                        } else {
                          updateDietary('restrictions', assessmentData.dietary.restrictions.filter(r => r !== restriction));
                        }
                      }}
                    />
                    <Label htmlFor={restriction}>{restriction}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="allergies">Food Allergies</Label>
              <Input 
                id="allergies" 
                value={assessmentData.dietary.allergies}
                onChange={(e) => updateDietary('allergies', e.target.value)}
                placeholder="e.g., nuts, shellfish, eggs" 
              />
            </div>
            <div>
              <Label htmlFor="current-supplements">Current Supplements</Label>
              <Textarea 
                id="current-supplements" 
                value={assessmentData.dietary.supplements}
                onChange={(e) => updateDietary('supplements', e.target.value)}
                placeholder="List any supplements you're currently taking" 
              />
            </div>
          </div>
        )}

        {/* Step 4: Lifestyle */}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Lifestyle & Training</h3>
            <div>
              <Label>Workout Frequency</Label>
              <Select onValueChange={(value) => updateLifestyle('workoutFrequency', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How often do you work out?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 times per week</SelectItem>
                  <SelectItem value="3-4">3-4 times per week</SelectItem>
                  <SelectItem value="5-6">5-6 times per week</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="2x-daily">Twice daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Primary Workout Type</Label>
              <Select onValueChange={(value) => updateLifestyle('workoutType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select workout type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight-training">Weight Training</SelectItem>
                  <SelectItem value="cardio">Cardio</SelectItem>
                  <SelectItem value="mixed">Mixed Training</SelectItem>
                  <SelectItem value="sports">Sports Specific</SelectItem>
                  <SelectItem value="bodyweight">Bodyweight</SelectItem>
                  <SelectItem value="yoga">Yoga/Pilates</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="sleep">Average Sleep Hours</Label>
              <Input 
                id="sleep" 
                type="number" 
                value={assessmentData.lifestyle.sleepHours}
                onChange={(e) => updateLifestyle('sleepHours', e.target.value)}
                placeholder="7" 
                min="4" 
                max="12" 
              />
            </div>
            <div>
              <Label>Stress Level</Label>
              <Select onValueChange={(value) => updateLifestyle('stressLevel', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How would you rate your stress level?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="very-high">Very High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <Button 
            variant="outline" 
            onClick={handlePrevious} 
            disabled={step === 1}
          >
            Previous
          </Button>
          <Button onClick={handleNext}>
            {step === totalSteps ? 'Get Recommendations' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
