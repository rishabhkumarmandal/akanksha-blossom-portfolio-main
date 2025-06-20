
import React, { useState, useEffect } from 'react';
import { Star, Heart, Book, Flower } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Ayurveda Research', level: 95, color: 'from-purple-500 to-indigo-500' },
    { name: 'Public Speaking', level: 90, color: 'from-indigo-500 to-purple-600' },
    { name: 'Technology Integration', level: 85, color: 'from-purple-600 to-slate-600' },
    { name: 'Wellness Consulting', level: 92, color: 'from-slate-600 to-purple-500' },
    { name: 'Research Writing', level: 88, color: 'from-purple-500 to-indigo-600' },
    { name: 'Digital Health', level: 80, color: 'from-indigo-600 to-purple-700' }
  ];

  const RadialProgress = ({ skill, index }: { skill: any, index: number }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setProgress(skill.level);
        }, index * 200);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index]);

    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative group">
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-slate-700/30"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray,
                strokeDashoffset,
                transition: 'stroke-dashoffset 2s ease-in-out'
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{Math.round(progress)}%</span>
          </div>
        </div>
        <h3 className="text-center mt-4 text-white font-medium group-hover:text-purple-300 transition-colors">
          {skill.name}
        </h3>
        
        {/* Tooltip */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {skill.name}: {skill.level}%
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-indigo-900">
      {/* Floating Flowers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Flower className="absolute top-20 left-10 text-purple-300/30 animate-float" size={20} />
        <Flower className="absolute top-40 right-20 text-indigo-300/30 animate-float animation-delay-1000" size={24} />
        <Flower className="absolute bottom-32 left-20 text-purple-400/30 animate-float animation-delay-500" size={18} />
        <Star className="absolute bottom-20 right-10 text-indigo-400/30 animate-sparkle" size={16} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">My Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A diverse skill set combining ancient wisdom with modern technology, 
            creating meaningful impact in the wellness and research space.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div key={skill.name} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
              <RadialProgress skill={skill} index={index} />
            </div>
          ))}
        </div>

        {/* Additional Skills Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-slate-800/50 border-purple-500/30 p-6 text-center group hover:scale-105 transition-transform duration-300">
            <Heart className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:animate-heart-pulse" />
            <h4 className="font-semibold text-white mb-2">Holistic Approach</h4>
            <p className="text-sm text-gray-400">Integrating mind, body, and technology</p>
          </Card>
          
          <Card className="bg-slate-800/50 border-indigo-500/30 p-6 text-center group hover:scale-105 transition-transform duration-300">
            <Star className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:animate-sparkle" />
            <h4 className="font-semibold text-white mb-2">Innovation</h4>
            <p className="text-sm text-gray-400">Bridging traditional and modern practices</p>
          </Card>
          
          <Card className="bg-slate-800/50 border-purple-600/30 p-6 text-center group hover:scale-105 transition-transform duration-300">
            <Book className="w-8 h-8 text-purple-300 mx-auto mb-3 group-hover:animate-float" />
            <h4 className="font-semibold text-white mb-2">Research Excellence</h4>
            <p className="text-sm text-gray-400">Evidence-based wellness solutions</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
