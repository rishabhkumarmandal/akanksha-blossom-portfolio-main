
import React, { useState, useEffect } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director, Wellness Institute',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Akanksha brings a unique perspective that bridges ancient wisdom with cutting-edge technology. Her research has revolutionized how we approach holistic wellness.',
      rating: 5
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Dean of Technology, Health University',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Her presentations are inspiring and deeply insightful. Akanksha has the rare ability to make complex concepts accessible while maintaining scientific rigor.',
      rating: 5
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Ayurveda Practitioner & Researcher',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Working with Akanksha has been transformative. Her innovative approach to integrating traditional practices with modern technology is groundbreaking.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO, TechHealth Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Akanksha\'s expertise in wellness technology is unmatched. She helped us develop solutions that truly make a difference in people\'s lives.',
      rating: 5
    },
    {
      name: 'Dr. Lisa Anderson',
      role: 'Research Director, Global Wellness Council',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      content: 'Her research methodology is exemplary, and her ability to communicate complex findings to diverse audiences is remarkable. A true thought leader.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-indigo-900/50">
      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-20 left-10 text-purple-300/30 animate-sparkle" size={20} />
        <Star className="absolute top-40 right-20 text-indigo-300/30 animate-sparkle animation-delay-1000" size={24} />
        <Star className="absolute bottom-32 left-20 text-purple-400/30 animate-sparkle animation-delay-500" size={18} />
        <Star className="absolute bottom-20 right-10 text-indigo-400/30 animate-sparkle animation-delay-1500" size={22} />
        <Heart className="absolute top-1/2 left-1/4 text-purple-200/20 animate-heart-pulse" size={16} />
        <Heart className="absolute top-1/3 right-1/4 text-indigo-200/20 animate-heart-pulse animation-delay-1000" size={18} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">What People Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Testimonials from colleagues, collaborators, and those touched by my work 
            in wellness technology and research.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-slate-800/60 border-purple-500/30 backdrop-blur-sm p-8 text-center relative overflow-hidden">
                    {/* Soft Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg blur opacity-30" />
                    
                    <div className="relative">
                      {/* Avatar with Heart Shape Effect */}
                      <div className="relative mx-auto w-24 h-24 mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse" />
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="relative w-full h-full object-cover rounded-full border-4 border-white/20"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-purple-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author Info */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                        <p className="text-purple-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-slate-800/80 border-purple-500/50 text-purple-300 hover:bg-purple-900/50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-slate-800/80 border-purple-500/50 text-purple-300 hover:bg-purple-900/50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-slate-600 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
