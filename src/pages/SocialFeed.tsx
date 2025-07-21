import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, MessageCircle, Share2, Trophy, Clock, Users, Plus, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    level: string;
  };
  content: string;
  type: 'workout' | 'achievement' | 'tip' | 'challenge';
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  media?: string;
  workoutData?: {
    exercise: string;
    reps: number;
    weight?: number;
    duration?: string;
  };
  achievement?: {
    title: string;
    description: string;
    badge: string;
  };
}

const SocialFeed = () => {
  const { toast } = useToast();
  const [newPost, setNewPost] = useState('');
  const [activeTab, setActiveTab] = useState('feed');

  const [posts] = useState<Post[]>([
    {
      id: '1',
      author: { name: 'Sarah Johnson', avatar: '', level: 'Pro Athlete' },
      content: 'Just crushed my squat PR! 225lbs for 5 reps. Form felt amazing today 🔥',
      type: 'workout',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
      workoutData: { exercise: 'Squat', reps: 5, weight: 225 }
    },
    {
      id: '2',
      author: { name: 'Mike Chen', avatar: '', level: 'Advanced' },
      content: 'Unlocked the "Century Club" achievement! 100 workouts completed this year.',
      type: 'achievement',
      timestamp: '4 hours ago',
      likes: 45,
      comments: 12,
      shares: 6,
      achievement: {
        title: 'Century Club',
        description: '100 workouts completed',
        badge: '🏆'
      }
    },
    {
      id: '3',
      author: { name: 'Lisa Park', avatar: '', level: 'Intermediate' },
      content: 'Pro tip: Always warm up with dynamic stretches before heavy lifting. Game changer for injury prevention!',
      type: 'tip',
      timestamp: '6 hours ago',
      likes: 18,
      comments: 5,
      shares: 9
    },
    {
      id: '4',
      author: { name: 'David Wilson', avatar: '', level: 'Expert' },
      content: 'Starting a 30-day plank challenge! Who wants to join? Let\'s build that core strength together 💪',
      type: 'challenge',
      timestamp: '8 hours ago',
      likes: 67,
      comments: 23,
      shares: 15
    }
  ]);

  const handleLike = (postId: string) => {
    toast({
      title: "Liked!",
      description: "You liked this post",
    });
  };

  const handleComment = (postId: string) => {
    toast({
      title: "Comment",
      description: "Comment feature coming soon!",
    });
  };

  const handleShare = (postId: string) => {
    toast({
      title: "Shared!",
      description: "Post shared to your timeline",
    });
  };

  const handleCreatePost = () => {
    if (newPost.trim()) {
      toast({
        title: "Post Created!",
        description: "Your post has been shared with the community",
      });
      setNewPost('');
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'workout': return 'bg-blue-500';
      case 'achievement': return 'bg-yellow-500';
      case 'tip': return 'bg-green-500';
      case 'challenge': return 'bg-purple-500';
      default: return 'bg-muted';
    }
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'workout': return <Clock className="h-4 w-4" />;
      case 'achievement': return <Trophy className="h-4 w-4" />;
      case 'tip': return <Heart className="h-4 w-4" />;
      case 'challenge': return <Users className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Social Feed</h1>
            <p className="text-muted-foreground">Connect with the fitness community</p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Create Post
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Share your fitness journey..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[100px]"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Photo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trophy className="h-4 w-4 mr-2" />
                      Achievement
                    </Button>
                  </div>
                  <Button onClick={handleCreatePost} disabled={!newPost.trim()}>
                    Post
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{post.author.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {post.author.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                        </div>
                      </div>
                      <Badge 
                        className={`${getPostTypeColor(post.type)} text-white`}
                      >
                        <span className="flex items-center gap-1">
                          {getPostTypeIcon(post.type)}
                          {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                        </span>
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">{post.content}</p>
                    
                    {/* Workout Data */}
                    {post.workoutData && (
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-foreground">{post.workoutData.exercise}</h4>
                              <p className="text-sm text-muted-foreground">
                                {post.workoutData.reps} reps 
                                {post.workoutData.weight && ` × ${post.workoutData.weight}lbs`}
                                {post.workoutData.duration && ` • ${post.workoutData.duration}`}
                              </p>
                            </div>
                            <Trophy className="h-6 w-6 text-yellow-500" />
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Achievement */}
                    {post.achievement && (
                      <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{post.achievement.badge}</div>
                            <div>
                              <h4 className="font-semibold text-foreground">{post.achievement.title}</h4>
                              <p className="text-sm text-muted-foreground">{post.achievement.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Interaction Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-6">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-2 text-muted-foreground hover:text-red-500"
                        >
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleComment(post.id)}
                          className="flex items-center gap-2 text-muted-foreground hover:text-blue-500"
                        >
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare(post.id)}
                          className="flex items-center gap-2 text-muted-foreground hover:text-green-500"
                        >
                          <Share2 className="h-4 w-4" />
                          {post.shares}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="challenges">
            <Card>
              <CardHeader>
                <CardTitle>Active Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Challenge features coming soon!</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Community Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Achievement gallery coming soon!</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="following">
            <Card>
              <CardHeader>
                <CardTitle>Following</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Following feed coming soon!</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SocialFeed;