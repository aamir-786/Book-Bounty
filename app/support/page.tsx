"use client";

import { useState } from 'react';
import { MessageCircle, HelpCircle, Mail, Phone, Search, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
  });

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      action: "Start Chat",
      available: true,
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      action: "Send Email",
      available: true,
    },
    {
      title: "Phone Support",
      description: "Call our support line",
      icon: Phone,
      action: "Call Now",
      available: false,
      note: "Premium members only",
    },
  ];

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple. Click the 'Sign Up' button, enter your email and password, and verify your email address. You can then start exploring our book recommendations immediately.",
        },
        {
          question: "What are the membership benefits?",
          answer: "Our membership tiers offer different levels of access to book recommendations, exclusive content, community features, and rewards. Premium members get advanced AI recommendations and early access to new books.",
        },
        {
          question: "How do book recommendations work?",
          answer: "Our AI analyzes your reading history, preferences, and behavior to suggest books you'll love. The more you use BookBounty, the better our recommendations become.",
        },
      ],
    },
    {
      category: "Account & Billing",
      questions: [
        {
          question: "How do I change my subscription?",
          answer: "You can upgrade or downgrade your subscription at any time from your account settings. Changes take effect immediately for upgrades or at the next billing cycle for downgrades.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
        },
        {
          question: "How do I cancel my subscription?",
          answer: "You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period.",
        },
      ],
    },
    {
      category: "Reading & Rewards",
      questions: [
        {
          question: "How do I earn rewards points?",
          answer: "You earn points by reading books, writing reviews, participating in reading challenges, and referring friends. Points can be redeemed for books, merchandise, and exclusive experiences.",
        },
        {
          question: "Can I track my reading progress?",
          answer: "Yes! Our platform tracks your reading progress, statistics, and achievements. You can view detailed analytics in your dashboard.",
        },
        {
          question: "How do reading challenges work?",
          answer: "We offer monthly and yearly reading challenges with different themes and goals. Completing challenges earns you badges and rewards points.",
        },
      ],
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', supportForm);
  };

  const handleInputChange = (field: string, value: string) => {
    setSupportForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to your questions or get in touch with our support team.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <option.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {option.available ? (
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    {option.action}
                  </Button>
                ) : (
                  <div>
                    <Button disabled className="w-full mb-2">
                      {option.action}
                    </Button>
                    <Badge variant="secondary" className="text-xs">
                      {option.note}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.questions.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 100 + faqIndex;
                        return (
                          <div key={faqIndex} className="border-b last:border-b-0 pb-3 last:pb-0">
                            <button
                              onClick={() => setExpandedFaq(expandedFaq === globalIndex ? null : globalIndex)}
                              className="flex justify-between items-center w-full text-left py-2 hover:text-emerald-600 transition-colors"
                            >
                              <span className="font-medium">{faq.question}</span>
                              {expandedFaq === globalIndex ? (
                                <ChevronUp className="h-5 w-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                              )}
                            </button>
                            {expandedFaq === globalIndex && (
                              <div className="mt-2 text-gray-600 text-sm">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  We typically respond within 24 hours during business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        value={supportForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={supportForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <Select value={supportForm.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account & Billing</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="recommendations">Book Recommendations</SelectItem>
                        <SelectItem value="rewards">Rewards & Points</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      value={supportForm.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Brief description of your issue"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      value={supportForm.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Describe your issue or question in detail..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}