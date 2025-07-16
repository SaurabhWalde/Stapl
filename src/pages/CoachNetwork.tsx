
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Camera,
  Video,
  FileText,
  Plus,
  Search,
  Filter,
  MapPin,
  Clock,
  Star
} from 'lucide-react';

const CoachNetwork = () => {
  const [activeTab, setActiveTab] = useState('feed');

  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      role: "Performance Coach",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      time: "2h ago",
      content: "Just completed an amazing transformation journey with my client! 6 months of dedicated training resulted in a 40lb weight loss and incredible strength gains. The mental transformation is just as powerful as the physical one. 💪 #TransformationTuesday #CoachLife",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      likes: 47,
      comments: 12,
      shares: 8,
      liked: false
    },
    {
      id: 2,
      author: "Mike Chen",
      role: "Strength & Conditioning Coach",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      time: "4h ago",
      content: "Excited to announce I'll be speaking at the National Fitness Conference next month! Topic: 'Technology Integration in Modern Coaching'. Looking forward to connecting with fellow coaches and sharing insights on how AI and wearables are revolutionizing our field.",
      likes: 89,
      comments: 23,
      shares: 15,
      liked: true
    },
    {
      id: 3,
      author: "Emma Rodriguez",
      role: "Nutrition Coach",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      time: "6h ago",
      content: "New research shows the importance of meal timing for athletic performance. Just published my latest article on the topic. Link in comments! What strategies do you use with your athletes?",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=300&fit=crop",
      likes: 34,
      comments: 18,
      shares: 12,
      liked: false
    }
  ];

  const connections = [
    {
      name: "Alex Thompson",
      role: "Olympic Weightlifting Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      mutualConnections: 12,
      connected: false
    },
    {
      name: "Lisa Wang",
      role: "Yoga & Mindfulness Coach",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      mutualConnections: 8,
      connected: true
    },
    {
      name: "James Wilson",
      role: "Sports Psychology Coach",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      mutualConnections: 15,
      connected: false
    }
  ];

  const jobOpportunities = [
    {
      title: "Senior Performance Coach",
      company: "Elite Athletics Center",
      location: "New York, NY",
      type: "Full-time",
      salary: "$75,000 - $95,000",
      posted: "2 days ago",
      applicants: 23,
      featured: true
    },
    {
      title: "Remote Nutrition Consultant",
      company: "FitLife Digital",
      location: "Remote",
      type: "Contract",
      salary: "$60/hour",
      posted: "1 week ago",
      applicants: 45,
      featured: false
    },
    {
      title: "Youth Development Coach",
      company: "Champions Academy",
      location: "Los Angeles, CA",
      type: "Part-time",
      salary: "$40,000 - $55,000",
      posted: "3 days ago",
      applicants: 18,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">CoachConnect</h1>
              <div className="hidden md:flex space-x-6">
                <Button 
                  variant={activeTab === 'feed' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('feed')}
                  className="flex items-center space-x-2"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Feed</span>
                </Button>
                <Button 
                  variant={activeTab === 'network' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('network')}
                  className="flex items-center space-x-2"
                >
                  <Users className="w-4 h-4" />
                  <span>Network</span>
                </Button>
                <Button 
                  variant={activeTab === 'jobs' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('jobs')}
                  className="flex items-center space-x-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Opportunities</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search coaches, posts, jobs..." 
                  className="pl-10 w-64"
                />
              </div>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Feed Tab */}
        {activeTab === 'feed' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar - Profile Card */}
            <div className="lg:col-span-1">
              <Card className="mb-4 overflow-hidden">
                <div className="h-20 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                <CardContent className="pt-0">
                  <div className="flex flex-col items-center -mt-10">
                    <Avatar className="w-20 h-20 border-4 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold mt-2">Mike Chen</h3>
                    <p className="text-sm text-gray-600">Performance Coach</p>
                    <div className="flex space-x-4 mt-3 text-sm">
                      <div className="text-center">
                        <div className="font-semibold">1,245</div>
                        <div className="text-gray-500">Connections</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">89</div>
                        <div className="text-gray-500">Posts</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Award className="w-4 h-4 mr-2" />
                    Share Achievement
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Find Clients
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Post Job
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Create Post */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex space-x-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Input placeholder="Share your coaching insights..." className="mb-3" />
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          <Button variant="ghost" size="sm">
                            <Camera className="w-4 h-4 mr-2" />
                            Photo
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Video className="w-4 h-4 mr-2" />
                            Video
                          </Button>
                          <Button variant="ghost" size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            Article
                          </Button>
                        </div>
                        <Button>Post</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Posts */}
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex space-x-3">
                      <Avatar>
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">{post.author}</h4>
                            <p className="text-sm text-gray-600">{post.role}</p>
                            <p className="text-xs text-gray-500">{post.time}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <p className="mt-3 text-gray-800 leading-relaxed">{post.content}</p>
                        
                        {post.image && (
                          <div className="mt-3 rounded-lg overflow-hidden">
                            <img 
                              src={post.image} 
                              alt="Post content" 
                              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between mt-4 pt-3 border-t">
                          <div className="flex space-x-6">
                            <Button variant="ghost" size="sm" className={post.liked ? 'text-red-500' : ''}>
                              <Heart className={`w-4 h-4 mr-1 ${post.liked ? 'fill-current' : ''}`} />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4 mr-1" />
                              {post.shares}
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* Trending Topics */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Trending in Coaching</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Badge variant="secondary">#MotivationMonday</Badge>
                    <p className="text-xs text-gray-600">2,341 posts</p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">#TransformationTuesday</Badge>
                    <p className="text-xs text-gray-600">1,876 posts</p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">#WisdomWednesday</Badge>
                    <p className="text-xs text-gray-600">1,234 posts</p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Connections */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Recent Connections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {connections.slice(0, 3).map((connection, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={connection.avatar} />
                        <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{connection.name}</p>
                        <p className="text-xs text-gray-600">{connection.role}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View All
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Network Tab */}
        {activeTab === 'network' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Network</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Invite
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {connections.map((connection, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={connection.avatar} />
                          <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold">{connection.name}</h4>
                          <p className="text-sm text-gray-600">{connection.role}</p>
                          <p className="text-xs text-gray-500">{connection.mutualConnections} mutual connections</p>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button 
                          size="sm" 
                          variant={connection.connected ? "outline" : "default"}
                          className="flex-1"
                        >
                          {connection.connected ? "Connected" : "Connect"}
                        </Button>
                        <Button size="sm" variant="outline">
                          Message
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Network Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Connections</span>
                    <span className="font-semibold">1,245</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending Invitations</span>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Profile Views</span>
                    <span className="font-semibold">89 this week</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Jobs/Opportunities Tab */}
        {activeTab === 'jobs' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Opportunities</h2>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Post Opportunity
                </Button>
              </div>

              <div className="space-y-4">
                {jobOpportunities.map((job, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-shadow ${job.featured ? 'border-blue-200 bg-blue-50' : ''}`}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-lg">{job.title}</h4>
                            {job.featured && <Badge variant="default">Featured</Badge>}
                          </div>
                          <p className="text-gray-700 font-medium">{job.company}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="font-medium text-green-600">{job.salary}</div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <p className="text-xs text-gray-500">Posted {job.posted} • {job.applicants} applicants</p>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                              <Button size="sm">Apply Now</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle className="text-lg">Job Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Get notified about new opportunities that match your profile.</p>
                  <Button className="w-full">Set Up Alerts</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Applied</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">In Review</span>
                    <span className="font-semibold">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Interviews</span>
                    <span className="font-semibold">2</span>
                  </div>
                  <Button variant="outline" className="w-full mt-3">View All</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoachNetwork;
