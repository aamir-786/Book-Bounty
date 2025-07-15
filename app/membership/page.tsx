"use client";

import { useState } from 'react';
import { Check, X, Crown, Star, Book, Users, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Membership() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for casual readers",
      price: { monthly: 9.99, annual: 99.99 },
      icon: Book,
      popular: false,
      features: [
        "Basic book recommendations",
        "Access to book reviews",
        "Monthly reading challenges",
        "Email support",
        "Basic profile customization",
      ],
      limitations: [
        "Advanced AI recommendations",
        "Exclusive book access",
        "Community features",
        "Rewards program",
      ],
    },
    {
      name: "Premium",
      description: "For serious book enthusiasts",
      price: { monthly: 19.99, annual: 199.99 },
      icon: Star,
      popular: true,
      features: [
        "Advanced AI recommendations",
        "Exclusive book access",
        "Community book clubs",
        "Priority customer support",
        "Advanced profile features",
        "Monthly author interviews",
        "Unlimited book tracking",
      ],
      limitations: [
        "Personal book concierge",
        "Advanced analytics",
      ],
    },
    {
      name: "Elite",
      description: "Ultimate reading experience",
      price: { monthly: 39.99, annual: 399.99 },
      icon: Crown,
      popular: false,
      features: [
        "All Premium features",
        "Personal book concierge",
        "Advanced reading analytics",
        "Exclusive author events",
        "Priority book access",
        "Custom reading plans",
        "1-on-1 reading consultations",
        "Unlimited everything",
      ],
      limitations: [],
    },
  ];

  const comparisonFeatures = [
    { name: "Book Recommendations", basic: "Basic", premium: "Advanced AI", elite: "AI + Personal" },
    { name: "Book Access", basic: "Standard", premium: "Early Access", elite: "Exclusive + Early" },
    { name: "Community Features", basic: "✗", premium: "✓", elite: "✓ + Events" },
    { name: "Customer Support", basic: "Email", premium: "Priority", elite: "24/7 + Personal" },
    { name: "Reading Analytics", basic: "Basic", premium: "Advanced", elite: "Premium + Insights" },
    { name: "Author Interactions", basic: "✗", premium: "Monthly", elite: "Unlimited" },
    { name: "Book Clubs", basic: "✗", premium: "✓", elite: "✓ + Private" },
    { name: "Rewards Program", basic: "✗", premium: "✓", elite: "✓ + Bonus" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Reading
            <span className="text-emerald-600"> Adventure</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Unlock the full potential of your reading journey with our flexible membership plans.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-emerald-600 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-emerald-600"
            />
            <span className={`text-lg ${isAnnual ? 'text-emerald-600 font-semibold' : 'text-gray-500'}`}>
              Annual
            </span>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
              Save 20%
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-emerald-500 shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <plan.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-600">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-center space-x-3">
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                        : 'bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    {plan.popular ? 'Start Premium' : `Choose ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See exactly what's included in each membership tier to make the best choice for your reading goals.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-900">
                      Basic
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-emerald-600">
                      Premium
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-900">
                      Elite
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {feature.basic}
                      </td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-medium">
                        {feature.premium}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-900">
                        {feature.elite}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Integration Notice */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto">
            <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Secure Payment Processing
            </h2>
            <p className="text-gray-600 mb-6">
              We use industry-leading payment processors to ensure your transactions are safe and secure. 
              All plans include a 30-day money-back guarantee.
            </p>
            <div className="flex justify-center space-x-8 items-center">
              <div className="text-sm text-gray-500">Powered by</div>
              <div className="font-semibold text-blue-600">Stripe</div>
              <div className="text-gray-400">•</div>
              <div className="font-semibold text-blue-600">PayPal</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}