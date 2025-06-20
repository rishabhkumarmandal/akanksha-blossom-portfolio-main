
import React, { useState } from 'react';
import { Heart, Star, Send, Flower } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Thank you! Your message has been sent. I\'ll get back to you soon! 💜');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Flowers */}
        <Flower className="absolute top-20 left-10 text-purple-300/30 animate-float" size={24} />
        <Flower className="absolute top-40 right-20 text-indigo-300/30 animate-float animation-delay-1000" size={28} />
        <Flower className="absolute bottom-32 left-20 text-purple-400/30 animate-float animation-delay-500" size={22} />
        <Star className="absolute bottom-20 right-10 text-indigo-400/30 animate-sparkle" size={20} />
        <Heart className="absolute top-1/2 left-1/4 text-purple-200/20 animate-heart-pulse" size={18} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on wellness technology, discuss research opportunities, 
            or invite me for speaking engagements? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-slate-800/60 border-purple-500/30 backdrop-blur-sm p-8 relative overflow-hidden animate-slide-in">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Heart className="mr-3 text-purple-400" size={24} />
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-400"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-400"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none group-hover:border-purple-400"
                    placeholder="Share your thoughts, ideas, or collaboration proposals..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-lg font-medium transition-all duration-300 heart-hover disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2" size={18} />
                      Send Message
                      <Heart className="ml-2 animate-heart-pulse" size={18} />
                    </div>
                  )}
                </Button>

                {/* Submit Status */}
                {submitStatus && (
                  <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in animation-delay-300">
            {/* Quick Contact Cards */}
            <div className="space-y-6">
              <Card className="bg-slate-800/60 border-purple-500/30 backdrop-blur-sm p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Speaking Engagements</h4>
                    <p className="text-gray-400">Invite me for conferences, workshops, and seminars</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-800/60 border-indigo-500/30 backdrop-blur-sm p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Research Collaboration</h4>
                    <p className="text-gray-400">Partner with me on wellness technology projects</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-800/60 border-purple-600/30 backdrop-blur-sm p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Flower className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Mentorship & Guidance</h4>
                    <p className="text-gray-400">Seeking guidance in wellness-tech research</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quote Section */}
            <Card className="bg-slate-800/60 border-purple-500/30 backdrop-blur-sm p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-indigo-200/20 rounded-full blur-xl" />
              
              <div className="relative">
                <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-4">
                  "Every conversation is an opportunity to learn, grow, and create meaningful connections 
                  that bridge hearts and minds across the wellness technology landscape."
                </blockquote>
                <cite className="text-purple-400 font-medium">- Akanksha Chauhan</cite>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
