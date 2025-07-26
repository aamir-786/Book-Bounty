"use client";

import { useState } from 'react';
import { User, BookOpen, Award, Settings, TrendingUp, Calendar, Star, Trophy, Target, Book, Clock, BarChart3, Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Books Read', value: '24', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Reading Streak', value: '12 days', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Rewards Points', value: '1,847', icon: Award, color: 'text-purple-600' },
    { label: 'Reading Goal', value: '80%', icon: Target, color: 'text-orange-600' },
  ];

  const recentBooks = [
    {
      title: "The Seven Moons of Maali Almeida",
      author: "Shehan Karunatilaka",
      cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      status: "Currently Reading",
      progress: 65,
      rating: 4.5,
    },
    {
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      cover: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=400",
      status: "Completed",
      progress: 100,
      rating: 5,
    },
    {
      title: "The Atlas Six",
      author: "Olivie Blake",
      cover: "https://images.pexels.com/photos/1370300/pexels-photo-1370300.jpeg?auto=compress&cs=tinysrgb&w=400",
      status: "Wish List",
      progress: 0,
      rating: 0,
    },
  ];

  const achievements = [
    { name: "First Chapter", description: "Read your first book", icon: Book, earned: true },
    { name: "Speed Reader", description: "Read 5 books in a month", icon: Clock, earned: true },
    { name: "Diverse Reader", description: "Read 10 different genres", icon: Star, earned: false },
    { name: "Book Critic", description: "Write 25 reviews", icon: Trophy, earned: false },
  ];

  const readingChallenges = [
    { name: "Annual Reading Goal", target: 30, current: 24, progress: 80 },
    { name: "Genre Explorer", target: 12, current: 8, progress: 67 },
    { name: "Author Diversity", target: 20, current: 15, progress: 75 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
          <p className="text-gray-600">Track your reading progress and discover your next favorite book.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="library">My Library</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5" />
                      <span>Recent Books</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBooks.map((book, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50">
                          <img src={book.cover} alt={book.title} className="w-16 h-20 object-cover rounded" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{book.title}</h3>
                            <p className="text-sm text-gray-600">{book.author}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant={book.status === 'Completed' ? 'default' : 'secondary'}>
                                {book.status}
                              </Badge>
                              {book.rating > 0 && (
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="text-sm text-gray-600">{book.rating}</span>
                                </div>
                              )}
                            </div>
                            {book.progress > 0 && (
                              <Progress value={book.progress} className="mt-2" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5" />
                      <span>Reading Challenges</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {readingChallenges.map((challenge, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-gray-900">{challenge.name}</h4>
                            <span className="text-sm text-gray-600">
                              {challenge.current}/{challenge.target}
                            </span>
                          </div>
                          <Progress value={challenge.progress} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Reading Stats</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">This Month</span>
                        <span className="font-semibold">4 books</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Average Rating</span>
                        <span className="font-semibold">4.2/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Favorite Genre</span>
                        <span className="font-semibold">Fantasy</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="library">
            <Card>
              <CardHeader>
                <CardTitle>My Library</CardTitle>
                <CardDescription>Manage your book collection and reading lists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Library</h3>
                  <p className="text-gray-600 mb-4">Organize your books, create reading lists, and track your progress.</p>
                  <Button>Add Books</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => {
                      const AchievementIcon = achievement.icon;
                      return (
                        <div key={index} className={`p-4 rounded-lg border ${achievement.earned ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-200'}`}>
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${achievement.earned ? 'bg-emerald-100' : 'bg-gray-100'}`}>
                              <AchievementIcon className={`h-5 w-5 ${achievement.earned ? 'text-emerald-600' : 'text-gray-400'}`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                              <p className="text-sm text-gray-600">{achievement.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rewards Points</CardTitle>
                  <CardDescription>Earn points by reading and redeem for rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">1,847</div>
                    <p className="text-gray-600 mb-4">Available Points</p>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Redeem Rewards
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                      <User className="h-12 w-12 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
                      <p className="text-gray-600">Member since January 2024</p>
                      <Badge className="mt-2 bg-emerald-100 text-emerald-700">Premium Member</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Reading Preferences</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Favorite Genres</span>
                          <span className="text-gray-900">Fantasy, Mystery</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Reading Format</span>
                          <span className="text-gray-900">Digital & Physical</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Book Length</span>
                          <span className="text-gray-900">Medium (200-400 pages)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Account Settings</h4>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Settings className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Settings className="h-4 w-4 mr-2" />
                          Notification Settings
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Settings className="h-4 w-4 mr-2" />
                          Privacy Settings
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}