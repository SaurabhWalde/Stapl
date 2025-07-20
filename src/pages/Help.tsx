import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Activity,
  ArrowLeft,
  Search,
  MessageCircle,
  BookOpen,
  Video,
  Mail,
  Phone,
  ExternalLink,
  HelpCircle,
  Settings,
  Camera,
  Users,
  Zap
} from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      questions: [
        {
          question: "How do I create my first workout plan?",
          answer: "Navigate to the Workout Library, browse through our curated collection, and select 'Add to Plan' on workouts that match your goals. You can also use our AI Coach to generate a personalized plan based on your fitness level and preferences."
        },
        {
          question: "How do I set up my fitness goals?",
          answer: "Go to Settings > Profile > Fitness Goals. You can set goals for weight loss, muscle gain, endurance improvement, or general fitness. Our AI will adjust your recommendations based on these goals."
        },
        {
          question: "What devices are compatible with SmartFit Pro?",
          answer: "SmartFit Pro works with most modern smartphones, tablets, and computers. For motion capture, you'll need a device with a camera. We also integrate with popular fitness trackers like Fitbit, Apple Watch, and Garmin."
        }
      ]
    },
    {
      title: "Motion Capture",
      icon: Camera,
      questions: [
        {
          question: "How accurate is the motion capture technology?",
          answer: "Our AI-powered motion capture uses advanced computer vision to achieve 95%+ accuracy in pose detection. For best results, ensure good lighting and position yourself 6-8 feet from your camera."
        },
        {
          question: "What should I wear for motion capture sessions?",
          answer: "Wear form-fitting clothes that contrast with your background. Avoid loose clothing that might obscure your body movements. Solid colors work better than patterns."
        },
        {
          question: "Can I use motion capture without an internet connection?",
          answer: "Basic motion capture works offline, but real-time AI feedback and form analysis require an internet connection for optimal performance."
        }
      ]
    },
    {
      title: "Coaching & Training",
      icon: Users,
      questions: [
        {
          question: "How do I find and connect with coaches?",
          answer: "Visit the Coach Network section to browse certified trainers in your area or online. You can filter by specialization, ratings, and availability. Premium members get priority access to top-rated coaches."
        },
        {
          question: "What's included in a coaching session?",
          answer: "Coaching sessions include personalized workout plans, real-time form feedback, progress tracking, nutrition guidance, and motivational support. Sessions can be conducted via video call or in-person."
        },
        {
          question: "How do I track my progress with a coach?",
          answer: "Your coach has access to your progress dashboard where they can monitor your workouts, metrics, and improvements. You'll receive weekly progress reports and personalized adjustments to your training plan."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Settings,
      questions: [
        {
          question: "The app is running slowly. What can I do?",
          answer: "Try closing other apps, restarting the application, or clearing your browser cache. For mobile apps, ensure you have the latest version installed and sufficient storage space."
        },
        {
          question: "Motion capture isn't detecting my movements properly",
          answer: "Check your lighting (avoid backlighting), ensure your entire body is visible in the frame, and make sure there's good contrast between you and the background. Try different camera angles if needed."
        },
        {
          question: "How do I sync my fitness tracker data?",
          answer: "Go to Settings > Connected Devices and follow the setup wizard for your specific device. Most fitness trackers require you to authorize SmartFit Pro in their companion app first."
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      icon: Video,
      action: "Browse Videos",
      href: "#"
    },
    {
      title: "Live Chat Support",
      description: "Get instant help from our team",
      icon: MessageCircle,
      action: "Start Chat",
      href: "#"
    },
    {
      title: "Contact Support",
      description: "Email us your questions",
      icon: Mail,
      action: "Send Email",
      href: "mailto:support@smartfitpro.com"
    },
    {
      title: "Phone Support",
      description: "Call us during business hours",
      icon: Phone,
      action: "Call Now",
      href: "tel:+1-800-SMARTFIT"
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        searchQuery === "" ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/settings">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Help Center</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">How can we help you?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {quickActions.map((action, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <action.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription className="text-sm">{action.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <a href={action.href} className="inline-flex items-center space-x-1 text-primary hover:underline">
                  <span>{action.action}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h3>
            <p className="text-muted-foreground">Find quick answers to the most common questions</p>
          </div>

          {filteredFAQs.length === 0 && searchQuery && (
            <Card>
              <CardContent className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">No results found</h4>
                <p className="text-muted-foreground mb-4">
                  We couldn't find any answers matching "{searchQuery}"
                </p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </CardContent>
            </Card>
          )}

          {filteredFAQs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span>{category.title}</span>
                  <Badge variant="outline">{category.questions.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card className="mt-12">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Still need help?</CardTitle>
            <CardDescription>Our support team is here to assist you</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Email Support</h4>
                <p className="text-sm text-muted-foreground">support@smartfitpro.com</p>
                <p className="text-xs text-muted-foreground">Usually responds within 24 hours</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Phone Support</h4>
                <p className="text-sm text-muted-foreground">1-800-SMARTFIT</p>
                <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button>
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Live Chat
              </Button>
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;