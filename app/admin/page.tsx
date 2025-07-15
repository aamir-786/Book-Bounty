"use client";

import { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Settings,
  Search,
  Filter,
  MoreHorizontal,
  Shield,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Total Users', value: '12,847', change: '+12.3%', icon: Users, color: 'text-blue-600' },
    { label: 'Active Subscriptions', value: '8,234', change: '+8.7%', icon: DollarSign, color: 'text-green-600' },
    { label: 'Books in Library', value: '45,671', change: '+5.2%', icon: BookOpen, color: 'text-purple-600' },
    { label: 'Revenue (Monthly)', value: '$127,890', change: '+15.8%', icon: TrendingUp, color: 'text-orange-600' },
  ];

  const users = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', plan: 'Premium', status: 'Active', joined: '2024-01-15' },
    { id: 2, name: 'Michael Chen', email: 'michael@example.com', plan: 'Basic', status: 'Active', joined: '2024-02-20' },
    { id: 3, name: 'Emily Rodriguez', email: 'emily@example.com', plan: 'Elite', status: 'Suspended', joined: '2024-01-08' },
    { id: 4, name: 'David Park', email: 'david@example.com', plan: 'Premium', status: 'Active', joined: '2024-03-12' },
    { id: 5, name: 'Jessica Wu', email: 'jessica@example.com', plan: 'Basic', status: 'Inactive', joined: '2024-02-28' },
  ];

  const pendingContent = [
    { id: 1, title: 'The Silent Patient', author: 'Alex Michaelides', type: 'Book', status: 'Pending', submitted: '2024-01-20' },
    { id: 2, title: 'Atomic Habits', author: 'James Clear', type: 'Book', status: 'Pending', submitted: '2024-01-22' },
    { id: 3, title: 'The Psychology of Money', author: 'Morgan Housel', type: 'Book', status: 'Approved', submitted: '2024-01-18' },
    { id: 4, title: 'Becoming', author: 'Michelle Obama', type: 'Book', status: 'Rejected', submitted: '2024-01-25' },
  ];

  const recentPayments = [
    { id: 1, user: 'Sarah Johnson', amount: '$19.99', plan: 'Premium', date: '2024-01-20', status: 'Completed' },
    { id: 2, user: 'Michael Chen', amount: '$9.99', plan: 'Basic', date: '2024-01-20', status: 'Completed' },
    { id: 3, user: 'Emily Rodriguez', amount: '$39.99', plan: 'Elite', date: '2024-01-19', status: 'Completed' },
    { id: 4, user: 'David Park', amount: '$19.99', plan: 'Premium', date: '2024-01-19', status: 'Failed' },
    { id: 5, user: 'Jessica Wu', amount: '$9.99', plan: 'Basic', date: '2024-01-18', status: 'Completed' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Completed':
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Suspended':
      case 'Failed':
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Inactive':
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Completed':
      case 'Approved':
        return <CheckCircle className="h-4 w-4" />;
      case 'Suspended':
      case 'Failed':
      case 'Rejected':
        return <XCircle className="h-4 w-4" />;
      case 'Inactive':
      case 'Pending':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage users, content, and platform analytics</p>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-600">Admin Access</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest platform activities and system updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">New user registration</p>
                        <p className="text-xs text-gray-500">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Content approval request</p>
                        <p className="text-xs text-gray-500">5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Payment processing issue</p>
                        <p className="text-xs text-gray-500">12 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Platform performance and system metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Server Response</span>
                        <span className="text-sm text-gray-600">98.5%</span>
                      </div>
                      <Progress value={98.5} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Database Performance</span>
                        <span className="text-sm text-gray-600">95.2%</span>
                      </div>
                      <Progress value={95.2} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">API Uptime</span>
                        <span className="text-sm text-gray-600">99.8%</span>
                      </div>
                      <Progress value={99.8} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage user accounts and subscriptions</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="suspended">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">User</th>
                        <th className="text-left py-3 px-4">Plan</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Joined</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">{user.plan}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(user.status)}>
                              {getStatusIcon(user.status)}
                              <span className="ml-1">{user.status}</span>
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{user.joined}</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Review and approve content submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Content</th>
                        <th className="text-left py-3 px-4">Type</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Submitted</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingContent.map((content) => (
                        <tr key={content.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium">{content.title}</div>
                              <div className="text-sm text-gray-500">{content.author}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">{content.type}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(content.status)}>
                              {getStatusIcon(content.status)}
                              <span className="ml-1">{content.status}</span>
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{content.submitted}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="text-green-600">
                                Approve
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600">
                                Reject
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Management</CardTitle>
                <CardDescription>Monitor transactions and payment issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">User</th>
                        <th className="text-left py-3 px-4">Amount</th>
                        <th className="text-left py-3 px-4">Plan</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentPayments.map((payment) => (
                        <tr key={payment.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{payment.user}</td>
                          <td className="py-3 px-4 font-medium">{payment.amount}</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">{payment.plan}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(payment.status)}>
                              {getStatusIcon(payment.status)}
                              <span className="ml-1">{payment.status}</span>
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{payment.date}</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                  <CardDescription>Monthly user acquisition and retention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                      <p>Analytics chart would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                  <CardDescription>Monthly revenue and subscription trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <DollarSign className="h-12 w-12 mx-auto mb-4" />
                      <p>Revenue chart would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}